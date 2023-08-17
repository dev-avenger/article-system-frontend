import { useState } from 'react';
import loginFields from "../constants/loginFields";
import Button from "./Button";
import Input from "./Input";
import LoginFormMsc from './LoginFormMsc';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function LoginForm(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }

    return(
        <form className="mt-8 lg:mx-80 md:mx-60 sm:mx-20 text-white" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-between">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            groupClass={'w-full flex flex-col'}
                    />
                
                )
            }
        <div className='flex flex-col items-center justify-center w-full'>
        <LoginFormMsc/>
        <Button handleSubmit={handleSubmit} text="Login" customClass={ 'w-2/4 my-4'}/>
        </div>
        </div>
      </form>
    )
}