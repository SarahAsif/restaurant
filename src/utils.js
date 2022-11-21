import { useMediaQuery } from "@mui/material";

import { useTheme } from "@mui/material/styles";

export const IsMobileWidth = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.between("xs", "sm"));
};

export const IsDesktopWidth = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.between("lg", "xl"));
};

export const IsTabletWidth = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.between("sm", "md"));
};

export const IsDesktopSmallWidth = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.between("md", "lg"));
};
