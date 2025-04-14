function Header(){
    return(
    <div className="header">
        <div className="header_left">
            <p className="title">soller</p>
            <p className="p1">Products</p>
            <p className="p1">Solutions</p>
            <p className="p1">Services</p>
            <p className="p1">Configure</p>
        </div>
        <div className="header_right">
        <i className="ri-headphone-line header_right1 "></i>
         <p className="header_right1">555 818 282</p>
            <button className="btn header_right1">Request a Quote <i className="ri-arrow-right-line header_right1"></i></button>
            <i  className="ri-menu-line headerMenu"></i>
        </div>
    </div>)
}

export default Header