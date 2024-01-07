/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//  import React from 'react';
//  import {Redirect} from '@docusaurus/router';
//  const Home = () => {
//    return <Redirect to="/docs" />;
//  };

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";
import apps from "../data/apps";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields, tagline } = {} } = context;
  const description = customFields.description as string;
  return (
    <Layout title={tagline} description={description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt="Otomi logo"
                className={styles.heroLogo}
                src={useBaseUrl("img/otomi-logo.svg")}
              />
              Self hosted DevOps PaaS for Kubernetes
            </h1>
            <h2 className={styles.heroProjectSubLine}>A paved road for DevOps teams from code to production</h2>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl("/docs/get-started/overview")}
              >
                Get Started
              </Link>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=redkubes&amp;repo=otomi-core&amp;type=star&amp;count=true&amp;size=large"
                  width={160}
                  height={30}
                  title="GitHub Stars"
                />
              </span>
            </div>
          </div>
        </div>
        <div className={clsx(styles.announcement, styles.announcementBanner)}>
          <div className={styles.announcementInner}>
            <h1>Build, Deploy and Run applications at scale</h1> <h4>With one consistent experience on any CNCF conformant Kubernetes cluster across public cloud, on-premise and hybrid cloud</h4>
          </div>
          <div>
            <img 
              src={useBaseUrl("img/otomi-console.png")}
              alt="Otomi web console" 
              width="800" 
              height="600"
            />
          </div>
        </div>
        {/* <div className={clsx(styles.announcement, styles.announcementBanner)}>
          <div className={styles.announcementInner}>
            <h1>FEATURE OVERVIEW</h1> <h4>Install Otomi and deploy your app in just a couple of minutes</h4>
          </div>
        </div>
        <div
          id="carousel"
          className={clsx(styles.announcement, styles.announcementDark)}
        >
          <div className={styles.announcementInner}>
            <Carousel items={carouselItems} />
          </div>
        </div> */}
      </main>
    </Layout>
  );
}

export default Home;
