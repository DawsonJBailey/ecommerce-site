import { useState} from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            // const {user} = await createAuthUserWithEmailAndPassword(email, password);
            // await createUserDocumentFromAuth(user, {displayName});
            dispatch(signUpStart(email, password, displayName))
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }
            else {
                console.log("user creation encountered an error", error);
            }
        }
        }
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        // ...formFields makes sure everything else stays the same
        // and only the input with the matching name is updated with its new value
        setFormFields({...formFields, [name]: value});
    }

    return (
      <div className={'sign-up-container'}>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput label={'Display Name'} type={"text"} required onChange={handleChange} name={'displayName'} value={displayName} />
          <FormInput label={'Email'} type={"email"} required onChange={handleChange} name={'email'} value={email} />
          <FormInput label={'Password'} type={"password"} required onChange={handleChange} name={'password'} value={password} />
          <FormInput label={'Confirm Password'} type={"password"} required onChange={handleChange} name={'confirmPassword'} value={confirmPassword} />
          <Button type={"submit"}>Sign Up</Button>
        </form>
      </div>
    );
}

export default SignUpForm;