import '../common/template/dependencies'
import React from 'react';
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/messages';
export default props => (
    <div className='skin-blue' style={{minHeight: 0}}>
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'> 
            {props.children}
        </div>
        <Footer />
        <Messages/>
    </div>
)