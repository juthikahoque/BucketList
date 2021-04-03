
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Fragment } from 'react';

const Calendar = ({ date, setDate }) => {
    return ( 
        <Fragment>
            <KeyboardDatePicker
                clearable
                value={date}
                placeholder="MM/DD/YYYY"
                onChange={date => setDate(date)}
                minDate={new Date()}
                format="MM/dd/yyyy"
            />
        </Fragment>
     );
}
 
export default Calendar;