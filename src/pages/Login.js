import FormHeader from "../components/FormHeader"
import LoginForm from "../components/LoginForm"

export default function LoginPage(){
    return(
        <>
        <div className="my-10">
            <FormHeader
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />  
            <LoginForm/>
        </div>
        </>
    )
}