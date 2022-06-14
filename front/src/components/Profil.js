import React from "react";

const Profil = (props) => {
  return (
    <>
      <div className="profilContainer">
        <div className="profilCardInfo">
          {props.user.imageUrl && (
            <img
              className="profilCardPic"
              src={props.user.imageUrl}
              alt="image de profil"
            />
          )}

          <p className="profilCardPseudo">{props.user.pseudo}</p>
        </div>
        <div className="bioInfo">
          <h5 className="bioTitle">Bio</h5>
          <p className="bio">{props.user.bio}</p>
        </div>
      </div>
    </>
  );
};

export default Profil;
