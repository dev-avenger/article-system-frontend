import { useState } from 'react';
import resetPasswordFields from "../constants/resetPasswordFields";
import Button from "./Button";
import Input from "./Input";

const fields=resetPasswordFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function ResetPasswordForm(){
    const [resetPasswordState,setResetPasswordState]=useState(fieldsState);

    const handleChange=(e)=>{
        setResetPasswordState({...resetPasswordState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        resetPassword();
    }

    //Handle Login API Integration here
    const resetPassword = () =>{

    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={resetPasswordState[field.id]}
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
        <Button handleSubmit={handleSubmit} text="Reset Password"/>

      </form>
    )
}