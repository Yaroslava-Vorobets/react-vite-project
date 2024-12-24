 import { useState } from 'react'


export default function SingupForm({onSubmit}) { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const hendleChange = e => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default : ' not expected value'
        }
    }

    const onSubmitForm = e => {
        e.preventDefault();
        onSubmit(email, password);
        setEmail("");
        setPassword("");
    }
       
                    


    return (
        <form onSubmit={onSubmitForm}>
            <label>
                <span> Post </span>
                <input
                    type='email'
                    name='email'
                    onChange={hendleChange}
                    value={email} />          
                
            </label>
            <label>
            <span> Password </span>
            <input
                type='password'
                name='password'
                onChange={hendleChange}
                value={password} />
            <button type = "submit"> submit </button>            
        </label>
        </form>
    )
}