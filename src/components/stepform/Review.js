import React from 'react'
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Review = ({ formData, navigation }) => {
    const { go } = navigation
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email,
    } = formData
    return (
        <Container maxWidth='xs'>
            <h3>Review</h3>
            <RenderAccordion summary='Names' go={go} details={[
                { 'First Name': firstName },
                { 'Last Name': lastName },
                { 'Nick Name': nickName },
            ]} />
            <RenderAccordion summary='Address' go={go} details={[
                { 'Address': address },
                { 'City': city },
                { 'State': state },
                { 'Zip': zip },
            ]} />
            <RenderAccordion summary='Contact' go={go} details={[
                { 'Phone': phone },
                { 'Email': email },

            ]} />

            <Button
                color='primary'
                variant="contained"
                style={{ marginTop: '1rem' }}
                onClick={() => go('submit')}
            >Submit</Button>
        </Container>
    )
}

export default Review

export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >{summary}</AccordionSummary>
        <AccordionDetails>
            <div>
                {details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objVlaue = data[Object.keys(data)[0]]
                    return <ListItemText key={index}>{`${objKey}:${objVlaue}`}</ListItemText>
                })}
                <IconButton
                    color='primary'
                    component='span'
                    onClick={() => go(`${summary.toLowerCase()}`)}
                >
                    <EditIcon />
                </IconButton>
            </div>
        </AccordionDetails>
    </Accordion>
)