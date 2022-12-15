import { Outlet, Link } from 'react-router-dom';
import firebaseAuthService from '../../../firebase/FirebaseAuthService';
import BMCLogo from '../../assets/bmc_logo_old1.png';
import LatentLogo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom'


function NavigationBar({ existingUser }) {

    const navigate = useNavigate();

    // const admin = process.env.ADMIN_EMAIL;
    // console.log(admin)

    function handleLogout() {
        firebaseAuthService.logoutUser();
        navigate('/');

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
                        <Link className="navbar-brand" to=''>
                            <img className='nav-logo' src={BMCLogo} alt="BMC-logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="  collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-contents">
                                <li className="nav-item">
                                    {
                                        (location === '') ?
                                            <Link className="nav-link Active" to={'/'}>Home</Link>
                                            :
                                            <Link className="nav-link" to={'/'}>Home</Link>
                                    }
                                </li>

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

                                <li className="nav-item">
                                    {(location === 'monthlyDetails') ?
                                        <Link className="nav-link Active" to="monthlyDetails">Data</Link>
                                        :
                                        <Link className="nav-link" to="monthlyDetails">Data</Link>
                                    }
                                </li>

                                {
                                    (existingUser && existingUser.email === 'bmcelectric22@gmail.com') ?
                                        <li className="nav-item">
                                            {(location === 'signup') ?
                                                <Link className="nav-link Active" to="signup">Add Users</Link>
                                                :
                                                <Link className="nav-link" to="signup">Add Users</Link>
                                            }
                                        </li> : null
                                }






                            </ul>
                            <form className="d-flex">
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
                    Made by Latent Renewable Energies Pvt Ltd for Municipal Corporation Bhopal
                </h5>
            </footer>
        </>
    )
}

export default NavigationBar;