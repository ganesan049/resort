import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeauturedRooms from "../components/FeauturedRooms";
function Home() {
  return (
    <>
      <Hero>
        <Banner title="Luxurious Room" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeauturedRooms />
    </>
  );
}

export default Home;
