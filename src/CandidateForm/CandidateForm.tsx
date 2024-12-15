import {FC} from "react";
import {Alert, Box, Button, Divider, InputAdornment, TextField, Typography} from "@mui/material";
import {SelectBox} from "../components/SelectBox";
import {calculateMatch, getLevel} from "../utils/candidateMatch.utils.ts";
import { Candidate, CandidatePreferences } from "../models";

interface CandidateFormProps {
  candidate: Candidate;
  preferences: CandidatePreferences;
  onCandidateChange: (candidate: Candidate) => void;
  onSaveCandidate: (candidate: Candidate) => void;
}

export const CandidateForm: FC<CandidateFormProps> = ({candidate, preferences, onCandidateChange, onSaveCandidate}) => {
  const allowedAges = Array.from({length: 60 - 18 + 1}, (_, i) => i + 18);
  const ratingVals = Array.from({length: 10}, (_, i) => i + 1);

  const handleCandidateChange = (change: Partial<Candidate>) => {
    onCandidateChange({...candidate, ...change});
  }

  return (
    <Box display="flex" gap={2} flexDirection="column">
      <Typography variant="h5">Шо по кандидату?</Typography>

      <SelectBox label="Вік?" values={allowedAges} value={candidate.age}
                 onValueChanged={age => handleCandidateChange({age})}/>

      <SelectBox label="Оціни харізму" values={ratingVals} value={candidate.harizma}
                 onValueChanged={harizma => handleCandidateChange({harizma})}/>

      <SelectBox label="Красівий?" values={ratingVals} value={candidate.beauty}
                 onValueChanged={beauty => handleCandidateChange({beauty})}/>

      <TextField label="Зепешка" value={candidate.salary}
                 onChange={e => handleCandidateChange({salary: isNaN(Number(e.target.value)) ? candidate.salary : Number(e.target.value)})}
                 slotProps={{input: {startAdornment: <InputAdornment position="start">$</InputAdornment>}}}/>

      <Alert variant="outlined" severity={getLevel(calculateMatch(candidate, preferences))}>
        <Typography variant="subtitle2">Оцінка: {calculateMatch(candidate, preferences).toFixed(4)}</Typography>
      </Alert>

      <Box display="flex" gap={2} flexDirection="column" marginTop={1}>
        <Divider/>

        <TextField label="Як зветься?"
                   value={candidate.candidateName ?? ''}
                   onChange={e => handleCandidateChange({candidateName: e.target.value})}/>

        <Button disabled={!candidate.candidateName} variant="contained" onClick={() => onSaveCandidate(candidate)}>
          Сохранити красавчіка
        </Button>
      </Box>
    </Box>
  );
}