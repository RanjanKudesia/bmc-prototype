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

    //This is Login form
    return (
        <>
            {
                existingUser ? null
                    :
                    <section className="container vh-100" id='login-section'>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card shadow-2-strong" id='login-card'>
                                        <div className="card-body p-5 text-center">
                                            <h1 className="mb-5">Login</h1>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="typeEmailX-2">
                                                        <h5>
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
                                                        <h5>
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
                                                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
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