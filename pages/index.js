import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import NavBar from "../components/nav/Navbar";
import SectionCards from "../components/card/SectionCards";
import { getVideos } from "../lib/videos";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos();

  return {
    props: { disneyVideos }, // will be passed to the page component as props
  };
}

export default function Home({ disneyVideos }) {
  console.log({ disneyVideos });
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="ankita@ank.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  );
}
