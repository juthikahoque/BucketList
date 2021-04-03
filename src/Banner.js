import { Link } from 'react-router-dom';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/Search';

const Banner = () => {
    return ( 
        <div className="banner">
            <div className="title">
                <h1 className="name">bucketlist</h1>
            </div>
            <div className="row">
                <div className="right">
                    <div className="search">
                        <input type="search" className="searchText" placeholder="Search ..."/>
                        <button className="searchButton">
                            <SearchIcon />
                            {/* <AddAlarmRoundedIcon className="homeicon"/> */}
                        </button>
                    </div>
                    <button className="profile">
                        <PersonRoundedIcon className="homeicon" />
                    </button>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                        <MenuRoundedIcon className="homeicon" />
                    </button>
                    <div className="dropdown-content">
                        <Link to='/'>Home</Link>
                        <Link to='/mylist'>My Bucket List</Link>
                        <Link to='/agenda'>Agenda</Link>
                        <Link to='/planner'>Planner</Link>
                        <Link to='/section'>Premium</Link>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/mylist'>My Bucket List</Link>
                    <Link to='/create'>Itinerary Creator</Link>
                    <Link to='/allactivities'>All Activities</Link>
                    <Link to='/section'>Premium</Link>
                </div>
            </nav>
        </div>
     );
}

export default Banner;