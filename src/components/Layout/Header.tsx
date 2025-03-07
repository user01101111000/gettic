import React from "react";
import { Link } from "react-router";

const Header: () => React.JSX.Element = (): React.JSX.Element => {
    return <header className="w-full p-7">
        <Link to={"/"} className="block w-fit mx-auto">
            <img className="mx-auto w-36 2xl:w-40" src={"/images/logo-full.svg"} alt="logo" />
        </Link>
    </header>
}

export default Header;