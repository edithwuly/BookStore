import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Home from './Home.js';
import Category from './Category.js'

class App extends React.Component{
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/Home" component={Home} />
                <Route path="/Category" component={Category}/>
            </Route>
        </Router>
    ),document.body
);
