import React, { Component } from 'react';
import Auxi from '../../Auxi/Auxi';
import clasess from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state ={
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggler = ()=>{
        this.setState((prevState)=>{
           return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Auxi>
                <SideDrawer opened={this.state.showSideDrawer}  closed={this.sideDrawerClosedHandler} />
                <Toolbar toggle={this.sideDrawerToggler} />
                {/* <div>Toolbar, Sidebar, Backdrip</div> */}
                <main className={clasess.content}>
                    {this.props.children}
                </main>
            </Auxi>
        );
    }
}

export default Layout;