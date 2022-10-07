import { useState } from 'react';
import firebaseAuthService from '../../firebase/FirebaseAuthService';

const LoginPage = ({ existingUser }) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await firebaseAuthService.LoginUser(userName, password);
            setUserName("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    }

    function handleLogout() {
        firebaseAuthService.logoutUser();
    }

    async function handleSendResetPasswordEmail() {
        if (!userName) {
            alert("Missing Username!!!");
            return;
        }
        try {
            await firebaseAuthService.sendPasswordResetEmail(userName);
            alert("Successfully sent the password reset email to your email account")
        } catch (error) {
            alert(error.message);
        }
    }


    //This is Login form
    return (
        <>
            {
                existingUser ? <div className='row'>
                    <h3>Welcome, {existingUser.email}</h3>
                    <button type='button' className='btn-primary' onClick={handleLogout}>Logout</button>
                </div>
                    :
                    <form onSubmit={handleSubmit} >
                        <label className='form-label'>
                            Username(email):
                            <input
                                type={'email'}
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                className='form-control'
                                required
                            >

                            </input>
                        </label>
                        <label className='form-label'>
                            Password:
                            <input
                                type={'password'}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='form-control'
                                required
                            >

                            </input>
                        </label>
                        <button className='btn-primary'>Login</button>
                        <button type="button" onClick={handleSendResetPasswordEmail} className='btn btn-primary'>Reset Password</button>
                    </form>
            }
        </>
    );
}

export default LoginPage;