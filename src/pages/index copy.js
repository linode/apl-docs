import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

export default function () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={`Otomi`} description='Documentation for the Otomi Container Platform'>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className={styles.heroBanner}>{siteConfig.title}</h1>
          <p className={styles.heroBanner}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames('button button--outline button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/about')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </Layout>
  )
}
