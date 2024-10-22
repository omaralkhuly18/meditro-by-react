import React, { Fragment } from "react";
import ContainerNav from "../Nav/Navbar";
import { Outlet } from "react-router-dom";
import ContainerFooter from "../PartFooter/Footer";
const Layouts = () => {
    return(
        <Fragment>
            <ContainerNav/>
            <main>
                <Outlet/>
            </main>
            <ContainerFooter/>
        </Fragment>
    );
}

export default Layouts;