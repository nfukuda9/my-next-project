import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
//import { News } from "@/app/_libs/microcms";
/*
const data: {
  contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "Mリーグとコラボし、丸善日本橋店に出店します",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023/05/19",
        createAt: "2023/05/19",
      },
      {
        id: "2",
        title: "ワインやチーズにまつわるニュースを更新しました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023/05/19",
        createAt: "2023/05/19",
      },
      {
        id: "3",
        title: "サイトを公開しました！",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023/04/19",
        createAt: "2023/04/19",
      },
    ],
  };
*/


export default async function Home() {

//  const sliceData = data.contents.slice(0,2);
//  const sliceData: News = [];
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>まなびのテラス</h1>
        <p className={styles.description}>まなびを通じて、くらしにたのしいを創ろう</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/yvet1bxofdtyjf3qftzx.png"
        alt=""
        width={4000}
        height={1200}
      />
    </section>

    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news ={data.contents} />

      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっとみる</ButtonLink>
      </div>
    </section>  
  </>
  );
}

