import { pinyin0, ch0, jp0, en0 } from "./data/remind";
import { pinyin_road, ch_road, jp_road, en_road } from "./data/road";
import { pinyin, ch, jp, en } from "./data/data";
import { pinyin2, ch2, jp2, en2 } from "./data/data2";

type questionType = {
  jp?: string;
  ch?: string;
  pi?: string;
  en?: string;
};

export const remindQuestion: questionType[] = [];
export const roadQuestions: questionType[] = [];
export const questions: questionType[] = [];
export const questions2: questionType[] = [];

for (let i = 0; i < pinyin0.length; i++) {
  remindQuestion.push({ jp: jp0[i], ch: ch0[i], pi: pinyin0[i], en: en0[i] });
}

for (let i = 0; i < pinyin_road.length; i++) {
  roadQuestions.push({
    jp: jp_road[i],
    ch: ch_road[i],
    pi: pinyin_road[i],
    en: en_road[i],
  });
}

for (let i = 0; i < pinyin.length; i++) {
  questions.push({ jp: jp[i], ch: ch[i], pi: pinyin[i], en: en[i] });
}

for (let i = 0; i < pinyin2.length; i++) {
  questions2.push({ jp: jp2[i], ch: ch2[i], pi: pinyin2[i], en: en2[i] });
}
