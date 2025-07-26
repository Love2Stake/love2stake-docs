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
          Love2Stake Developer Portal
        </Heading>
        <p className="hero__subtitle">
          Let's build together
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/hello">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  const links = [
    {
      title: 'Get Started',
      description: 'Get an overview of Love2Stake, understand the components, discover builder tools, learn technical concepts and connect to the developer community.',
      to: '/docs/hello',
      icon: '🚀',
    },
    {
      title: 'Integrate Love2Stake',
      description: 'Explore Love2Stake APIs and learn how to integrate staking functionality into applications and websites.',
      to: '/docs/hello',
      icon: '🔗',
    },
    {
      title: 'Build with APIs',
      description: 'Learn about our REST and GraphQL APIs, authentication, rate limiting and how to build production applications.',
      to: '/docs/hello',
      icon: '⚡',
    },
    {
      title: 'Pool Management',
      description: 'Discover automated pool management tools, monitoring systems, and best practices for stake pool operators.',
      to: '/docs/hello',
      icon: '🏊‍♂️',
    },
    {
      title: 'Delegation Tools',
      description: 'Learn how to implement delegation features, reward tracking, and portfolio management for your users.',
      to: '/docs/hello',
      icon: '💰',
    },
    {
      title: 'Developer Resources',
      description: 'Access code examples, SDKs, testing environments, and community resources to accelerate your development.',
      to: '/docs/hello',
      icon: '🛠️',
    },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className="row">
          {links.map((link, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
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

function CommunitySection() {
  return (
    <section className={styles.communitySection}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h3>Developer Portal</h3>
            <ul className={styles.linkList}>
              <li><Link to="/docs/hello">How to Contribute</Link></li>
              <li><Link to="/docs/hello">Contributors</Link></li>
              <li><Link href="https://github.com/Love2Stake">GitHub Repository</Link></li>
              <li><Link to="/docs/hello">Style Guide</Link></li>
            </ul>
          </div>
          <div className="col col--4">
            <h3>Developer Community</h3>
            <ul className={styles.linkList}>
              <li><Link href="https://discord.gg/love2stake">Discord</Link></li>
              <li><Link href="https://forum.love2stake.com">Community Forum</Link></li>
              <li><Link to="/docs/hello">Developer Resources</Link></li>
              <li><Link to="/docs/hello">More</Link></li>
            </ul>
          </div>
          <div className="col col--4">
            <h3>More about Love2Stake</h3>
            <ul className={styles.linkList}>
              <li><Link to="/docs/hello">Careers</Link></li>
              <li><Link href="https://love2stake.com">Love2Stake Platform</Link></li>
              <li><Link to="/blog">Development Updates</Link></li>
              <li><Link to="/docs/hello">Stake Pool Operations</Link></li>
            </ul>
          </div>
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
      description="Love2Stake Developer Portal - Complete guides, API references, and resources for developers">
      <HomepageHeader />
      <main>
        <QuickLinks />
        <CommunitySection />
      </main>
    </Layout>
  );
}
