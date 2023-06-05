import { pinyin, ch, jp, en } from "./data";

type questionType = {
  jp?: string;
  ch?: string;
  pi?: string;
  en?: string;
};

export const questions: questionType[] = [];

for (let i = 0; i < pinyin.length; i++) {
  questions.push({ jp: jp[i], ch: ch[i], pi: pinyin[i], en: en[i] });
}
