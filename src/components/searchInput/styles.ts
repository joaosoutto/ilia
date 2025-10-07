import { styled, TextField } from "@mui/material";
import { palette } from "../../../theme/palette";
import { theme } from "../../../theme/theme";

export const SearchInputWrapper = styled(TextField)(() => ({
  backgroundColor: palette.white,
  borderRadius: theme.spacing(1),
  "& .MuiOutlinedInput-root": {
    backgroundColor: palette.white,
    color: palette.black,
    "& fieldset": {
      borderColor: palette.primary.main,
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: palette.primary.main,
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: palette.primary.main,
      borderWidth: 2,
    },
  },
  "& .MuiInputBase-input": {
    color: palette.black,
    "&::placeholder": {
      color: palette.branded.gray,
      opacity: 1,
    },
  },
}));
