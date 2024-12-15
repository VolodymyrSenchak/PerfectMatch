import {CandidatePreferences, getDefaultCandidatePreferences} from "../models";

class CandidatePreferencesStore {
  getSavedPreferences(): CandidatePreferences {
    const data = localStorage.getItem("candidatePreferences");
    return data ? JSON.parse(data) as CandidatePreferences : getDefaultCandidatePreferences();
  }

  saveCandidatePreferences(preferences: CandidatePreferences): void {
    localStorage.setItem("candidatePreferences", JSON.stringify(preferences));
  }
}

export const candidatePreferencesStore = new CandidatePreferencesStore();
