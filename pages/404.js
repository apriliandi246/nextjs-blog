import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
   return (
      <>
         <Head>
            <title>404</title>
         </Head>

         <h1 className={utilStyles.error}>404 - Page Not Found</h1>
         <Link href="/">
            <a className={utilStyles.home}>← Back to home</a>
         </Link>
      </>
   );
}
