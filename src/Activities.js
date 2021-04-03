import useFetch from './useFetch';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom';

const Activities = () => {
    const { data: activities, isPending, error} = useFetch('http://localhost:8000/activities');
    return (
        <div className="mylist">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading ... </div>}
            { activities && 
                <div className="activities">
                    <h1>All Activities</h1>
                    { activities.map((activities) => (
                        <div className="preview" key={activities.id}>
                            <div className="activityname">
                                <h2>{ activities.title }</h2>
                                <Link to="/create" className="add" >
                                    <AddCircleOutlineIcon className="contenticon"/>
                                </Link>
                            </div>
                            <div className="location">
                                <h4>Location: </h4>
                                <p>{ activities.location }</p>
                            </div>
                            <div className="date">
                                <h4>Available </h4>
                                <p>{ activities.startdate } </p>
                                <h4> to </h4>
                                <p>{ activities.enddate }</p>
                            </div>
                            <div className="time">
                                <h4>Hours: </h4>
                                <p>{activities.starttime} -</p>
                                <p>{activities.endtime}</p>
                            </div>
                            <div className="price">
                                <h4>Cost: </h4>
                                <p>${activities.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
     );
}
 
export default Activities;
