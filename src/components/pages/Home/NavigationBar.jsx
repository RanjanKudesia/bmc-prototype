import { Outlet, Link } from 'react-router-dom';
import firebaseAuthService from '../../../firebase/FirebaseAuthService';

function NavigationBar({ existingUser }) {

    function handleLogout() {
        firebaseAuthService.logoutUser();
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-color">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="home">BMC</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-pills ">
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
                                        <Link onClick={handleLogout} className="nav-link nav-login" to="login"><div className='btn btn-warning'>Logout</div></Link>
                                        :
                                        <Link className="nav-link nav-login active " to="login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                existingUser ?
                    <h3 className='alert alert-success'>Welcome, {existingUser.email}</h3>
                    :
                    null
            }
            <Outlet />
        </>
    )
}

export default NavigationBar;