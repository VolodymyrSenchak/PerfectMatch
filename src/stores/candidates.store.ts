import {Candidate} from "../models";

class CandidatesStore {
  getSavedCandidates(): Candidate[] {
    const data = localStorage.getItem("candidates");
    return data ? JSON.parse(data) as Candidate[] : [];
  }

  saveCandidates(candidates: Candidate[]): void {
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }
}

export const candidatesStore = new CandidatesStore();