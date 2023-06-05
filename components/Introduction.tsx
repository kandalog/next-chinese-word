import React from "react";
import styled from "@/styles/introduction.module.scss";

export const Introduction = () => {
  return (
    <div className={styled.container} id="introduction">
      <div className={styled.inner}>
        <h2 className={styled.title}>学習手順</h2>
        <p>1: 単語音読</p>
        <p>2: ピンイン → 日本語の意味</p>
        <p>
          3: ピンイン → 中国語 <br />
          (書き取り)
        </p>
        <p>4: キーポイント</p>
        <p>5: 練習問題 2 3</p>
        <p>6: 本文</p>
        <p>
          7: 中国語 → ピンイン
          <br /> (書き取り) ※発音記号なし
        </p>
        <p>8: ピンイン → 発音記号</p>
      </div>
    </div>
  );
};
