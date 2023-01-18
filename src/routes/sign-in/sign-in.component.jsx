import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        // console.log(response.user);
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return (
      <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      </div>
    );
}

export default SignIn;