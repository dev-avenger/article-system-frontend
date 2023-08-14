import { useState } from 'react';
import forgotPasswordFields from "../constants/forgotPasswordFields";
import Button from "./Button";
import Input from "./Input";

const fields=forgotPasswordFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function ForgotPasswordForm(){
    const [forgotPasswordState,setForgotPasswordState]=useState(fieldsState);

    const handleChange=(e)=>{
        setForgotPasswordState({...forgotPasswordState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendPasswordLink();
    }

    //Handle Login API Integration here
    const sendPasswordLink = () =>{

    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={forgotPasswordState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>
        <Button handleSubmit={handleSubmit} text="Send Password Reset Link"/>

      </form>
    )
}