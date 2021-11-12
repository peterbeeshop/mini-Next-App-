import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>List of People | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          This mini website is about a list of people that we fetch from
          <b> https://jsonplaceholder.typicode.com/users</b> A free and open api
          for anyone trying to work with apis and json data.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa
          nihil vel ullam quos.
        </p>
        <Link href="/people">
          <a className={styles.btn}>See List of people</a>
        </Link>
      </div>
    </>
  );
}
