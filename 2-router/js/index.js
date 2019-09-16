import React from 'react';
import ReactDOM from 'react-dom';
import UserLayout from './xianshi';
//import BasicRoute from './router';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
             <UserLayout/>
            </div>
        );
    }
}
const ICE_CONTAINER = document.getElementById('root');

ReactDOM.render(<App/>, ICE_CONTAINER);
/*render(<App />, document.getElementById('root'));*/
