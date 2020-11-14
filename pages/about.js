import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'

export default function About(){
	return (
     <>
     <Layout>
     <Head>
      <title>This is a about us page.</title>

     </Head>
	 <h1>About us page</h1>
	 <Link href="/"><a>Back to home page</a></Link>
     </Layout>
	 </>
	 )
}