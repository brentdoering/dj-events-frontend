import Head from "next/head";
import styles from '../styles/Layout.module.css'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>

        <div className={styles.container}>
        {children}
        </div>
    </div>
  )
}

Layout.defaultProps = {
    title: 'DJ Events | Find nearby parties with music!',
    description: 'Find latest and closest music events, mostly DJ focused.',
    keywords: 'music, dj, events, edm, concerts, house music'
}
