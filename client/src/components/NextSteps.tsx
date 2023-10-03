import { MarketLink } from '@market/react';

const links = [
  {
    title: 'Web Application Provisioning Guide',
    url: 'https://web-eng-guides.square.com/provision-a-web-application/',
  },
  {
    title: 'Market Storybook',
    url: 'https://market-storybook.s3.amazonaws.com/2.18.1/index.html',
  },
];

const features = [
  {
    category: 'Framework',
    title: 'React + TypeScript',
    url: 'https://reactjs.org/',
  },
  { category: 'Build tool', title: 'Vite', url: 'https://vitejs.dev/guide/' },
  {
    category: 'Linter',
    title: 'ESLint',
    url: 'https://github.com/square/eslint-plugin-square',
  },
  {
    category: 'Design system',
    title: 'Market',
    url: 'https://github.com/squareup/market/tree/main/web/react',
  },
  {
    category: 'Service container',
    title: 'Node Service Container',
    url: 'https://github.com/squareup/node-service-container',
  },
  {
    category: 'Testing framework',
    title: 'Vitest',
    url: 'https://vitest.dev',
  },
  {
    category: 'Testing library',
    title: 'React Testing Library',
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
  },
];

const NextSteps = () => {
  return (
    <>
      <h2>Next Steps</h2>
      <p className="paragraph-30">
        Congratulations on provisioning your web application! You now have a
        starter project set up with the following features:
      </p>
      <ul>
        {features.map(({ category, title, url }) => (
          <li key={title}>
            {category}:{' '}
            <MarketLink href={url} target="_blank">
              {title}
            </MarketLink>
          </li>
        ))}
      </ul>
      <p className="paragraph-30">
        Check out some of these other resources for developing your application:
      </p>
      <ul>
        {links.map(({ url, title }) => (
          <li key={title}>
            <MarketLink href={url} target="_blank">
              {title}
            </MarketLink>
          </li>
        ))}
      </ul>

      <p className="paragraph-30">
        Need support or have feedback about your experience? You can reach us at{' '}
        <a href="https://square.slack.com/archives/C02BS9NH0BZ">
          #web-foundation
        </a>
        .
      </p>
    </>
  );
};

export default NextSteps;
