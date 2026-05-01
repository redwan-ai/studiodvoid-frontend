import React from 'react';
import Dept from '../Dept/Dept';
import NavBar from '../NavBar/NavBar';
import SubFooter from '../SubFooter/SubFooter';

const Services = () => {
    return (
        <div>
            <NavBar />
            <div className="py-[10rem]">
                <Dept />
            </div>
            <SubFooter />
        </div>
    );
};

export default Services;