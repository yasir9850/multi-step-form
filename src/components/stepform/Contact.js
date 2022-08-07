import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Contact = ({ formData, setForm, navigation }) => {
    const { phone, email } = formData
    return (
        <Container maxWidth='xs'>
            <h3>Contact</h3>
            <TextField id="outlined-basic" label="Phone" variant="outlined" name='phone'
                value={phone}
                margin='normal'
                onChange={setForm}
                autoComplete='off'
                fullWidth
            />
            <TextField id="outlined-basic" label="E-Mail" variant="outlined" name='email'
                value={email}
                margin='normal'
                onChange={setForm}
                autoComplete='off'
                fullWidth
            />
            <div style={{ marginTop: '1rem' }}>
                <Button color='secondary' variant="contained"
                    style={{ marginRight: '1rem' }}
                    onClick={() => navigation.previous()}
                >Back</Button>

                <Button color='primary' variant="contained"
                    onClick={() => navigation.next()}
                >Next</Button>
            </div>
        </Container>
    )
}

export default Contact