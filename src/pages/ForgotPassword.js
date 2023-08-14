import FormHeader from "../components/FormHeader"
import ForgotPasswordForm from "../components/ForgotPasswordForm"

export default function ForgotPasswordPage(){
    return(
        <>
            <FormHeader
                heading="Forgot Password"
                paragraph="Please enter your email, to reset your password?"
                linkName="Login"
                linkUrl="/"
            />  
            <ForgotPasswordForm/>
        </>
    )
}