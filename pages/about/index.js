import Common from '../../components/common/common';
import AppHeader from '../../components/header';
import Head from 'next/head'
import AppFooter from '../../components/appFooter';
import { useEffect } from 'react';
export default function AboutUs(){
    
    const checkTabClose = ()=>{
        console.log("attached Closing");
        window.addEventListener('beforeunload', function (e) {
            // e.preventDefault();
            
            alert("tab closing");
        });
      }
      useEffect(()=>{
          alert("hi")
        checkTabClose();
      },[])
    return (
        <div className="container">
            <Common/>
            <AppHeader/>
            <div style={{height: "500px"}}>Coming soon...</div>
            <AppFooter/>
        </div>
    )
}