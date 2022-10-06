import { Outlet, Link } from 'react-router-dom';



function NavigationBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">

                    <Link class="navbar-brand" href="home">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'home'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="dashBoard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="contact">Contact</Link>
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