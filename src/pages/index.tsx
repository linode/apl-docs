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
              Self hosted PaaS for Kubernetes
            </h1>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl("docs/get-started/installation")}
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
            One schema to rule them all 
          </div>
        </div>
        <div className={clsx(styles.announcement, styles.announcementList)}>
          <div className={`${clsx(styles.appsContainer)}`}>
            <div className={`row ${clsx(styles.center)}`}>
              {apps.map((app) => (
                <div className="col col--3" key={app.name}>
                  <div className="avatar avatar--vertical margin-bottom--lg">
                    <a href={app.href}>
                      <img
                        alt={app.name}
                        className={`avatar__photo avatar__photo--lg ${clsx(
                          styles.logo
                        )}`}
                        src={useBaseUrl(`img/${app.src}`)}
                      />
                    </a>
                    <div className="avatar__intro padding-top--sm">
                      <h3 className="avatar__name">{app.name}</h3>
                      <small className={`row ${clsx(styles.appDescription)}`}>
                        {app.desc}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
