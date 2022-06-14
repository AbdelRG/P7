import React from "react";
import profilPic from "../../public/assets/images/icon-left-font-monochrome-black.png";

const Profil = () => {
  return (
    <>
      <div className="profilContainer">
        <div className="profilCardInfo">
          <img
            className="profilCardPic"
            src={profilPic}
            alt="image de profil"
          />

          <p className="profilCardPseudo">Pseudo</p>
        </div>
        <div className="bioInfo">
          <h5 className="bioTitle">Bio</h5>
          <p className="bio">Bio</p>
        </div>
      </div>
    </>
  );
};

export default Profil;
