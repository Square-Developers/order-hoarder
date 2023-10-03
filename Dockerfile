FROM 186216918747.dkr.ecr.us-west-2.amazonaws.com/base/runtime-centos7-debug:latest

# Args given when the image is built in kochiku
ARG APP_NAME
ARG SHA
ARG USER
ARG ARTIFACT_DESTINATION

RUN curl -sfLv https://hoistrepo-api.sso.global.square/download/user-submitted-artifacts/nodejs/node-v18.16.0-linux-x64.tar.gz | tar zxv -C /usr/local
ENV PATH="/usr/local/node-v18.16.0-linux-x64/bin:${PATH}"

# Install the AWS CLI and process credentials for CI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

RUN mkdir -p script
COPY script/init-ci-secrets-credentials ./script/init-ci-secrets-credentials
ENV CI_SECRETS_AWS_CREDENTIALS_FILE /ci-secrets/ci_secrets_aws_credentials
ENV KOCHIKU_ENV production
RUN ./script/init-ci-secrets-credentials

RUN npm config set strict-ssl true \
  && npm config set registry "https://artifactory.global.square/artifactory/api/npm/square-npm/" \
  && npm config set cafile "/etc/ssl/certs/ca-bundle.crt"

# In the container we will only have one launchable per pod so launchable_id is
# the same as pod_id.
ENV POD_ID ${APP_NAME}
ENV POD_HOME /data/pods/${POD_ID}

RUN mkdir -p ${POD_HOME}/{secrets,current}

ENV LAUNCHABLE_HOME ${POD_HOME}/current
ENV SECRETS_PATH ${POD_HOME}/secrets

WORKDIR ${LAUNCHABLE_HOME}

# Install dependencies with yarn
RUN npm install -g yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the application
COPY vite.config.ts app.config.ts tsconfig.json ./
COPY client/ ./client/
COPY server/ ./server/
COPY utils/ ./utils/
RUN yarn build

COPY bin/ ./bin/

ENTRYPOINT ["sh", "-c", "${LAUNCHABLE_HOME}/bin/launch"]
