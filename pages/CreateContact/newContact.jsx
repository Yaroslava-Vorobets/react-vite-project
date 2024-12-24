import { useState} from 'react';

import { Form, Input, Label, Button } from './newContact.styled';

export default function NewContact({ addContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    const onSubmitForm = e => {
        e.preventDefault();
        addContact(name, number);
        setName('');
        setNumber('');
    };

    return (
        <Form onSubmit={onSubmitForm}>
            <Label htmlFor="name">Name</Label>
            <Input
                type='text'
                name='name'
                onChange={handleChange}
                value={name}
            />
            <Label htmlFor="number">Number</Label>
            <Input
                type='text'
                name='number'
                onChange={handleChange}
                value={number}
            />
            <Button type="submit">Add contact</Button>
        </Form>
    );
}