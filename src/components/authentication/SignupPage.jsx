import { useState } from 'react';
import firebaseAuthService from '../../firebase/FirebaseAuthService';



function SignupPage({ existingUser }) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    //    This is for making new user
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await firebaseAuthService.registerUser(userName, password);
            setUserName("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <>
            {
                ( existingUser && existingUser.email === 'ranjan.kudesia@gmail.com') ? 
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>

                            <label className='form-label'>
                                Username(email):
                                <input
                                    type={'email'}
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    className='form-control'
                                    required
                                />

                            </label>
                        </div>
                        <div className='mb-3'>

                            <label className='form-label'>
                                Password:
                                <input
                                    type={'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className='form-control'
                                    required
                                />

                            </label>
                        </div>
                        <button className='btn btn-primary'>Submit</button>
                    </form>:null
            }
        </>
    )
}

export default SignupPage;