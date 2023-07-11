import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import "./Hockey.css";

export default function Hockey() {
  return (
    <div>
      <Navigation />
      <div className="hockeyHeroSection">
        <div className="hockeyHeroText">
          <h1>Hockey Camp Summer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit
            sint earum incidunt dolorem tempore voluptatibus rerum, a ab
            suscipit tenetur accusantium, libero autem rem placeat perspiciatis
            repellendus voluptatum. Excepturi.
          </p>
          <button>Register you child now</button>
        </div>
      </div>
      <div className="hockeyMainSection">
        <div className="hockeyTitle">
          <h2>Program, Rates & Dates</h2>
          <h3>*All Programs are currently booked for the summer</h3>
        </div>

        <div className="hockyInformation">
          <ul>
            <li>Hockey Camp - Summer</li>
            <li>Skills & Drills - Summer</li>
            <li>High Intensity Shiny - Summer</li>
            <li>Skills & Drills - Fall</li>
            <li>Skills & Drills - Winter</li>
            <li>Skills & Drills - Spring</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
