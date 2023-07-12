import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

import "./Registration.css";
import banner from "../Assets/registration.png";

export default function Registration() {
  return (
    <div>
      <Navigation />
      <div className="navigationHero">
        <img src={banner} alt="" />
      </div>
      <div>
        <h2 className="regTitle">Summer Camp Registration</h2>
        <form action="process_form.php" method="POST">
          {/* <!-- Child Information --> */}
          <h3>Child Information</h3>
          <label for="child_first_name">Child's First Name:</label>
          <input
            type="text"
            id="child_first_name"
            name="child_first_name"
            required
          />

          <label for="child_last_name">Child's Last Name:</label>
          <input
            type="text"
            id="child_last_name"
            name="child_last_name"
            required
          />

          <label for="birth_date">Birth Date:</label>
          <input type="date" id="birth_date" name="birth_date" required />

          <label for="grade">Grade:</label>
          <input type="text" id="grade" name="grade" required />

          <label for="school_name">Name of School:</label>
          <input type="text" id="school_name" name="school_name" required />

          {/* <!-- Parent Information --> */}
          <h3>Parent Information</h3>
          <label for="parent_first_name">Parent/Guardian First Name:</label>
          <input
            type="text"
            id="parent_first_name"
            name="parent_first_name"
            required
          />

          <label for="parent_last_name">Parent/Guardian Last Name:</label>
          <input
            type="text"
            id="parent_last_name"
            name="parent_last_name"
            required
          />

          <label for="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          {/* <!-- Medical Information --> */}
          <h3>Medical Information</h3>
          <label for="physician_name">Physician Name:</label>
          <input
            type="text"
            id="physician_name"
            name="physician_name"
            required
          />

          <label for="physician_phone">Physician Phone Number:</label>
          <input
            type="tel"
            id="physician_phone"
            name="physician_phone"
            required
          />

          <label for="medical_concern">Medical Concern:</label>
          <textarea
            id="medical_concern"
            name="medical_concern"
            rows="4"
            cols="30"
          ></textarea>

          {/* <!-- Submit Button --> */}
          <input type="submit" value="Submit" />
        </form>
      </div>

      <Footer />
    </div>
  );
}
