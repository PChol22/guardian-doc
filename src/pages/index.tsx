import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { Title } from '../components/title';
import { Buttons } from '../components/buttons';
import { Card } from '../components/card';
import { Contributors } from '../components/contributors';

const Home = (): JSX.Element => <Layout
  title="Homepage"
  description="Guardian Homepage">
  <main className={styles.mainContainer}>
    <section className={styles.mainSection}>
      <div className={styles.leftSection}>
        <div>
          <Title />
        </div>
        <h1 className={styles.title}>
          Open-source serverless infrastructure audit
        </h1>
        <h3 className={styles.subtitle}>
          Discover and enforce new best practices!
        </h3>
        <Buttons />
      </div>
      <div className={styles.rightSection}>
        <img src="img/guardian.svg" />
      </div>
    </section>
    <section>
      <div className={styles.cardsContainer}>
        <Card title="Built for AWS" message="We support AWS serverless services such as Lambda, S3, EventBridge and many more!"></Card>
        <Card title="Framework agnostic" message="Built on AWS sdk. We check your resources online and support every deployment method."></Card>
        <Card title="Easy to implement" message="Start from the most important, improve your app step-by-step by climbing difficulty levels"></Card>
        <Card title="Free and open-source" message="We are open to contributions. Feel free to implement new rules and give some feedback!"></Card>
      </div>
    </section>
    <section>
      <Contributors />
    </section>
  </main>
</Layout>

export default Home;
