import React from 'react';
import { Link  } from 'react-router-dom';
/*import UserLayout from './xianshi';
import Router from './router';*/



class Popup extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
                <div>
                    <ul>
                        <li><Link to="/Zhubaile">
                            朱柏乐界面
                        </Link></li>
                        <li><Link to="/Zhuyanyan">
                            朱娇娇界面
                        </Link></li>
                    </ul>
                </div>
        );
    }
}
export default Popup;