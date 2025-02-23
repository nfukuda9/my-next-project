import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category:  {
    name: string;
  }
  publishedAt: string;
  createAt: string;
}

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



export default function Home() {

  const sliceData = data.contents.slice(0,2);

  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>ゆるゆるカンパニー</h1>
        <p className={styles.description}>くらしのたのしいを創造し、届けるサイトです。</p>
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
      <ul>
        {sliceData.map((article) => (
          <li key={article.id} className={styles.list}>
            <div className={styles.link}>
              <Image 
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
              <dl className={styles.content}>
                <dt className={styles.newsItemTitle}> {article.title}</dt>
                <dd className={styles.meta}>
                  <span className={styles.tag}> {article.category.name}</span>
                  <span className={styles.date}>
                    <Image
                      src="/clock.svg"
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                    {article.publishedAt}
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </section>  
  </>
  );
}

