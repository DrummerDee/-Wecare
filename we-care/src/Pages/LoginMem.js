import React from 'react'
import {Grid,Container, Paper} from "@mui/material"

const LoginMem = () => {
  console.log('Login member page');
  return (
    <Container maxWidth="sm">
      <Grid container 
        spacing={2} 
        direction = 'column' 
        justifyContent='center'
        style = {{minHeight:'100vh'}}
        >
  <Paper elevation={3} sx={{padding:5}}>
  <Grid container 
        spacing={2} 
        direction = 'column' 
        >
          <Grid item xs={8}>
  </Grid>
  <Grid item xs={4}>
  </Grid>
  <Grid item xs={4}>
  </Grid>
  <Grid item xs={8}>
  </Grid>
      </Grid>
  </Paper>
</Grid>
    </Container>
  )
}
export default LoginMem;