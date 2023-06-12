import {
  questions as materialQuestion,
  remindQuestion,
  roadQuestions,
} from "@/assets/question";
import { useState } from "react";

export const useQuestion = () => {
  const [questions, setQuestions] = useState(materialQuestion);

  // データを押した時の処理
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.nextElementSibling;
    target && target.classList.toggle("active");
  };

  // 消す時の処理
  const removeActiveClass = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("active");
  };

  // シャッフルボタン
  const shuffleButton = () => {
    setQuestions((prevState) => shuffle([...prevState]));
  };

  // 漢字を問題として表示する
  const reverseQuestion = () => {
    // ピンインモードの場合は起動させない
    if (!questions[0].en) return;
    setQuestions((prevState) => {
      const newState = prevState.map((data) => {
        return {
          jp: data.jp,
          ch: data.pi,
          pi: data.ch,
          en: data.en,
        };
      });
      return newState;
    });
  };

  // ピンインモード
  const pin = () => {
    // 既にピンインモードの場合は処理しない
    if (!questions[0].en) return;
    // setQuestions(materialQuestion);
    setQuestions((prevState) => {
      const newState = prevState.map((data) => {
        return {
          ch: data.pi,
          pi: data.en,
        };
      });
      return newState;
    });
  };
  // reset
  const reset = () => {
    setQuestions(materialQuestion);
  };

  // 復習モード
  function changeToRemind() {
    setQuestions(remindQuestion);
  }

  // 中国語への道
  function changeToroad() {
    setQuestions(roadQuestions);
  }

  return {
    handleOnClick,
    removeActiveClass,
    questions,
    setQuestions,
    shuffleButton,
    reverseQuestion,
    pin,
    changeToRemind,
    reset,
    changeToroad,
  };
};

// シュッフル機能
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
