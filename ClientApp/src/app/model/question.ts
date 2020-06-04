export interface Question {
  Title: string;

  // 1-单选选择题
  // 2-不定向选择
  // 3-填空题
  // 4-简答题
  Type: number;
  QuestionContent: string;
  Answer: String[];
  Analysis: String;
}
