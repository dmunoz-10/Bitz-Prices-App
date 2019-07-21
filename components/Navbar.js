import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">BitzPrices</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">
                        <a className="nav-link">About Us</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar