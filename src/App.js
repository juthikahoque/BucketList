import Navbar from './Navbar';
import Banner from './Banner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './Content';
import Create from './Create';
import List from './MyList';
import Activities from './Activities';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Banner />
          <Content />
        </Route>
        <Route path="/create">
          <Navbar />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Create />
          </MuiPickersUtilsProvider>
        </Route>
        <Route path="/mylist">
          <Navbar />
          <List />
        </Route>
        <Route path="/allactivities">
          <Navbar />
          <Activities />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
