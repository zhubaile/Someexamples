import React,{Component} from "react";
import "../../css/index.css"

export default class Ceshi extends Component{
    constructor(props){
        super(props);
        this.state={
            opne:false,
            par:null
        }
    }
    close(){
        this.setState({
            opne:false,
            content:null
        })
    }
    ceshi(content,confirm){
        this.setState({
            opne:true,
            content:content
        });
        this.confirmCallBack = confirm
    }
    render(){
        if(!this.state.opne) return null
        return(
            <div className="hxj-popup">
                <div className="hxj-popup-overlay">
                    <div className="hxj-popup-container">
                        <div className="hxj-popup-title">
                            {this.state.content}
                        </div>
                        <div>
                            随便弄得没有样式
                        </div>
                        <a href="javascript:;" onClick={this.close.bind(this)}>close</a>
                    </div>
                </div>
            </div>
        )
    }
}