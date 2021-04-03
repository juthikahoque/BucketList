import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './Calendar';
import useFetch from './useFetch';


const Create = () => {
    const [title, setTitle] = useState('Paintball');
    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState('0 to 49');
    const [location, setLocation] = useState('');
    const [arrival, setArrival] = useState('');
    const [end, setEnd] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const { data: mylist, isPending2, error} = useFetch('http://localhost:8000/activities');

    const handleSubmit = (e) => {
        e.preventDefault();
        let activity = { title, location, date, price, arrival, end };
        mylist.forEach((mylist) => {
            let budget = false;
            if(mylist.title === activity.title) {
                setLocation(mylist.location);
                setArrival(mylist.starttime);
                setEnd(mylist.endtime);
                if(activity.price === '$0 to $49') {
                    if(parseInt(mylist.price) <= 49) {
                        budget = true;
                    }
                } else if(activity.price === '$50 to $99') {
                    if(parseInt(mylist.price) <= 99) {
                        budget = true;
                    }
                } else if(activity.price == '$100 to $500') {
                    if(parseInt(mylist.price <= 500)) {
                        budget = true;
                    }
                } else {
                    budget = true;
                }
                if(budget) {
                    activity = {
                        title,
                        location: mylist.location,
                        date,
                        price: mylist.price,
                        arrival: mylist.starttime,
                        end: mylist.endtime
                    };
                    handleFetch(e, activity);
                } 
            }
        })
    }
    const handleFetch = (e, activity) => {
        setIsPending(true);
        fetch('http://localhost:8001/mylist/', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(activity)
        }).then(() => {
            setIsPending(false);
            history.push('/mylist');
        })
    }
    return (
        <div className="form">
            { mylist &&
            <div className="create">
                <h1>Add a New Activity</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-name">
                        <label>Activity: </label>
                        <select 
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        >
                            { mylist.map((mylist) => 
                                <option value={mylist.title} key={mylist.title}>
                                    { mylist.title }
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="calendar">
                        <label>Date: </label>
                        <Calendar date={date} setDate={setDate}/>
                    </div>
                    <div className="input-price">
                        <label>Price:</label>
                        <select 
                            value={price}
                            onChange= {(e) => setPrice(e.target.value)}>
                                <option value="49">$0 to $49</option>
                                <option value="99">$50 to $99</option>
                                <option value="500">$100 to $500</option>
                                <option value="600">$500 +</option>
                        </select>
                    </div>
                    { !isPending && <button>Add to List</button> }
                    { isPending && <button disabled>Adding Blog...</button>}
                </form>
            </div>
            }
        </div>
    );
}

export default Create;
