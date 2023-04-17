import { NavLink, Outlet } from "react-router-dom"

const SharedLayout = () => {
    return (
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">movies</NavLink>
            <NavLink to="/movies/:movieId">moviedetails</NavLink>
        </nav>
        <Outlet />
        </>
        
    )
}

export default SharedLayout