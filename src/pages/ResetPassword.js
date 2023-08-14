import FormHeader from "../components/FormHeader"
import ResetPasswordForm from "../components/ResetPasswordForm"

export default function ResetPasswordPage(){
    return(
        <>
            <FormHeader
                heading="Reset Password"
                paragraph="Please enter the new password to change it."
                linkName="Login"
                linkUrl="/"
            />  
            <ResetPasswordForm/>
        </>
    )
}