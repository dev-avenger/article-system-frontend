import FormHeader from "../components/FormHeader";
import SignupForm from "../components/SignupForm";

export default function SignupPage(){
    return(
        <>
            <FormHeader
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <SignupForm/>
        </>
    )
}