import React from 'react';
import { Link  } from 'react-router-dom';
import Open from "./open"

class Zhuyanyan extends React.Component{
    constructor(props){
        super(props);
    }
    hhh(){
        debugger;
        this.Open.open(null,(data)=>{
        });
    }
    render() {
        return(
                <div>
                    <Open ref={ (node) => this.Open = node }/>
                    <h1>朱娇娇的界面</h1>
                    <Link to="/Zhubaile">
                        返回朱柏乐界面
                    </Link>
                    <a href="javascript:;" onClick={this.hhh.bind(this)}>跳转</a>
                    <a href="javascript:;" onClick={this.hhh.bind(this)}>跳转</a>
                </div>
        );
    }
}
export default Zhuyanyan;