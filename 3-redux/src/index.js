import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/header';
import Conter from './pages/conter';
import Footer from './pages/footer';


export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <Header/>
                <Conter/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
