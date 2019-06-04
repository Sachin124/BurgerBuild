import React, { Component } from 'react';
import clasess from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import Auxi from '../Auxi/Auxi';
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