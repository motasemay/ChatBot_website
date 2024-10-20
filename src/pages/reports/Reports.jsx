import Header from '../../components/Header'
import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button, Card, CardActions, CardContent, colors, Typography } from '@mui/material';
function Reports() {
  return (
    <>
      <Header title="REPORTS" subTitle="Reports you saved from Chatbot." />
      <Box sx={{ flexGrow: 1, p: 5 }}>
        <Grid
          container spacing={5}
          sx={{ alignItem: "center", justifyContent: "center" }}

        >
          {[...Array(16)].map((_, index) => (
            <Grid container item spacing={5}
              key={index}
              minHeight={160}



            >
              <Card
                sx={{
                  minWidth: 380,
                  maxWidth: 380,
                  maxHeight:200,
                  background: '#2C2C2E',
                  borderRadius: 4,
                  // backdropFilter: 'blur(5px)',
                  color: "#fff",
                }}
                elevation={2}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    This is      Title 
                  </Typography>
                  <Typography sx={{ color: 'gray', mb: 1 }}>adjective</Typography>
                  <Typography variant="body2" sx={{ color: 'gray', maxHeight:"60px",overflow:"hidden"}} >
                    well meaning and kindly.  well meaning and kindly.  well meaning and kindly.
                    well meaning and kindly.  well meaning and kindly.  well meaning and kindly.
                    well meaning and kindly.  well meaning and kindly.  well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                  <Button size="small" variant="contained" sx={{ color: 'white', background: "#85262a" }} > View</Button>
                  <Button size="small" variant="text" sx={{ color: "#fff" }} > Delete</Button>
                </CardActions>
              </Card>



            </Grid>
          ))}
        </Grid>
      </Box>

    </>
  )
}

export default Reports