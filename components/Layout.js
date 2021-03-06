import Link from "next/link";
import Head from "next/head";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
   return (
      <div className={styles.container}>
         <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
               name="description"
               content="Learn how to build a personal website using Next.js"
            />
            <meta
               property="og:image"
               content={`https://og-image.now.sh/${encodeURI(
                  siteTitle
               )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
         </Head>

         <header className={styles.header}>
            {home ? (
               <>
                  <img
                     alt="dog"
                     src="/images/profile.jpg"
                     className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  />

                  <h1 className={utilStyles.heading2Xl}>Calon_Jenazah</h1>
               </>
            ) : (
               <>
                  <Link href="/">
                     <a>
                        <img
                           alt="dog"
                           src="/images/profile.jpg"
                           className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                        />
                     </a>
                  </Link>

                  <h2 className={utilStyles.headingLg}>
                     <Link href="/">
                        <a className={utilStyles.colorInherit}>Calon_Jenazah</a>
                     </Link>
                  </h2>
               </>
            )}
         </header>

         <>{children}</>

         {!home && (
            <div className={styles.backToHome}>
               <Link href="/">
                  <a>← Back to home</a>
               </Link>
            </div>
         )}
      </div>
   );
}
