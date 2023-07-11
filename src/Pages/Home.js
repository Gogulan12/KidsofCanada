import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="heroTitle">
        <h2>Welcome to Kids of Canada</h2>
        <button>Register you child now</button>
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolores
        magnam rem illum optio dolorum, dolor perspiciatis doloribus velit in
        voluptatibus blanditiis maxime, delectus fuga cumque hic, magni quia
        sequi.
      </p> */}
      <h2 className="programTitle">Programs</h2>
      <div className="programs">
        <a href="/Hockey">
          <div className="program hockey">
            <p>Hockey Programs</p>
          </div>
        </a>
        <a href="/Summer">
          <div className="program summer">
            <p>Summer Programs</p>
          </div>
        </a>
        <a href="/Other">
          <div className="program other">
            <p>Other Programs</p>
          </div>
        </a>
      </div>

      <div className="aboutContainer">
        <h2 className="programTitle">About Us</h2>
      </div>
      <div className="aboutContainer">
        <h2 className="programTitle">Contact Us</h2>
      </div>
    </div>
  );
}
