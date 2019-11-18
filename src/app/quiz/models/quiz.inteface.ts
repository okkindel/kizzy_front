export enum AnswerTypeEnum {
  'text',
  'email',
  'number'
}

export interface IRegistrationField {
  type: AnswerTypeEnum;
  name: string;
  required: boolean;
}

export interface IAnswer {
  id: number;
  value: string;
  is_correct: boolean;
}

export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
}

export interface IQuiz {
  name: string;
  questions: IQuestion[];
  registration_fields: IRegistrationField[];
}
