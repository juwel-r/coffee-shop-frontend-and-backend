import React from 'react';
import SectionHeader from './SectionHeader';

const FollowUs = () => {
    const coffeeCups = [
        {
          "id": 1,
          "photo": "https://i.ibb.co.com/7gpLcVM/Rectangle-9.png"
        },
        {
          "id": 2,
          "photo": "https://i.ibb.co.com/4VnMzhL/Rectangle-10.png"
        },
        {
          "id": 3,
          "photo": "https://i.ibb.co.com/kqFqYVF/Rectangle-11.png"
        },
        {
          "id": 4,
          "photo": "https://i.ibb.co.com/x86hgWp/Rectangle-12.png"
        },
        {
          "id": 5,
          "photo": "https://i.ibb.co.com/mq6HGkS/Rectangle-13.png"
        },
        {
          "id": 6,
          "photo": "https://i.ibb.co.com/b2XgK3p/Rectangle-14.png"
        },
        {
          "id": 7,
          "photo": "https://i.ibb.co.com/sWXD7Cc/Rectangle-15.png"
        },
        {
          "id": 8,
          "photo": "https://i.ibb.co.com/TYVD0Hk/Rectangle-16.png"
        }
      ]
      
      
    return (
        <div className='md:w-11/12 mx-auto'>
            <SectionHeader title={"Follow Us On Instagram"} description={"Follow Us Now --"}></SectionHeader>
            <section className='grid place-content-center md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
                {coffeeCups.map(coffee => <div>
                    <img src={coffee.photo} alt="cup of coffee" />
                </div>)
                }
            </section>
        </div>
    );
};

export default FollowUs;