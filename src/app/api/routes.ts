import { environment } from 'src/environments/environment';

const BASE_URL = environment.api_url;

export const forAdmin = `${BASE_URL}/api/admin`;

export const forLogin = `${BASE_URL}/api/auth/administrator`;

export const quizMany = `${forAdmin}/quiz`;

export const quizOne = (quizId: string) => `${quizMany}/${quizId}`;

export const forStart = (quizId: string) => `${quizOne(quizId)}/start`;

export const forFinish = (quizId: string) => `${quizOne(quizId)}/finish`;

export const reportMany = (quizId: string) => `${quizOne(quizId)}/report`;

export const forUserReport = (quizId: string, userId: string) =>
  `${reportMany(quizId)}/${userId}`;
