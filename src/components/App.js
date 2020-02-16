import React,{Component} from 'react';
import { Route,Switch} from 'react-router-dom';
import Posts from './Posts';
import Comments from './Comments';
import Albums from './Albums';
import Photos from './Photos';
import Todo from './Todo';
import Header from './Header';
import Home from './Home';

class App extends Component{
  render(){
    return(
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/comments" component={Comments}/>
        <Route path="/albums" component={Albums}/>
        <Route path="/photos" component={Photos} />
        <Route path="/todos" component={Todo } />
      </Switch>
      </div>
    )
  }
}

export default App;
