import React from 'react';
import Auxi from '../../Auxi/Auxi';
import clasess from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => {
    return (
        <Auxi>
            <Toolbar />
            {/* <div>Toolbar, Sidebar, Backdrip</div> */}
            <main className={clasess.content}>
            {props.children}
        </main>
        </Auxi>
    );

}

export default layout;