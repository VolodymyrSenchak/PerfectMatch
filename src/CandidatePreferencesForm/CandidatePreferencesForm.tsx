import {Box, Slider, Typography} from "@mui/material";
import {CandidatePreferences} from "../models";
import {FC} from "react";

export interface CandidatePreferencesProps {
  candidatePreferences: CandidatePreferences;
  onCandidatePreferencesChange: (candidatePreferences: CandidatePreferences) => void;
}

const PreferenceSlider = (e: {
  label: string;
  value: number;
  field: keyof CandidatePreferences,
  onChange: (change: Partial<CandidatePreferences>) => void;
}) => {
  return (
    <Box>
      <Typography variant="caption">{e.label}</Typography>
      <Slider valueLabelDisplay="auto"
              value={e.value}
              shiftStep={1}
              step={1}
              marks
              min={1}
              max={10}
              onChange={(_, v) => e.onChange({[e.field]: v as number})}
      />
    </Box>
  );
};

export const CandidatePreferencesForm: FC<CandidatePreferencesProps> = (props) => {
  const handleChange = (change: Partial<CandidatePreferences>) => {
    props.onCandidatePreferencesChange({ ...props.candidatePreferences, ...change });
  };

  return (
    <Box display="flex" gap={2} flexDirection="column">
      <Typography variant="h5">Твої преференції?</Typography>

      <PreferenceSlider label="Бис багатий був" value={props.candidatePreferences.salaryKoef} field="salaryKoef" onChange={handleChange} />
      <PreferenceSlider label="Бис харізму мав" value={props.candidatePreferences.harizmaKoef} field="harizmaKoef" onChange={handleChange}/>
      <PreferenceSlider label="Бис красівий був" value={props.candidatePreferences.beautyKoef} field="beautyKoef" onChange={handleChange}/>
    </Box>
  );
}