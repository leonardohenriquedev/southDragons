import { Route, Switch } from 'react-router-dom';
import DragonsProvider from './Context/DragonsProvider';
import CreateDragon from './pages/Create';
import Details from './pages/Details';
import Dragons from './pages/Dragons';
import Edit from './pages/Edit';
import Login from './pages/Login';

function App() {
  return (
    <DragonsProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dragons" component={Dragons} />
        <Route exact path="/edit/:id" render={(props) => <Edit {...props} />} />
        <Route
          exact
          path="/details/:id"
          render={(props) => <Details {...props} />}
        />
        <Route exact path="/create" component={CreateDragon} />
      </Switch>
    </DragonsProvider>
  );
}

export default App;
