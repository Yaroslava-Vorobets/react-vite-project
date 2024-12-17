import { useState } from 'react'


export default function NewContact({onSubmit}) { 
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const hendleChange = e => {
        const { name, value } = e.target;
        // console.log(name)
        // console.log(value)
        switch(name) {
            case 'name':
                setName(value);
                //console.log(setName(value))
                break;
            case 'number':
                setNumber(value);
                //console.log(setNumber(value))
                break;
            default : ' not expected value'
        }
    }

    const onSubmitForm = e => {
        e.preventDefault();
        onSubmit(name, number);
        setName("");
        setNumber("");
    }
       
                    


    return (
        <form onSubmit={onSubmitForm}>
            <label>
                <span> Name </span>
                <input
                    type='text'
                    name='name'
                    onChange={hendleChange}
                    value={name} />          
                
            </label>
            <label>
            <span> Number </span>
            <input
                type='number'
                name='number'
                onChange={hendleChange}
                value={number} />
            <button type = "submit">add contact</button>            
        </label>
        </form>
    )
}