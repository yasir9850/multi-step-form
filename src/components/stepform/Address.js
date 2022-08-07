import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Address = ({ formData, setForm, navigation }) => {

    const { address, city, state, zip } = formData
    return (
        <Container maxWidth='xs'>
            <h3>Address</h3>
            <TextField id="outlined-basic" label="Address " variant="outlined" name='address'
                value={address}
                margin='normal'
                onChange={setForm}
                autoComplete='off'
                fullWidth
            />
            <TextField id="outlined-basic" label="City" variant="outlined" name='city'
                value={city}
                margin='normal'
                onChange={setForm}
                autoComplete='off'
                fullWidth
            />
            <TextField id="outlined-basic" label="State " variant="outlined" name='state'
                value={state}
                margin='normal'
                onChange={setForm}
                autoComplete='off'
                fullWidth
            />
            <TextField id="outlined-basic" label="Zip" variant="outlined" name='zip'
                value={zip}
                type='number'
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

export default Address