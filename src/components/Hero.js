import React from 'react';

const Hero = ({content,customClass}) => {
    return (
        <div className={`bg-dark text-white p-5 ${customClass}`}>
           <h1>{content}</h1> 
        </div>
    );
}

export default Hero;
