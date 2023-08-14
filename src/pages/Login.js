import Header from "../components/Header"
import LoginForm from "../components/LoginForm"

export default function LoginPage(){
    return(
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />  
            <LoginForm/>
        </>
    )
}