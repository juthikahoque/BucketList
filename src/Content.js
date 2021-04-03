import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import StarsIcon from '@material-ui/icons/Stars';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Content = () => {
    const { data: mylist, isPending2, error} = useFetch('http://localhost:8000/activities');

    return ( 
        <div className="cards">
            <div className="myactivities">
                <div className="paintball" 
                // style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/paintball.jpg'})`}}
                >
                    <div className="business">
                        <h1>Joe's Paintball</h1>
                        <div className="links">
                            <Link to="/create" className="add" >
                                <AddCircleOutlineIcon className="contenticon"/>
                            </Link>
                            <Link to="/mylist" className="itinerary">
                                <EventAvailableIcon className="contenticon"/>
                            </Link>
                        </div>
                    </div>
                    <div className="image">
                        <img src={process.env.PUBLIC_URL + '/img/paintball.jpg'} alt="paintball"/>
                    </div>
                </div>
                <div className="zumba" 
                // style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/zumba.jpg'})`}}
                >
                    <div className="business">
                        <h1>Zumba</h1>
                        <div className="links">
                            <Link to="/premium" className="premium">
                                <StarsIcon className="contenticon"/>
                            </Link>
                            <p className="hover">Premium</p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={process.env.PUBLIC_URL + '/img/zumba.jpg'} alt="zumba"/>
                    </div>
                </div>
            </div>
            <div className="extras">
                <div className="featured" 
                // style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/paint.jpg'})`}}
                >
                    <div className="business">
                        <p className="heading">Featured</p>
                        <div className="links">
                            <Link to="/create" className="add">
                                <AddCircleOutlineIcon className="contenticon"/>
                            </Link>
                            <Link to="/mylist" className="itinerary">
                                <EventAvailableIcon className="contenticon"/>
                            </Link>
                        </div>
                    </div>
                    <h1>Wine & Paint Night</h1>
                    <div className="image">
                        <img src={process.env.PUBLIC_URL + '/img/paint.jpg'} alt="paint"/>
                    </div>
                </div>
                <div className="all-activities">
                    <Link to="/allactivities">All Activities</Link>
                    { mylist &&
                        <div className="newlist">
                            { mylist.map((mylist) => 
                                <li key={mylist.title}>{ mylist.title }</li>
                            )}
                        </div>
                    }
                    <p>Click for more ... </p>
                </div>
            </div>
        </div>
     );
}

export default Content;