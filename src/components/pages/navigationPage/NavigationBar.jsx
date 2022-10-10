import { Outlet, Link } from 'react-router-dom';
import firebaseAuthService from '../../../firebase/FirebaseAuthService';
import image from '../../assets/bmc_logo_old1.png';

function NavigationBar({ existingUser }) {

    function handleLogout() {
        firebaseAuthService.logoutUser();
    }


    return (
        <>
            <section className='navbar-background'>
                <nav className=" container navbar navbar-expand-lg navbar-color">
                    <div className="container">
                        <Link className="navbar-brand" to={'home'}>
                            <img className='nav-logo' src={image} alt="BMC-logo" />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav nav-pills nav-contents">
                                <li className="nav-item">
                                    <Link className="nav-link " to={'home'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="dashBoard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact">Contact</Link>
                                </li>
                                {
                                    (existingUser && existingUser.email === 'ranjan.kudesia@gmail.com') ?
                                        <li class="nav-item">
                                            <Link className="nav-link" to="signup">Add people</Link>
                                        </li> : null
                                }
                                <li class="nav-item l-3">
                                    {
                                        existingUser ?
                                            <Link onClick={handleLogout} className="nav-login btn btn-warning" to="login"><div>Logout</div></Link>
                                            :
                                            <Link className="nav-link nav-login active" to="login">Login</Link>
                                    }
                                </li>
                                <li class="nav-item l-3">
                                    {
                                        existingUser ?
                                            <Link onClick={handleLogout} className="nav-link active nav-reset-password" to="resetPassword"><div>Reset Password</div></Link>
                                            :
                                            <Link className="btn btn-warning nav-reset-password" to="resetPassword">Forgot Password</Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {
                    existingUser ?
                        <div className='container alert alert-success '>
                            <h3 className='welcome-header'>Welcome, {existingUser.email}</h3>
                        </div>
                        :
                        null
                }
            </section>
            <Outlet />
            <div className='container alert alert-secondary mb-0'>
                <h3 className='welcome-header'> &copy; Copyright {new Date().getUTCFullYear()} Bhopal Municipal Corporation</h3>
            </div>
        </>
    )
}

export default NavigationBar;