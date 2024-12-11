import React from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import FlashOffers from "./FlashOffers";
import UsersData from "../../components/UsersData";
import MoreDeals from "./MoreDeals";
import Categories from "./Categories";
import Benefits from "../HomePageV2/Benefits";
import Recommandations from "./Recommandations";
import PersonalRec from "./PersonalRec";

const index = () => {
  return (
    <div className="bg-[#1C98F7] ">
      <div className="max-w-screen-2xl mx-auto">
        <Hero />
        <UsersData />
        <FlashOffers />
        <MoreDeals />
        <Categories />
        <Benefits />
        <Recommandations />
        <Features />
      </div>
    </div>
  );
};

export default index;
