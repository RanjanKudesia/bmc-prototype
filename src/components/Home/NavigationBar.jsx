import { Outlet, Link } from 'react-router-dom';



function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="home">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link className="nav-link active" to={'home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link" to="dashBoard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavigationBar;