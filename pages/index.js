import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css"
import LotteryEntrance from "../components/LotteryEntrance";
// import ManualHeader from "../components/ManualHeader";

import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Decentralized Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery"/>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header/>
      <LotteryEntrance/>

    </div>
  )
}