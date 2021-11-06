import React from 'react';
import Intro from '../Intro/Intro';
import WhyLb from '../WhyLB/WhyLB';
import DownloadApp from '../DownloadApp/DownloadApp';
import NavigationBar from '../../NavigationBar/NavigationBar'

export default function HomeMain() {
    return (
        <div>
            {/* <NavigationBar /> */}
            <Intro />
            <WhyLb />
            <DownloadApp />
        </div>
    )
}
