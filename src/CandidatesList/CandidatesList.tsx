import {Candidate, CandidatePreferences} from "../models";
import {Box, IconButton, Typography} from "@mui/material";
import {calculateMatch, getLevel} from "../utils/candidateMatch.utils.ts";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const CandidatesList = (props: {
  candidates: Candidate[];
  preferences: CandidatePreferences;
  onSelect: (selected: Candidate) => void;
  onDelete: (selected: Candidate) => void;
}) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Збережені кандидати</Typography>

      {props.candidates.length < 1 && (
        <Typography variant="subtitle2">Ніц нема поки</Typography>
      )}

      {props.candidates.map(candidate => (
        <Box key={candidate.candidateName} display="flex" alignItems="center" gap={2} borderBottom={1} pb={1} borderColor={s => s.palette.divider}>
          <IconButton onClick={() => props.onSelect(candidate)}>
            <ArrowCircleRightIcon/>
          </IconButton>

          <Box flex={1} display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="subtitle2">{candidate.candidateName}</Typography>
            <Typography variant="caption" color={getLevel(calculateMatch(candidate, props.preferences))}>
              {calculateMatch(candidate, props.preferences).toFixed(4)}
            </Typography>
          </Box>

          <IconButton onClick={() => props.onDelete(candidate)}>
            <DeleteIcon/>
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}