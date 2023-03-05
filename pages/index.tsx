import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import WalletContextProvider from '../components/WalletContextProvider'
import { AppBar } from '../components/AppBar'
import { BalanceDisplay } from '../components/BalanceDisplay'
import { SendSolForm } from '../components/SendSolForm'
import Head from 'next/head'
import { LeftBar } from '../components/LeftBar'
import { MainArea } from '../components/MainArea'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <WalletContextProvider>


        <AppBar />
        <div className={styles.mainArea0}>
          <LeftBar />
          <MainArea />
        </div>



        {/* <div className={styles.AppBody}>
          <BalanceDisplay />
          <SendSolForm />
        </div> */}
      </WalletContextProvider >
    </div>
  );
}

export default Home;