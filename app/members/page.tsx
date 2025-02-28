import Image from "next/image";
import styles from "./page.module.css";
import { getMembersList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";

/*
const data = {
    contents: [
        {
            id: "1",
            image: {
                url: "/img-member1.jpg",
                width: 240,
                height: 240,
            },
            name: "Devid-Chan",
            position: "CEO",
            profile:
                "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。"
        },
        {
            id: "2",
            image: {
                url: "/img-member2.jpg",
                width: 240,
                height: 240,
            },
            name: "Emiry-Sandaas",
            position: "CEO",
            profile:
                "aaaaaグローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。"
        },
        {
            id: "3",
            image: {
                url: "/img-member3.jpg",
                width: 240,
                height: 240,
            },
            name: "John-Willson",
            position: "CTO",
            profile:
                "bbbbbグローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。"
        },

    ],
};
*/

export default async function Page(){
    const data = await getMembersList();
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません。</p>
            ) : (
                <ul>
                    {data.contents.map((member) => (
                        <li key={member.id} className={styles.list}>
                            <Image
                                src={member.image.url}
                                alt=""
                                width={member.image.width}
                                height={member.image.height}
                                className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{member.name}</dt>
                                <dd className={styles.position}>{member.position}</dd>
                                <dd className={styles.profile}>{member.profile}</dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}