import useFetch from './useFetch';
import DeleteIcon from '@material-ui/icons/Delete';
import { useParams } from 'react-router-dom';

const List = () => {
    const { id } = useParams();
    const { data: mylist, isPending, error} = useFetch('http://localhost:8001/mylist');
    
    return (
        <div className="mylist">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading ... </div>}
            { mylist && 
                <div className="activities">
                    <h1>My BucketList</h1>
                    { mylist.map((mylist) => (
                        <div className="preview" key={mylist.id}>
                            <div className="activityname">
                                <h2>{ mylist.title }</h2>
                                <button className="contenticon" onClick={() => {
                                    fetch('http://localhost:8001/mylist/' + mylist.id, {
                                        method: 'DELETE'
                                    }).then(() => {
                                        window.location.reload();
                                    })
                                }}>
                                    <DeleteIcon />
                                </button>
                            </div>
                            <div className="location">
                                <h4>Location: </h4>
                                <p> { mylist.location }</p>
                            </div>
                            <div className="date">
                                <h4>Date: </h4>
                                <p>{ new Date(mylist.date).toLocaleDateString() }</p>
                            </div>
                            <div className="price">
                                <h4>Total Price: </h4>
                                <p>${mylist.price}</p>
                            </div>
                            <div className="arrival">
                                <h4>Arrive at: </h4>
                                <p>{mylist.arrival}</p>
                            </div>
                            <div className="end">
                                <h4>Ends at: </h4>
                                <p>{mylist.end}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
     );
}
 
export default List;
