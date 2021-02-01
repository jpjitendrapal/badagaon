import Common from '../../components/common/common';
import AppHeader from '../../components/header';
import Head from 'next/head'
import AppFooter from '../../components/appFooter';
export default function ContactUs(){
    return (
        <div className="container">
            <Common/>
            <AppHeader/>
            <div style={{height: "500px"}}>Coming soon...</div>
            <AppFooter/>
        </div>
    )
}