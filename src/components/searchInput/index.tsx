import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { SearchInputProps } from "./types";
import { palette } from "../../../theme/palette";
import { theme } from "../../../theme/theme";
import { SearchInputWrapper } from "./styles";

const SearchInput = ({
  placeholder = "Search...",
  onChange,
  value,
  isLoading,
}: SearchInputProps) => {
  const getEndAdornment = () => {
    if (isLoading) {
      return <CircularProgress size={20} />;
    }
    return (
      value && (
        <IconButton size="small" onClick={() => onChange?.("")}>
          <CloseIcon sx={{ color: palette.primary[600] }} />
        </IconButton>
      )
    );
  };

  return (
    <SearchInputWrapper
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      disabled={isLoading}
      InputProps={{
        startAdornment: (
          <SearchOutlinedIcon
            sx={{
              color: palette.primary.main,
              marginRight: theme.spacing(1),
            }}
          />
        ),
        endAdornment: getEndAdornment(),
      }}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
    />
  );
};

export default SearchInput;
