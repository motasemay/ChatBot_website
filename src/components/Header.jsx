import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({title, subTitle}) => {
  
  return (
    <Box mb={2} mt={1} ml={2}>
    <Typography
      sx={{
        color: "#d90008",
        fontWeight: "bold",
      }}
      variant="h5"
    >
      {title}
    </Typography>
    <Typography variant="body1">{subTitle}</Typography>
  </Box>

  
  );
}

export default Header;
