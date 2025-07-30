import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BlockchainAnimation from '../components/BlockchainAnimation';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <BlockchainAnimation />
      <div className={clsx("container", styles.heroContent)}>
        <Heading as="h1" className="hero__title">
          Love2Stake
        </Heading>
        <p className="hero__subtitle">
          0% Fee Cardano Stake Pool · Powered by Love2 Automate
        </p>
        <div className={styles.buttons}>
          <Link
            className={styles.customButton}
            to="/docs/getting-started">
            Documentation
          </Link>
          <Link
            className={styles.customButton}
            to="/docs/getting-started">
            Delegate to LOVE2
          </Link>
        </div>
      </div>
    </header>
  );
}


function FeaturesSection() {
  const features = [
    {
      title: 'Zero Fee Staking',
      description: 'Maximize your rewards with our 0% fee structure. Every ADA you earn stays in your pocket.',
      icon: '💎',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Military-grade infrastructure with 24/7 monitoring and automated failover systems.',
      icon: '🛡️',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Developer APIs',
      description: 'Build on Cardano with our comprehensive APIs, SDKs, and developer tools.',
      icon: '⚡',
      gradient: 'from-orange-500 to-red-600'
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Why Choose Love2Stake</h2>
          <p>Built for the future of decentralized finance</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className={styles.featureGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  const links = [
    {
      title: 'Get Started',
      description: 'Complete guides for developers and delegators to start building on Cardano.',
      to: '/docs/getting-started',
      icon: '🚀',
    },
    {
      title: 'Stake Pool Setup',
      description: 'Learn how to set up and manage your own Cardano stake pool infrastructure.',
      to: '/docs/how-to-set-up-a-cardano-stake-pool',
      icon: '⚙️',
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive REST and GraphQL API documentation for developers.',
      to: '/docs/getting-started',
      icon: '📚',
    },
    {
      title: 'Community',
      description: 'Join our Discord community and connect with other Cardano developers.',
      to: '/docs/getting-started',
      icon: '👥',
    },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Developer Resources</h2>
          <p>Everything you need to build on Cardano</p>
        </div>
        <div className={styles.quickLinksGrid}>
          {links.map((link, idx) => (
            <Link key={idx} to={link.to} className={styles.quickLinkCard}>
              <div className={styles.quickLinkIcon}>{link.icon}</div>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <div className={styles.cardArrow}>→</div>
            </Link>
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
              <li><Link to="/docs/getting-started">How to Contribute</Link></li>
              <li><Link to="/docs/getting-started">Contributors</Link></li>
              <li><Link href="https://github.com/Love2Stake">GitHub Repository</Link></li>
              <li><Link to="/docs/getting-started">Style Guide</Link></li>
            </ul>
          </div>
          <div className="col col--4">
            <h3>Developer Community</h3>
            <ul className={styles.linkList}>
              <li><Link href="https://discord.gg/love2stake">Discord</Link></li>
              <li><Link href="https://forum.love2stake.com">Community Forum</Link></li>
              <li><Link to="/docs/getting-started">Developer Resources</Link></li>
              <li><Link to="/docs/getting-started">More</Link></li>
            </ul>
          </div>
          <div className="col col--4">
            <h3>More about Love2Stake</h3>
            <ul className={styles.linkList}>
              <li><Link to="/docs/getting-started">Careers</Link></li>
              <li><Link href="https://love2stake.com">Love2Stake Platform</Link></li>
              <li><Link to="/change-log">Development Updates</Link></li>
              <li><Link to="/docs/getting-started">Stake Pool Operations</Link></li>
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
        <FeaturesSection />
        <QuickLinks />
        <CommunitySection />
      </main>
    </Layout>
  );
}
