import React from 'react';
import VerticalSocial from '../VerticalSocial/VerticalSocial';
import Dept from '../Dept/Dept';
import ProjectHomePage from '../ProjectHomePage/ProjectHomePage';
import WhyUS from '../WhyUS/WhyUS';
import Testimonials from '../Testimonials/Testimonials';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import MainTopBanner from '../MainTopBanner/MainTopBanner';

const Home = () => {
    return (
        <div>
            <MainTopBanner />
            <VerticalSocial />
            {/* <Dept />
            <ProjectHomePage />
            <WhyUS />
            <Testimonials />
            <ContactForm />
            <Footer /> */}
        </div>
    );
};

export default Home;