import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import "./Home.css";
import Footer from "../Components/Footer/Footer";
import camp from "../Assets/camp-removebg-preview.png";
import about from "../Assets/aboutsectionimage.jpg";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="heroTitle">
        <div className="heroContent">
          <h2>
            Welcome to <br /> <span>Kids of Canada!</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            sint sunt vitae hic ducimus, ea maxime eius assumenda delectus ex
            quia asperiores cum veniam tempora reiciendis voluptatibus tenetur
            ipsam! Autem.
          </p>
          <button>Register you child now</button>
        </div>
        <div className="heroImages">
          <img src={camp} alt="" />
        </div>
      </div>

      <div className="programsSection">
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
      </div>

      <div className="aboutContainer">
        <div className="aboutInformationSection">
          <h2 className="programTitle">About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            explicabo dolorem facere ad quas consequuntur nesciunt similique
            dolores eos temporibus ab repudiandae tempore nemo neque, veniam
            debitis soluta. Facere veniam, mollitia debitis accusamus voluptatum
            autem delectus suscipit molestias reiciendis? Ipsum veniam in
            provident suscipit, nobis autem dolor. Sed, nobis quia?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            debitis deserunt sapiente obcaecati tempore dolor id minima
            asperiores voluptas reprehenderit? Laboriosam voluptatibus eaque, at
            et id blanditiis natus vitae! Fuga!
          </p>
        </div>
        <div className="aboutImage">
          <div className="aboutImageContainer">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
      <div className="contactusContainer">
        <div className="contactusText">
          <h2 className="programTitle">Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, hic.
            Facilis voluptas quibusdam a amet consequatur eaque veritatis
            voluptatem ratione, magni blanditiis quasi numquam at. Iusto
            perspiciatis a voluptate similique.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, eos!
            Necessitatibus molestiae error delectus praesentium quasi quia
            aspernatur corrupti quam sequi, aut porro, perferendis tempora unde
            esse hic iusto aliquam.
          </p>
        </div>
      </div>
      <div className="FooterImage"></div>
      <Footer />
    </div>
  );
}
