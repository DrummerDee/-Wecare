import React from 'react'
import {Grid,Container, Paper, TextField, Button} from "@mui/material"

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
  <Paper elevation={3} sx={{padding:5}} style ={{backgroundColor:'green'}}>
  <Grid container 
        spacing={2} 
        direction = 'column' 
        >
          <Grid item xs={8} spacing ={6}>
            <TextField fullWidth id='standard-basic' label='email' variant='standard'/>
  </Grid>
  <Grid item xs={4}>
<TextField id = 'standard-basic' label = 'password' variant = 'standard'/>
  </Grid>
  <Grid item xs={4}>
    <Button 
      onClick = {() => alert('I have been clicked')} 
      variant='contained' 
      justifyContent='center'> Login </Button>
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