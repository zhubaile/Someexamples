/*
import React from 'react';
import Layout from '@icedesign/layout';
import { Breadcrumb, Icon, Button, Dropdown, Select } from '@icedesign/base';
import Menu, {
    SubMenu,
    ItemGroup as MenuItemGroup,
    Item as MenuItem
} from '@icedesign/menu';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: 'setting:1',
            mode: 'inline',
            headerTheme: 'light',
            headerColor: '',
            asideTheme: 'dark',
            asideColor: '',
        };
    }
    handleClick = e => {
        this.setState({
            current: e.key
        });
    };

    headerThemeChange = value => {
        this.setState({ headerTheme: value });
    };
    headerColorChange = value => {
        this.setState({ headerColor: value });
    };
    asideThemeChange = value => {
        this.setState({ asideTheme: value });
    };
    asideColorChange = value => {
        this.setState({ asideColor: value });
    };
    render() {
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Layout.Aside theme={this.state.asideTheme} color={this.state.asideColor}>
                    <Menu  theme={this.state.asideTheme} color={this.state.asideColor} mode={this.state.mode}>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon size="xs" type="similar-product" /><span>侧边菜单一</span>
                </span>
                            }
                        >
                            <MenuItemGroup title="Item 1">
                                <MenuItem key="1">子菜单一</MenuItem>
                                <MenuItem key="2">子菜单二</MenuItem>
                            </MenuItemGroup>
                            <MenuItemGroup title="Iteom 2">
                                <MenuItem key="3">子菜单三</MenuItem>
                                <MenuItem key="4">子菜单四</MenuItem>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                  <Icon size="xs" type="bags" /><span>侧边菜单二</span>
                </span>
                            }
                        >
                            <MenuItem key="5">子菜单一</MenuItem>
                            <MenuItem key="6">子菜单二</MenuItem>
                            <SubMenu key="sub3" title="Submenu">
                                <MenuItem key="7">子菜单三</MenuItem>
                                <MenuItem key="8">子菜单四</MenuItem>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                  <Icon size="xs" type="history" /><span>侧边菜单三</span>
                </span>
                            }
                        >
                            <MenuItem key="9">子菜单一</MenuItem>
                            <MenuItem key="10">子菜单二</MenuItem>
                            <MenuItem key="11">子菜单三</MenuItem>
                            <MenuItem key="12">子菜单四</MenuItem>
                        </SubMenu>
                    </Menu>
                </Layout.Aside>
                <Layout.Section>
                    <Layout.Header
                        theme={this.state.headerTheme}
                        color={this.state.headerColor}
                        style={{
                            height: '56px',
                            padding: '0 24px 0 0',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Menu
                            theme={this.state.headerTheme}
                            color={this.state.headerColor}
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <MenuItem key="mail">
                                <Icon type="service" />首页
                            </MenuItem>
                            <MenuItem key="app" disabled>
                                <Icon type="training" />分类
                            </MenuItem>
                            <SubMenu key="favorite" title={<span><Icon type="favorite" />收藏</span>}>
                                <MenuItemGroup title="购买清单">
                                    <MenuItem key="setting:1">家电</MenuItem>
                                    <MenuItem key="setting:2">床品</MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="心愿单">
                                    <MenuItem key="setting:3">童装</MenuItem>
                                    <MenuItem key="setting:4">女装</MenuItem>
                                </MenuItemGroup>
                            </SubMenu>
                            <MenuItem key="ice">
                                <a
                                    href="http://ice.alibaba-inc.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ICE 官网
                                </a>
                            </MenuItem>
                        </Menu>
                        <div className="ice-layout-header-right" {...getDefaultFontColor(this.state.headerTheme)}>
              <span style={{ paddingRight: 12 }}>
                下午好，内容管理后台。
              </span>
                            <UserPanel
                                offset={[0, 11]}
                                size={36}
                                shape="circle"
                                userName="Jack Ma"
                                avatar="//img.alicdn.com/tfs/TB1JLbBQXXXXXcUapXXXXXXXXXX-215-185.png"
                            >
                                <div>
                                    <Menu
                                        style={{
                                            minWidth: 120,
                                            boxShadow: '0 0 2px #ccc'
                                        }}
                                    >
                                        <MenuItem>
                                            <a href="/">信息中心</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="/">设置</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="/">退出</a>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </UserPanel>
                        </div>
                    </Layout.Header>
                    <Breadcrumb style={{ margin: '12px 24px' }}>
                        <Breadcrumb.Item link="javascript:void(0);">
                            首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item link="javascript:void(0);">
                            分类
                        </Breadcrumb.Item>
                        <Breadcrumb.Item link="javascript:void(0);">
                            收藏
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout.Main
                        style={{
                            padding: 20,
                            margin: '0 24px',
                            backgroundColor: '#fff'
                        }}
                    >
                        <table>
                            <thead>
                            <tr>
                                <td colSpan="4">
                                    <p>
                                        通过配置 Layout.Header、Layout.Aside 以及 IceMenu 的 theme 和 color props 实现组合配色
                                    </p>
                                    <p>
                                        为了达到视觉美观，推荐 Layout.Header、Layout.Aside 与内部 IceMenu 使用统一的配色配置。
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br />
                                </td>
                            </tr>
                            </thead>
                            <tbody style={{ color: '#999' }}>
                            <tr>
                                <td>切换 Header theme：</td>
                                <td>
                                    <Select
                                        style={{width: 200}}
                                        onChange={this.headerThemeChange}
                                        defaultValue={this.state.headerTheme}
                                    >
                                        <Select.Option value="dark">
                                            dark
                                        </Select.Option>
                                        <Select.Option value="light">
                                            light
                                        </Select.Option>
                                    </Select>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    切换 Aside theme：
                                </td>
                                <td>
                                    <Select
                                        style={{width: 200}}
                                        onChange={this.asideThemeChange}
                                        defaultValue={this.state.asideTheme}
                                    >
                                        <Select.Option value="dark">
                                            dark
                                        </Select.Option>
                                        <Select.Option value="light">
                                            light
                                        </Select.Option>
                                    </Select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {this.props.children}
                    </Layout.Main>
                    <Layout.Footer
                        style={{
                            textAlign: 'center',
                            lineHeight: '36px'
                        }}
                    >
                        <p style={{ color: '#999' }}>
                            © 2017-2018 xxxx团队 版权所有 系统维护者：@xx 如有问题随时联系！
                            <br />
                            由 <a href="//ice.alibaba-inc.com" target="_blank"> ICE </a> 提供技术支持
                        </p>
                    </Layout.Footer>
                </Layout.Section>
            </Layout>
        );
    }
}

*/
/*import React, { Component, PropTypes } from 'react';
import Layout from '@icedesign/layout';
//import { Breadcrumb, Icon, Button, Dropdown, Select } from '@icedesign/base';
import Menu, {
    SubMenu,
    ItemGroup as MenuItemGroup,
    Item as MenuItem
} from '@icedesign/menu';

class Header extends Component {
    state = {
        current: 'setting:1',
        mode: 'inline',
        headerTheme: 'light',
        headerColor: '',
        asideTheme: 'dark',
        asideColor: '',
    };

    handleClick = e => {
        this.setState({
            current: e.key
        });
    };

    headerThemeChange = value => {
        this.setState({ headerTheme: value });
    };
    headerColorChange = value => {
        this.setState({ headerColor: value });
    };
    asideThemeChange = value => {
        this.setState({ asideTheme: value });
    };
    asideColorChange = value => {
        this.setState({ asideColor: value });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout.Aside theme={this.state.asideTheme} color={this.state.asideColor}>
                    <Logo {...getDefaultFontColor(this.state.asideTheme)} />
                    <Menu theme={this.state.asideTheme} color={this.state.asideColor} mode={this.state.mode}>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon size="xs" type="similar-product" /><span>侧边菜单一</span>
                </span>
                            }
                        >
                            <MenuItemGroup title="Item 1">
                                <MenuItem key="1">子菜单一</MenuItem>
                                <MenuItem key="2">子菜单二</MenuItem>
                            </MenuItemGroup>
                            <MenuItemGroup title="Iteom 2">
                                <MenuItem key="3">子菜单三</MenuItem>
                                <MenuItem key="4">子菜单四</MenuItem>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                  <Icon size="xs" type="bags" /><span>侧边菜单二</span>
                </span>
                            }
                        >
                            <MenuItem key="5">子菜单一</MenuItem>
                            <MenuItem key="6">子菜单二</MenuItem>
                            <SubMenu key="sub3" title="Submenu">
                                <MenuItem key="7">子菜单三</MenuItem>
                                <MenuItem key="8">子菜单四</MenuItem>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                  <Icon size="xs" type="history" /><span>侧边菜单三</span>
                </span>
                            }
                        >
                            <MenuItem key="9">子菜单一</MenuItem>
                            <MenuItem key="10">子菜单二</MenuItem>
                            <MenuItem key="11">子菜单三</MenuItem>
                            <MenuItem key="12">子菜单四</MenuItem>
                        </SubMenu>
                    </Menu>
                </Layout.Aside>
                <Layout.Section>
                    <Layout.Header
                        theme={this.state.headerTheme}
                        color={this.state.headerColor}
                        style={{
                            height: '56px',
                            padding: '0 24px 0 0',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Menu
                            theme={this.state.headerTheme}
                            color={this.state.headerColor}
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <MenuItem key="mail">
                                <Icon type="service" />首页
                            </MenuItem>
                            <MenuItem key="app" disabled>
                                <Icon type="training" />分类
                            </MenuItem>
                            <SubMenu key="favorite" title={<span><Icon type="favorite" />收藏</span>}>
                                <MenuItemGroup title="购买清单">
                                    <MenuItem key="setting:1">家电</MenuItem>
                                    <MenuItem key="setting:2">床品</MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="心愿单">
                                    <MenuItem key="setting:3">童装</MenuItem>
                                    <MenuItem key="setting:4">女装</MenuItem>
                                </MenuItemGroup>
                            </SubMenu>
                            <MenuItem key="ice">
                                <a
                                    href="http://ice.alibaba-inc.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ICE 官网
                                </a>
                            </MenuItem>
                        </Menu>
                        <div className="ice-layout-header-right" {...getDefaultFontColor(this.state.headerTheme)}>
              <span style={{ paddingRight: 12 }}>
                下午好，内容管理后台。
              </span>
                            <UserPanel
                                offset={[0, 11]}
                                size={36}
                                shape="circle"
                                userName="Jack Ma"
                                avatar="//img.alicdn.com/tfs/TB1JLbBQXXXXXcUapXXXXXXXXXX-215-185.png"
                            >
                                <div>
                                    <Menu
                                        style={{
                                            minWidth: 120,
                                            boxShadow: '0 0 2px #ccc'
                                        }}
                                    >
                                        <MenuItem>
                                            <a href="/">信息中心</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="/">设置</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="/">退出</a>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </UserPanel>
                        </div>
                    </Layout.Header>
                    <Breadcrumb style={{ margin: '12px 24px' }}>
                        <Breadcrumb.Item link="javascript:void(0);">
                            首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item link="javascript:void(0);">
                            分类
                        </Breadcrumb.Item>
                        <Breadcrumb.Item link="javascript:void(0);">
                            收藏
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout.Main
                        style={{
                            padding: 20,
                            margin: '0 24px',
                            backgroundColor: '#fff'
                        }}
                    >
                        <table>
                            <thead>
                            <tr>
                                <td colSpan="4">
                                    <p>
                                        通过配置 Layout.Header、Layout.Aside 以及 IceMenu 的 theme 和 color props 实现组合配色
                                    </p>
                                    <p>
                                        为了达到视觉美观，推荐 Layout.Header、Layout.Aside 与内部 IceMenu 使用统一的配色配置。
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br />
                                </td>
                            </tr>
                            </thead>
                            <tbody style={{ color: '#999' }}>
                            <tr>
                                <td>切换 Header theme：</td>
                                <td>
                                    <Select
                                        style={{width: 200}}
                                        onChange={this.headerThemeChange}
                                        defaultValue={this.state.headerTheme}
                                    >
                                        <Select.Option value="dark">
                                            dark
                                        </Select.Option>
                                        <Select.Option value="light">
                                            light
                                        </Select.Option>
                                    </Select>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    切换 Aside theme：
                                </td>
                                <td>
                                    <Select
                                        style={{width: 200}}
                                        onChange={this.asideThemeChange}
                                        defaultValue={this.state.asideTheme}
                                    >
                                        <Select.Option value="dark">
                                            dark
                                        </Select.Option>
                                        <Select.Option value="light">
                                            light
                                        </Select.Option>
                                    </Select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {this.props.children}
                    </Layout.Main>
                    <Layout.Footer
                        style={{
                            textAlign: 'center',
                            lineHeight: '36px'
                        }}
                    >
                        <p style={{ color: '#999' }}>
                            © 2017-2018 xxxx团队 版权所有 系统维护者：@xx 如有问题随时联系！
                            <br />
                            由 <a href="//ice.alibaba-inc.com" target="_blank"> ICE </a> 提供技术支持
                        </p>
                    </Layout.Footer>
                </Layout.Section>
            </Layout>
        );
    }
}*/
import React from 'react';


export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                我是前面的好孩子
            </div>
        );
    }
}