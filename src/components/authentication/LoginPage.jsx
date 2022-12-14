import { useState } from 'react';
import firebaseAuthService from '../../firebase/FirebaseAuthService';
import { useNavigate } from 'react-router-dom';
import Home from './../pages/Home/home/Home';

const LoginPage = ({ data, existingUser }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await firebaseAuthService.LoginUser(userName, password);
            setUserName("");
            setPassword("");
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    //This is Login form
    return (
        <>
            {
                existingUser ? <Home data={data} existingUser={existingUser} />
                    :
                    <section className="container" id='login-section'>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card shadow-2-strong" id='login-card'>
                                        <div className="card-body p-5 text-center">
                                            <h1 className="mb-5" style={{ color: '#fd5f00' }}>Login</h1>
                                            <form onSubmit={handleSubmit} >
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="typeEmailX-2">
                                                        <h5 className='contact-text'>
                                                            Username(email):
                                                        </h5>
                                                        <input type="email"
                                                            value={userName}
                                                            onChange={e => setUserName(e.target.value)}
                                                            id="typeEmailX-2"
                                                            className="form-control form-control-lg"
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="typePasswordX-2">
                                                        <h5 className='contact-text'>
                                                            Password
                                                        </h5>
                                                        <input
                                                            type="password"
                                                            id="typePasswordX-2"
                                                            className="form-control form-control-lg"
                                                            value={password}
                                                            onChange={e => setPassword(e.target.value)}
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                                <button id='contact-form-button' className="btn btn-lg btn-block" type="submit">Login</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    );
}

export default LoginPage;