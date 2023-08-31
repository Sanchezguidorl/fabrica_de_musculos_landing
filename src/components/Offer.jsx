import PropTypes from "prop-types";
import React, { useState } from "react";
function Offer({ slide, plan, message, index }) {
  const handleLoadImg = () => {
    setTimeout(() => {
      setImgLoaded(true);
    }, 700);
  };

  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="img-div" style={{ display: index ? "flex" : "none" }}>
      {!imgLoaded && (
        <div className="img-loader">
          <span className="loader"></span>
        </div>
      )}
      <img
        src={slide}
        className="img-carrusel"
        alt={plan}
        onLoad={handleLoadImg}
      />
      <a
        target="blank"
        href={`https://api.whatsapp.com/send?phone=3517458202&text=${message}`}
        className="button-offer"
      >
        Obtenga su plan
      </a>
    </div>
  );
}

Offer.propTypes = {
  slide: PropTypes.string.isRequired,
  plan: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  index: PropTypes.bool.isRequired,
};

export default Offer;
