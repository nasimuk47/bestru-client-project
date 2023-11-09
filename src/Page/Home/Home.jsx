/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner/Banner";
import PopularMenu from "./PopulerMenu/PopulerMenu";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;
