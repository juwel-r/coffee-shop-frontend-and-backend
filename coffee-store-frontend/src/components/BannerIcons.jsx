import React from 'react';

const BannerIcons = ({icon, title, description}) => {
    return (
        <div>
            <img src={icon} alt="" />
            <h1 className='text-4xl my-4'>{title}</h1>
            <p className='max-w-72'>{description}</p>
        </div>
    );
};

export default BannerIcons;