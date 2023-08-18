import loginFields from "../constants/loginFields";
import Button from "./Button";
import Input from "./Input";
import LoginFormMsc from './LoginFormMsc';
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import axiosConfig from "../services/axiosConfig";
import { authActions } from "../redux/store/auth-slice";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function LoginForm(){
    // const history = useHistory();
    const dispatch = useDispatch();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const codeInputRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState();
    const [showCodeWarning, setShowCodeWarning] = useState(false);
    const [loginCodeValue, setLoginCodeValue] = useState("");
    const [loginState,setLoginState]=useState(fieldsState);


    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const loginSuccessHandler = async (userId, accessToken) => {
        const config = {
          method: "get",
          headers: {
            Authorization: accessToken,
          },
        };
    
        await axiosConfig(`/users/${userId}`, config)
          .then(function (response) {
            dispatch(
              authActions.loginHandler({
                accessToken: accessToken,
                userId: userId,
                accountType: response.data.accountType,
                market: response.data.marketType,
              })
            );
            dispatch(authActions.isLoggedInToggle());
            // history.replace("/");
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     authenticateUser();
    // }

    const submitHandler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        try {
          setIsLoading(true);
          const { data } = await axiosConfig.post(`/authentication/login`, {
            email: enteredEmail,
            password: enteredPassword,
            loginCode: loginCodeValue,
          });
          // Success
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("refresh", data.refreshToken);
          loginSuccessHandler(data.userId, data.accessToken);
        } catch (err) {
          const errorMessage = err.response.data.message;
          if (errorMessage === "IncorrectUsernamePassword") {
            setWarningMessage(
              "There was a problem logging in. Check your email and password."
            );
            setShowWarning(true);
            setIsLoading(false);
          } else if (errorMessage === "UserLockedOut") {
            setWarningMessage(
              "There was a problem logging in. This account has been locked."
            );
            setShowWarning(true);
            setIsLoading(false);
          } else if (errorMessage === "TwoFactorAuthIsNeeded") {
            setShowCodeWarning(true);
            setIsLoading(false);
          } else {
            setWarningMessage("An unknown error occurred. Please try again.");
            setShowWarning(true);
            setIsLoading(false);
          }
        }
      };

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }

    return(
        <form className="mt-8 lg:mx-80 md:mx-60 sm:mx-20 text-white" onSubmit={submitHandler}>
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
        <Button handleSubmit={submitHandler} text={'Login'} customClass={ 'w-2/4 my-4'} loading={isLoading}  disabled={isLoading?true:false} />
        </div>
        </div>
      </form>
    )
}