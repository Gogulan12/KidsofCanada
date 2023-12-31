import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

import "./Summer.css";
import BackToTopButton from "../Components/Button/BackToTopButton";

export default function Summer() {
  return (
    <div>
      <Navigation />
      <div className="summerHeroSection">
        <div className="summerHeroText">
          <h1>Summer Programs</h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit
            sint earum incidunt dolorem tempore voluptatibus rerum, a ab
            suscipit tenetur accusantium, libero autem rem placeat perspiciatis
            repellendus voluptatum. Excepturi.
          </p>
          <a href="/registration">
            <button>Register your child now</button>
          </a> */}
          <p>
            With over 25 years of children and youth programming experience,
            Kids Of Canada is the place to be! All of our programs feature &
            promote:
          </p>
          <ul>
            <li>Small Groups</li>
            <li>More Personal Attention</li>
            <li>Confidence Building</li>
            <li>
              Highly Qualified & Certified Staff who love working with kids
            </li>
          </ul>
        </div>
      </div>
      <div className="summerMainSection">
        <div className="summerTitle">
          <h2>Program, Rates & Dates</h2>
          <h3>*All Programs are currently booked for the summer</h3>
        </div>

        <div className="summerInformation">
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
      <BackToTopButton />
    </div>
  );
}
