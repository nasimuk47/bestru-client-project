/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner/Banner";
import PopularMenu from "./PopulerMenu/PopulerMenu";
import Featured from "./Featured/Featured";
import Category from "./Category/Category";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
