import '../common/template/dependencies'
import React from 'react';
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';
import Messages from '../common/msg/messages';
export default props => (
    <div className='skin-blue' style={{minHeight: 0}}>
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'> 
            <Routes/>
        </div>
        <Footer />
        <Messages/>
    </div>
)