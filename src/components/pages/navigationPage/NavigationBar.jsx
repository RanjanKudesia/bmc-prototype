import { Outlet, Link } from 'react-router-dom';
import firebaseAuthService from '../../../firebase/FirebaseAuthService';
import BMCLogo from '../../assets/bmc_logo_old1.png';
import LatentLogo from '../../assets/logo.png';
import { useLocation } from 'react-router-dom'
import AnalysisPage from './../Home/Analysis/Analysis';

function NavigationBar({ existingUser }) {

    function handleLogout() {
        firebaseAuthService.logoutUser();
    }


    function HeaderView() {
        const location = (useLocation().pathname);
        const Location = location.slice(1);
        return (Location);
    };
    const location = HeaderView();

    return (
        <>
            <section className='navbar-background'>
                <nav className="container navbar navbar-expand-lg navbar-color">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='home'>
                            <img className='nav-logo' src={BMCLogo} alt="BMC-logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="  collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-contents">
                                <li className="nav-item">
                                    {
                                        (location === 'home') ?
                                            <Link className="nav-link Active" to={'home'}>Home</Link>
                                            :
                                            <Link className="nav-link" to={'home'}>Home</Link>
                                    }
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="dashBoard">Dashboard</Link>
                                </li> */}
                                <li className="nav-item">
                                    {
                                        (location === 'analysisPage') ?
                                            <Link className="nav-link Active" to="analysisPage">Analysis</Link>
                                            :
                                            <Link className="nav-link" to="analysisPage">Analysis</Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    {(location === 'commercial') ?
                                        <Link className="nav-link Active" to="commercial">Commercial</Link>
                                        :
                                        <Link className="nav-link" to="commercial">Commercial</Link>
                                    }
                                </li>
                                {
                                    (existingUser && existingUser.email === 'ranjan.kudesia@gmail.com') ?
                                        <li className="nav-item">
                                            {(location === 'signup') ?
                                                <Link className="nav-link Active" to="signup">Add Users</Link>
                                                :
                                                <Link className="nav-link" to="signup">Add Users</Link>
                                            }
                                        </li> : null
                                }
                                <li className="nav-item">
                                    {(location === 'contact') ?
                                        <Link className="nav-link Active" to="contact">Contact</Link>
                                        : <Link className="nav-link" to="contact">Contact</Link>
                                    }
                                </li>

                                {/*<li className="nav-item">
                                    {(location === 'about') ?
                                        <Link className="nav-link" to="about">About</Link>
                                        :
                                        <Link className="nav-link" to="about">About</Link>
                                    }
                                </li>*/}

                            </ul>
                            <form class="d-flex">
                                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                    <li className='nav-item my-1'>
                                        {
                                            existingUser ?
                                                <Link className="btn" to="resetPassword"><div className=' resetPassword'>Reset Password</div></Link>
                                                :
                                                <Link className="btn " to="resetPassword"><div className='forgotPassword'>Forgot Password</div></Link>
                                        }
                                    </li>
                                    <li className='nav-item my-1'>
                                        {
                                            existingUser ?
                                                <Link onClick={handleLogout} className="btn " to="login">
                                                    <div className='logout'>
                                                        Logout
                                                    </div>
                                                </Link>
                                                :
                                                <Link className="btn" to="login">
                                                    <div className='login'>
                                                        Login
                                                    </div>
                                                </Link>
                                        }
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <img className='nav-logo' src={LatentLogo} alt="BMC-logo" />
                    </div>
                </nav>
            </section>
            <Outlet />
            <footer className='d-flex justify-content-center container mb-0 copyright'>
                <h5 className='d-flex mt-3 flex-wrap'>
                    Made and created by Latent Renewable Energies Pvt Ltd for Municipal Corporation Bhopal
                </h5>
            </footer>
        </>
    )
}

export default NavigationBar;