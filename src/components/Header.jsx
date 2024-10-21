import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({title, subTitle}) => {
  
  return (
    <Box mb={2} mt={1} ml={2} sx={{}}>
    <Typography
      sx={{
        color: "#c51d23",
        fontWeight: "bold",
        letterSpacing:"3px",
        

      }}
      variant="h4" component="h1"
    >
      {title}
    </Typography>
    <Typography variant="body2" component="p">{subTitle}</Typography>
  </Box>

  //21/10
  );
}

export default Header;
