import React from "react";
import { usePortafolio } from "@hooks/usePortafolio";
import github from "@images/github.png";
import instagram from "@images/instagram.png";
import twitter from "@images/twitter.png";

export const PortafolioPage = () => {
  const { portafolio } = usePortafolio();
  //console.log(portafolio);
  return (
    <div className="About">
      <div className="card">
        <div className="card_details">
          <div className="card_photo center circle">
            <img src={portafolio.picture.large} alt={portafolio.name.first} />
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ enableBackground: "new -580 439 577.9 194" }}
              xmlSpace="preserve"
            >
              <circle cx={50} cy={50} r={40} />
            </svg>
          </div>
          <p className="card_title">Hi, My name is</p>
          <p className="card_value">
            {portafolio.name.first} {portafolio.name.last}
          </p>
        </div>
        <div className="card_userdata">
          <ul>
            <li>{portafolio.email}</li>
            <li>{portafolio.cell}</li>
          </ul>
        </div>
        <div className="card_social">
          <a href="https://twitter.com/gndx">
            <img src={twitter} />
          </a>
          <a href="https://github.com/gndx">
            <img src={github} />
          </a>
          <a href="https://instagram.com/gndx">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};
