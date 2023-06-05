import styled from "@/styles/Home.module.scss";
import { useQuestion } from "../hooks/useQuestion";
import { Button } from "@/components/Button";

export default function Home() {
  // 各種機能をカスタムフックから取得
  const {
    handleOnClick,
    removeActiveClass,
    questions,
    shuffleButton,
    reverseQuestion,
    pin,
    reset,
  } = useQuestion();

  return (
    <>
      <header className={styled.header}>
        <Button text="I" name={"reset"} onClick={reset} />
        <Button text="R" name={"reverse"} onClick={reverseQuestion} />
        <Button text="P" name={"pin"} onClick={pin} />
        <Button text="S" name={"shuffle"} onClick={shuffleButton} />
      </header>
      <div className={styled.inner}>
        {questions.map((question) => (
          <div key={question.pi} className={styled.question}>
            <p onClick={(e) => handleOnClick(e)}>{question.pi}</p>
            <div
              className={styled.hidden}
              onClick={(e) => removeActiveClass(e)}
            >
              <p>
                {question.ch && "CH:"} {question.ch}
              </p>
              <p>
                {question.jp && "JP:"} {question.jp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
