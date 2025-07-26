import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Love2Stake Documentation
        </Heading>
        <p className="hero__subtitle">
          Complete guides, API references, and resources for the Love2Stake platform
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/hello">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: 'Easy Integration',
      icon: '🚀',
      description: 'Get started with Love2Stake quickly using our comprehensive guides and examples.',
    },
    {
      title: 'Powerful APIs',
      icon: '⚡',
      description: 'Access robust staking functionality through our well-documented REST and GraphQL APIs.',
    },
    {
      title: 'Developer Friendly',
      icon: '💻',
      description: 'Built with developers in mind, featuring clear documentation and helpful code samples.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  const links = [
    {
      title: 'API Reference',
      description: 'Explore our comprehensive API documentation',
      to: '/docs/hello',
      icon: '📚',
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step guides to get you started',
      to: '/docs/hello',
      icon: '🎓',
    },
    {
      title: 'Examples',
      description: 'Real-world code examples and use cases',
      to: '/docs/hello',
      icon: '💡',
    },
    {
      title: 'Support',
      description: 'Get help from our community and support team',
      to: '/docs/hello',
      icon: '🆘',
    },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Quick Links
        </Heading>
        <div className="row">
          {links.map((link, idx) => (
            <div key={idx} className="col col--3 margin-bottom--md">
              <Link to={link.to} className={styles.quickLinkCard}>
                <div className={styles.quickLinkIcon}>{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Love2Stake Documentation - Complete guides, API references, and resources for developers">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickLinks />
      </main>
    </Layout>
  );
}
