import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

const SharedLayout = () => {
    return (
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">movies</NavLink>
            </nav>
            
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>
        
    )
}

export default SharedLayout