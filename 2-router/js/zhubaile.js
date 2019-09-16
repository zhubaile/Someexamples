import React from 'react';
import {Link } from 'react-router-dom';
import Ceshi from "./ceshi/ceshi"

class Zhubaile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sss:"block"
        }
    }
    ceshi(){
        debugger
        const name=this.Name.value
        this.Ceshi.ceshi(name)
    }
    ok(){
        this.setState({
            sss:"none"
        })
    }
    no(){
        this.setState({
            sss:"block"
        })
    }
    render() {
        return(
                <div>
                    <Ceshi ref={(node) => this.Ceshi = node }/>
                    <h1>朱柏乐的界面朱柏乐的界面朱柏乐的界面朱柏乐的界面朱柏乐的界面朱柏乐的界面</h1>
                    <input type="text" ref={name=>this.Name=name}/>
                    <Link to="/Zhuyanyan">
                        返回朱娇娇界面返回朱娇娇界面返回朱娇娇界面返回朱娇娇界面返回朱娇娇界面
                    </Link>
                    <a href="javascript:;" onClick={this.ceshi.bind(this)}>跳转</a>
                    <div>
                        <a href="javascript:;" onClick={this.ok.bind(this)}>嗨,girl</a>
                        <a href="javascript:;" style={{display:this.state.sss}} onClick={this.no.bind(this)}>嗨,boy</a>
                    </div>
                </div>
        );
    }
}
export default Zhubaile;