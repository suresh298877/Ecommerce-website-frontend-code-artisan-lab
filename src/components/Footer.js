function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center my-5 border-top container">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    MBU Cart
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-3" >
                <li className="ms-3">
                    <a className="text-body-secondary" href="#"><i className="fa-brands fa-facebook fa-2x"></i></a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#"><i className="fa-brands fa-instagram fa-2x"></i></a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#"><i className="fa-brands fa-twitter fa-2x"></i></a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;