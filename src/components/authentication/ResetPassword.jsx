import { useState } from 'react';
import firebaseAuthService from '../../firebase/FirebaseAuthService';

function ResetPassword({ existingUser }) {

    const [userName, setUserName] = useState("");

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
                                            <h1 className="mb-5">Reset Password</h1>
                                            <form onSubmit={handleSendResetPasswordEmail}>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="typeEmailX-2">
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
                                                        <label>Reset email will be sent to this email</label>
                                                    </label>
                                                </div>
                                                <button className="btn btn-primary btn-lg btn-block" type="submit">Reset Password</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default ResetPassword;