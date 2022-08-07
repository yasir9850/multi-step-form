import React from 'react'
import { useStep, useForm } from 'react-hooks-helper'
import Address from './stepform/Address';
import Contact from './stepform/Contact';
import Names from './stepform/Names';
import Review from './stepform/Review';
import Submit from './stepform/Submit';

const defaultData = {
    firstName: '',
    lastName: '',
    nickName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
};

const steps = [

    { id: 'names' },
    { id: 'address' },
    { id: 'contact' },
    { id: 'review' },
    { id: 'submit' },

]

const MultiStepForm = () => {

    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })

    const props = { formData, setForm, navigation }

    switch (step.id) {
        case 'names':
            return <Names {...props} />;
        case 'address':
            return <Address  {...props} />;
        case 'contact':
            return <Contact  {...props} />;
        case 'review':
            return <Review  {...props} />;
        case 'submit':
            return <Submit  {...props} />;

    }

    return (
        <div>
            MultiStepForm
        </div>
    )
}

export default MultiStepForm