import React from 'react';

const SectionHeader = ({title, description}) => {
    return (
        <div className='text-center text-[#3E1C1A] mt-28'>
            <p className='text-xl'>{description}</p>
            <h1 className='text-5xl font-semibold'>{title}</h1>
        </div>
    );
};

export default SectionHeader;