import Common from '../../components/common/common';
import AppHeader from './../../components/header';
import Head from 'next/head'
import AppFooter from '../../components/appFooter';
export default function Pdp(){
    return (
        <div className="container">
            <AppHeader/>
            <div style={{height: "700px"}}>This is pdp</div>
            <Common/>
            <AppFooter/>
        </div>
    )
}