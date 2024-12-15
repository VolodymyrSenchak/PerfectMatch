export interface Candidate {
  age: number;
  harizma: number;
  beauty: number;
  salary: number;
  candidateName?: string;
}

export interface CandidatePreferences {
  salaryKoef: number;
  harizmaKoef: number;
  beautyKoef: number;
}

export const getDefaultCandidate = (): Candidate => ({
  salary: 100,
  age: 18,
  beauty: 5,
  harizma: 5
});

export const getDefaultCandidatePreferences = (): CandidatePreferences => ({
  salaryKoef: 5,
  harizmaKoef: 5,
  beautyKoef: 5,
});
