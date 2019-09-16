import React, { Component } from 'react';
import BasicRoute from './router';
import "../css/base.css"
import "../css/index.css"

//import { Link  } from 'react-router-dom';


export default class UserLayout extends Component {
    // static propTypes = {};
    // static defaultProps = {};
    render() {
        return (
            <div className="only">
               <div>
                  <div className="header">
                      你好，我是头部....
                  </div>
                  <div className="center">
                      <ul>
                          <li><a href='#/'>去首页</a></li>
                          <li>  <a href='#/Zhubaile'>去柏乐</a></li>
                          <li><a href='#/Zhuyanyan'>去娇娇</a></li>
                      </ul>
                      <ul>
                          <li><a href='#/'>去首页</a></li>
                          <li>  <a href='#/Zhubaile'>去柏乐</a></li>
                          <li><a href='#/Zhuyanyan'>去娇娇</a></li>
                      </ul>
                  </div>
               </div>
                <div className="footer">
                    <BasicRoute />
                    {/*{this.props.children}*/}
                </div>
            </div>
        );
    }
}
