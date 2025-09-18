import { ReactElement } from "react";
import Header from "./Header";
import Mfooter from "./Mfooter";
import Sheader from "./Sheader";
import Head from "next/head";


type prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  };
export default function MainLayout({children }:prop) {
  return (
    <>
    <Head>
    <link rel="icon" href="./mr.png"></link>
    </Head>
    <Sheader/>
    <Header/>
     <>{children}</>
     <Mfooter/>
    </>
  )
}
