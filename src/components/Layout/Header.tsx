import React from "react";
import { Link } from "react-router";

const Header: () => React.JSX.Element = (): React.JSX.Element => {
    return <header className="w-full p-3 lg:pt-6">
        <Link to={"/"} className="block w-fit mx-auto">
            <img className="mx-auto w-40 lg:w-48 2xl:w-56" src={"/images/logo-full.svg"} alt="logo" />
        </Link>
    </header>
}

export default Header;