import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Names = ({ formData, setForm, navigation }) => {

  const { firstName, lastName, nickName } = formData;

  return (
    <Container maxWidth='xs'>
      <h3>Names</h3>
      <TextField id="outlined-basic" label="First Name" variant="outlined" name='firstName'
        value={firstName}
        margin='normal'
        onChange={setForm}
        autoComplete='off'
        fullWidth
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" name='lastName'
        value={lastName}
        margin='normal'
        onChange={setForm}

        autoComplete='off'
        fullWidth
      />
      <TextField id="outlined-basic" label="Nick Name" variant="outlined" name='nickName'
        value={nickName}
        margin='normal'
        onChange={setForm}
        autoComplete='off'
        fullWidth
      />
      <Button variant="contained"
        fullWidth color='primary'
        style={{ marginTop: '1rem' }}
        onClick={() => navigation.next()}
      >Next</Button>


    </Container>
  )
}

export default Names