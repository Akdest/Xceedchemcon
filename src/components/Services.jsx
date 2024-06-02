import React from 'react';
import img1 from '/assets/icons/mem_org.png';
import img2 from '/assets/icons/national_assoc.png';
import img3 from '/assets/icons/clubs_grps.png';

import imgc1 from '/assets/company1.png';
import imgc2 from '/assets/company2.png';
import imgc3 from '/assets/company3.png';
import imgc4 from '/assets/company4.png';
import imgc5 from '/assets/company5.png';
import imgc6 from '/assets/company6.png';
import imgc7 from '/assets/company7.png';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Community Management',
            description: 'Manage your entire community in a single system',
            src: img1
        },
        {
            id: 2,
            title: 'National Association',
            description: 'Manage your entire community in a single system',
            src: img2
        },
        {
            id: 3,
            title: 'Clubs & Groups',
            description: 'Manage your entire community in a single system',
            src: img3
        },
    ];

    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="services">
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src={imgc1} alt="" />
                    <img src={imgc2} alt="" />
                    <img src={imgc3} alt="" />
                    <img src={imgc4} alt="" />
                    <img src={imgc5} alt="" />
                    <img src={imgc6} alt="" />
                    <img src={imgc7} alt="" />
                </div>
                <div className='mt-20 md:w-1/2 mx-auto text-center'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
                    <p className='text-neutralGrey'>Who is Chemcom suitable for?</p>
                </div>

                {/* Cards */}
                <div className='my-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:w-11/12 mx-auto'>
                    {services.map(service => (
                        <div key={service.id} className='bg-white p-8 rounded-lg shadow-md hover:cursor-pointer hover:border-b-4 hover:border-brandPrimary transition-all duration-300 justify-center h-full'>
                            <div>
                                <img src={service.src} alt="" className='w-20 mx-auto' />
                                <h4 className='text-xl font-semibold mt-4'>{service.title}</h4>
                                <p className='text-neutralGrey mt-2'>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
