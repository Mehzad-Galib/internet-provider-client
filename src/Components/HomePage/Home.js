import React from 'react';
import Footer from './Footer/Footer';
import OurSuccess from './OurSuccess/OurSuccess';
import ShowReview from './ShowReview/ShowReview';
import ShowServices from './ShowServices/ShowServices';
import Sponsors from './Sponsors/Sponsors';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            <TopBanner></TopBanner>
            <OurSuccess></OurSuccess>
            <ShowServices></ShowServices>
            <ShowReview></ShowReview>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </>
    );
};

export default Home;