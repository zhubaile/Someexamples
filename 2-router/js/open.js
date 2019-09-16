import React, { Component, Fragment } from 'react';
import "../css/index.css"

export default class Open extends Component {
    state={
        open:false
    }
    close(){
        this.setState({
            open: false,
            content: null
        })
    }
    open() {
        this.setState({
            open: true,
        });
    }
    render() {
        if(!this.state.open) return null
        return (
            <div className="hxj-popup hxj-popup-alert">
                <div className="hxj-popup-overlay"></div>
                <div className="hxj-popup-container">
                    <div className="hxj-popup-title">
                      我知道
                       {/* { this.props.title && (<h3>this.props.title</h3>)  }*/}
                        <a href="javascript:void(0)" onClick={ this.close.bind(this)} title="关闭">
                            <i className="iconfont icon-guanbi"></i>
                        </a>
                    </div>
                    <div className="hxj-popup-content">
                        asdad
                        <a href="javascript:;" onClick={this.close.bind(this)}>close</a>
                      {/*  { this.state.content}*/}
                    </div>
                </div>
            </div>
        );
    }
}
