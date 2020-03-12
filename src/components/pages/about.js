import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      Im a software Developer always looking to learn. I am driven by solving problems. I am tenacious, Team          
      oriented,  problem solver who isn't afraid to fail and ask for help a few times along the way. I believe in learning,            determination,  Flexibility, and withholding myself to my beliefs and standards.
      </div>
    </div>
  );
}