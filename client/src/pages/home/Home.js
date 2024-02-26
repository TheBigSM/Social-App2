import React from 'react';
import {useState, useEffect} from 'react'
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Rightbar2 from "../../components/rightbar/Rightbar2";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useMediaQuery } from 'react-responsive';
import {regSw, subscribe} from '../../helper.js';
import './home.css';
import { ToastProvider, useToasts } from 'react-toast-notifications';

function Home() {
    const [selectedValue, setSelectedValue] = useState('0');

    const isMobileDevice = useMediaQuery({ query: "(min-device-width: 480px)", });
    const isTabletDevice = useMediaQuery({ query: "(min-device-width: 768px)", });

    return (
        <>
            <Topbar setSelectedValue={setSelectedValue}/>
            <ToastProvider style={{ 'margin': !isMobileDevice && !isTabletDevice && '0px 1px' }}>
            <div className="homeContainer" style={{ 'margin': !isMobileDevice && !isTabletDevice && '0px 1px' }}>
                { isMobileDevice && isTabletDevice && <Sidebar />}
                <Feed selectedValue={selectedValue}/>
                { isMobileDevice && isTabletDevice && <Rightbar2 />}
            </div>
            </ToastProvider>
        </>
    )
}

export default Home
