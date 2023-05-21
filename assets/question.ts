import { pinyin, ch, jp } from "./data";

export const question: any = [];

for (let i = 0; i < pinyin.length; i++) {
  question.push({ jp: pinyin[i], ch: ch[i], pi: jp[i] });
}

console.log(question);
