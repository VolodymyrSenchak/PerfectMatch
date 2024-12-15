import './styles.ts';
import {
  Typography,
  ThemeProvider,
  Box, Card, CardContent
} from "@mui/material";
import {theme} from "./muiTheme.ts";
import {useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {CandidateForm} from "./CandidateForm";
import {CandidatePreferencesForm} from "./CandidatePreferencesForm";
import {Candidate, CandidatePreferences, getDefaultCandidate} from "./models";
import {CandidatesList} from "./CandidatesList";
import {candidatesStore} from "./stores/candidates.store.ts";
import {candidatePreferencesStore} from "./stores/candidatePreferences.store.ts";

function App() {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(candidatesStore.getSavedCandidates());
  const [candidate, setCandidate] = useState<Candidate>(getDefaultCandidate());
  const [candidatePreferences, setCandidatePreferences] = useState<CandidatePreferences>(candidatePreferencesStore.getSavedPreferences());

  const applyCandidates = (newCandidates: Candidate[]) => {
    candidatesStore.saveCandidates(newCandidates);
    setSavedCandidates(newCandidates);
  };

  const applyCandidatePreferences = (preferences: CandidatePreferences) => {
    candidatePreferencesStore.saveCandidatePreferences(preferences);
    setCandidatePreferences(preferences);
  };

  const handleSavedCandidate = (candidate: Candidate) => applyCandidates([
    ...savedCandidates.filter(c => c.candidateName !== candidate.candidateName),
    candidate
  ]);

  const onDeleteCandidate = (candidate: Candidate) => applyCandidates([
    ...savedCandidates.filter(c => c.candidateName !== candidate.candidateName)
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <FavoriteIcon color="primary"/>
        <Typography variant="h5" color="#f06292">
          My Perfect Match
        </Typography>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        <Card variant="outlined" style={{width: 350}}>
          <CardContent>
            <CandidatePreferencesForm candidatePreferences={candidatePreferences}
                                      onCandidatePreferencesChange={applyCandidatePreferences}/>
          </CardContent>
        </Card>

        <Card variant="outlined" style={{width: 350}}>
          <CardContent>
            <CandidateForm candidate={candidate}
                           preferences={candidatePreferences}
                           onCandidateChange={setCandidate}
                           onSaveCandidate={handleSavedCandidate}/>
          </CardContent>
        </Card>

        <Card variant="outlined" style={{width: 350}}>
          <CardContent>
            <CandidatesList candidates={savedCandidates}
                            preferences={candidatePreferences}
                            onSelect={c => setCandidate(c)}
                            onDelete={onDeleteCandidate}/>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  )
}

export default App
