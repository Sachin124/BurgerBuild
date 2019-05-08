import React from 'react';
import Auxi from '../../Auxii/Auxi';
import clasess from './Layout.module.css';
const layout = (props) => {
    return (
        <Auxi>
            <div>Toolbar, Sidebar, Backdrip</div>
            <main className={clasess.content}>
            {props.children}
        </main>
        </Auxi>
    );

}

export default layout;