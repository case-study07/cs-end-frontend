import s from "../styles/main.module.css";
import { ReactNode } from "react";
import Link from "next/link";


import {AuctionLabels, Layout} from "../components/ui"
import { CarLabelCard } from "components/Card";
import {Category} from "components/common/";
import axios from "axios";




export default function Home({carData}): ReactNode {


  



  return (
    <>
      <Category />

      <article className={s.auctionLabel}>
        <h2>オークションLINEUP</h2>
        <Link href="/auctionlist" passHref>
          <a>オークション一覧へ{`>>`}</a>
        </Link>
        <AuctionLabels />
      </article>

      {/* <!-- ここまで --> */}

      {/* <!-- carDetail --> */}
      <article className={s.carDetailLabel}>
        <h2>オークション出展LINEUP</h2>
        {/* <!-- carDetail --> */}

        <CarLabelCard carData={carData} />

        <div className={s.pager}>
          <p>全1,560</p>
          <div>
            <a href="">戻る</a>
            <a href="">１</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">次へ</a>
          </div>
        </div>
      </article>
    </>
  );
}

Home.Layout = Layout;



export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:9000/car-body-number");
  const carData = await res.data
  return {
    props: {
      carData
    },
  };
}