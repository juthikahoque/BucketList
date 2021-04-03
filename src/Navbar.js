import { Link } from "react-router-dom"

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>bucketlist</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/mylist'>My BucketList</Link>
                <Link to='/create'>Itinerary Creator</Link>
                <Link to='/allactivities'>All Activities</Link>
                <Link to='/section'>Premium</Link>
            </div>
        </nav>
    );
}

export default Navbar;