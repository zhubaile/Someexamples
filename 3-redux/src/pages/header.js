import React from 'react';
import  "../julu.css";


export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="hxj-popup hxj-popup-alert">
                <div className="hxj-popup-overlay"></div>
                <div className="hxj-popup-container">
                    <div className="hxj-popup-title">
                       haode
                        <a href="javascript:void(0)" onClick={ this.close.bind(this)} title="关闭">
                            <i className="iconfont icon-guanbi"></i>
                        </a>
                    </div>
                    <div className="hxj-popup-content">
                        飒飒大师的
                    </div>
                    <div className="hxj-popup-bottom">
                        <a href="javascript:void(0)" className="hxj-btn btn-red" onClick={ this.confirm.bind(this) }>确定</a>
                        <a href="javascript:void(0)" className="hxj-btn btn-gray" onClick={ this.close.bind(this) }>取消</a>
                    </div>
                </div>
            </div>
        );
    }
}

