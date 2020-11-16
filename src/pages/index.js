/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import Layout from '@theme/Layout'

import clsx from 'clsx'

import styles from './styles.module.css'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig: { customFields = {}, tagline } = {} } = context
  return (
    <Layout permalink='/' title={tagline} description={customFields.description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img alt='Docusaurus with Keytar' className={styles.heroLogo} src={useBaseUrl('img/otomi_logo.svg')} />
              Bootstrap <span className={styles.heroProjectKeywords}>kubernetes</span> clusters in{' '}
              <span className={styles.heroProjectKeywords}>minutes</span>
            </h1>
            <div className={styles.indexCtas}>
              <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('docs/installation')}>
                Get Started
              </Link>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src='https://ghbtns.com/github-btn.html?user=redkubes&amp;repo=otomi-core&amp;type=star&amp;count=true&amp;size=large'
                  width={160}
                  height={30}
                  title='GitHub Stars'
                />
              </span>
            </div>
          </div>
        </div>
        <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            Check out our suite of <Link to={useBaseUrl('/about/app-suite')}>Industry Approved Apps</Link>.
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
