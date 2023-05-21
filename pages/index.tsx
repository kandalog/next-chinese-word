import styled from "@/styles/Home.module.scss";

import { questions as materialQuestion } from "@/assets/question";
import { useState } from "react";

const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget.nextElementSibling;
  target && target.classList.toggle("active");
};

const removeActiveClass = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.classList.remove("active");
};

function shuffle(a: any) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export default function Home() {
  const [questions, setQuestions] = useState(materialQuestion);

  const shuffleButton = () => {
    setQuestions((prevState) => shuffle([...prevState]));
  };

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

      <button className={styled.shuffle} onClick={shuffleButton}>
        シャッフル
      </button>
    </>
  );
}
