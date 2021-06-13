import React, {Fragment} from 'react'
import {Link} from "react-router-dom"

function Botonnav({icon, textBoton, route}) {
    return (
        <Fragment>
            <Link to={`/${route}`} className="boton-menu d-flex align-items-center my-2" style={{height:"40px", width:"160px"}}>
                <div className="w-25">
                    <i className={icon}></i>
                </div>
                <div className="w-75 fs-6 text-start ps-2">
                    {textBoton}
                </div>
            </Link>
        </Fragment>
    )
}

export default Botonnav
