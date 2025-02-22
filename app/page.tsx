import style from "./page.module.css";

export default function Home() {

  return (
    <div>
      <h1 className={style.title}>テクノロジーの力で世界を変える</h1>
      <p className={style.description}>私達は市場をリードしているグローバルテックカンパニーです。</p>
    </div>
  );
}

