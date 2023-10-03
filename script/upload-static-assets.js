/**
 * This script uploads static assets to staging and production AWS S3 cloud
 * storage buckets. It should be executed as part of the deployable build for
 * the repository convergence branch.
 */
import { lstatSync, readFileSync } from 'fs';
import AWS from 'aws-sdk';
import mime from 'mime';
import glob from 'glob';

/**
 * Constants
 * - Change IS_PROD_ENABLED to true when you're ready to promote your application to production
 */
const BASE_PATH = process.cwd();
const IS_PROD_ENABLED = false;

// Kochiku-provided environment variables for the current application build
const APPLICATION_NAME = process.env.APP_NAME;
const AWS_SHARED_CREDENTIALS_FILE = process.env.AWS_SHARED_CREDENTIALS_FILE;
const CI_ROLE_STAGING_ARN = process.env.CI_ROLE_STAGING_ARN || '';
const CI_ROLE_PRODUCTION_ARN = process.env.CI_ROLE_PRODUCTION_ARN || '';
/**
 * ARTIFACT_DESTINATION is set to 'deployable' for convergence
 * branch builds, and 'staging-only' for canary builds.
 */
const ARTIFACT_DESTINATION = process.env.ARTIFACT_DESTINATION || '';
const DESTINATION_DEPLOYABLE = 'deployable';
const DESTINATION_CANARY = 'staging-only';

/**
 * The following variables can fluctuate per-application or per-environment.
 */
const STAGING_S3_BUCKET_NAME = `staging-${APPLICATION_NAME}-bucket`;
const PRODUCTION_S3_BUCKET_NAME = `production-${APPLICATION_NAME}-bucket`;

// Top-level build/bundle output directory for the client-side web application.
const STAGING_BUILD_DIR = `${BASE_PATH}/dist/staging/client`;
const PRODUCTION_BUILD_DIR = `${BASE_PATH}/dist/production/client`;

// Build/bundle output directory for client-side static assets (JS/CSS/images/etc.)
const STAGING_STATIC_ASSET_PATH = `${STAGING_BUILD_DIR}/assets/`;
const PRODUCTION_STATIC_ASSET_PATH = `${PRODUCTION_BUILD_DIR}/assets/`;

/**
 * Cache-Control header constants and corresponding logic are based on the
 * strategy recommended by Create React App. Any files with a cache bust hash
 * in the file name or path are cached aggressively, while other assets are not
 * cached.
 *
 * {@link https://create-react-app.dev/docs/production-build/#static-file-caching}
 */
const CACHE_CONTROL_NO_CACHE = 'no-cache';
const CACHE_CONTROL_WITH_CACHE = 'max-age=31536000';

function logWithFencing(...args) {
  console.log('\n===', ...args, '===');
}

function getAWSCredentials(profile) {
  const credentials = new AWS.ProcessCredentials({
    profile,
    filename: AWS_SHARED_CREDENTIALS_FILE,
  });

  return credentials;
}

async function uploadToS3({
  awsCredentials,
  directory,
  s3BucketName,
  shouldCache,
}) {
  const s3 = new AWS.S3({
    credentials: awsCredentials,
  });
  const files = glob.sync(`${directory}/**`, { cache: 'FILE' });
  const fileUploadPromises = [];

  logWithFencing('Configuring files for upload to cloud storage');

  files.forEach((file) => {
    const stats = lstatSync(file);

    if (stats.isDirectory()) {
      return;
    }

    const cacheControl = shouldCache(file)
      ? CACHE_CONTROL_WITH_CACHE
      : CACHE_CONTROL_NO_CACHE;

    console.log(`Syncing ${file} with Cache-Control: ${cacheControl}`);

    fileUploadPromises.push(
      s3
        .upload({
          Body: readFileSync(file),
          Bucket: s3BucketName,
          CacheControl: cacheControl,
          ContentType: mime.getType(file),
          Key: file.slice(`${directory}/`.length),
        })
        .promise()
    );
  });

  logWithFencing(`Uploading files to AWS S3 Bucket (${s3BucketName})`);

  await Promise.all(fileUploadPromises);
  logWithFencing(
    `Successfully uploaded files to AWS S3 Bucket (${s3BucketName})`
  );
}

logWithFencing('Deploying assets via scripts/upload-static-assets.js');

// Execution wrapper ensures errors result in non-zero exit code.
await (async function () {
  try {
    if (!ARTIFACT_DESTINATION) {
      console.log(`No ARTIFACT_DESTINATION environment variable is configured.`);
      console.log(`Skipping asset upload process.`);
      return;
    }

    const uploadPromises = [];

    if (
      ARTIFACT_DESTINATION === DESTINATION_CANARY ||
      ARTIFACT_DESTINATION === DESTINATION_DEPLOYABLE
    ) {
      uploadPromises.push(
        uploadToS3({
          awsCredentials: getAWSCredentials(CI_ROLE_STAGING_ARN),
          directory: STAGING_BUILD_DIR,
          s3BucketName: STAGING_S3_BUCKET_NAME,
          shouldCache: (file) => file.startsWith(STAGING_STATIC_ASSET_PATH),
        })
      );
    }

    if (IS_PROD_ENABLED && ARTIFACT_DESTINATION === DESTINATION_DEPLOYABLE) {
      uploadPromises.push(
        uploadToS3({
          awsCredentials: getAWSCredentials(CI_ROLE_PRODUCTION_ARN),
          directory: PRODUCTION_BUILD_DIR,
          s3BucketName: PRODUCTION_S3_BUCKET_NAME,
          shouldCache: (file) => file.startsWith(PRODUCTION_STATIC_ASSET_PATH),
        })
      );
    }

    if (uploadPromises.length === 0) {
      console.log(
        `No asset upload configured for ARTIFACT_DESTINATION: ${ARTIFACT_DESTINATION}.`
      );
      return;
    }

    await Promise.all(uploadPromises);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
