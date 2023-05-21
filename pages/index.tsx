import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "@/styles/Home.module.scss";

import { questions } from "@/assets/question";

const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget.nextElementSibling;
  target && target.classList.toggle("active");
};

const removeActiveClass = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.classList.remove("active");
};

export default function Home() {
  return (
    <>
      <div className={styled.inner}>
        {questions.map((question) => (
          <div key={question.pi} className={styled.question}>
            <p onClick={(e) => handleOnClick(e)}>{question.pi}</p>
            <div
              className={styled.hidden}
              onClick={(e) => removeActiveClass(e)}
            >
              <p>CH: {question.ch}</p>
              <p>JP: {question.jp}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
