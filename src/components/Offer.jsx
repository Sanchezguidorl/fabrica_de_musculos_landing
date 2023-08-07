import PropTypes from 'prop-types';
import React from 'react';

function Offer ({slide, plan}) {
return(
    <div>
    <img src={slide} className='img-carrusel' alt={plan} />
</div>
)
}

Offer.propTypes={
    slide: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired
}


export default Offer;