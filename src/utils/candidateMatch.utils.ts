import {Candidate, CandidatePreferences} from "../models";

export const calculateMatch = (
  { harizma, beauty, age, salary }: Candidate,
  { salaryKoef, harizmaKoef, beautyKoef }: CandidatePreferences
) => {
  const calcWithKoef = (value: number, koef: number) => value * (koef / 10);

  const harizmaAndBeautyMark = (calcWithKoef(harizma, harizmaKoef) + calcWithKoef(beauty, beautyKoef)) / (age / 24);
  const salaryMark = calcWithKoef(salary, salaryKoef) / (age * 10);

  return harizmaAndBeautyMark + salaryMark;
}

export const getLevel = (match: number): "success" | "warning" | "error" | "info" => {
  if (match >= 10) return "success";
  if (match < 10 && match >= 7) return "info";
  if (match < 7 && match >= 5)  return "warning";
  return "error";
}