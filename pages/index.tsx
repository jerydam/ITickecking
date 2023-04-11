import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import Head from "next/head";
import { ConnectButton } from '@rainbow-me/rainbowkit';

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

import "react-toastify/dist/ReactToastify.css";


const Home: NextPage = () => {
  const notify = () =>
    toast("You're Warmly Welcome");

  return (
    <>
      <Head>
        <title>ITickect</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <div className="mockup-window border bg-inherit p-[1.25rem]">
          <div className="flex flex-col justify-center p-4 bg-inherit gap-4">
            <div className={styles.iconContainer}>
              <a
                href="https://ITicket.create"
                target="_blank"
                rel="noopener noreferrer">
                {' '}
                <Image
                  src="/images/builderz-logo-b.png"
                  height={150}
                  width={130}
                  style={{
                    objectFit: 'contain',
                  }}
                  alt="builderz"
                />
              </a>
              <Image
                width={150}
                height={150}
                src="/sol.png"
                className={styles.icon}
                alt="sol"
              />
            </div>
            <h1 className={styles.h1}>
              Hello, You are Welcome 👋 to ITicket platform,
            </h1>
            <p className={styles.explain}>
              <b>The future of Event Registration platform</b>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-around  items-center py-8">
              <button onClick={notify} className="btn glow-on-hover">
                Register Event
              </button>
              <Modal />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
