import React from 'react'
import prodcut from '/assets/product.png'
import prodImg from '/assets/prod_img.png'

import imgpc1 from '/assets/company1.png'
import imgpc2 from '/assets/company2.png'
import imgpc3 from '/assets/company3.png'
import imgpc4 from '/assets/company4.png'
import imgpc5 from '/assets/company5.png'
import imgpc6 from '/assets/company6.png'

const Product = () => {
  return (
    <div>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="product">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img src={prodcut} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
      </div>


      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3'>
                <img src={prodImg} alt="" />
            </div>
           
            <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h5 className='text-brandPrimary text-xl font-seminbold mb-2'>
                    Tim Smith
                    </h5>
                    <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src={imgpc1} alt="" className='cursor-pointer'/>
                            <img src={imgpc2} alt="" className='cursor-pointer'/>
                            <img src={imgpc3} alt="" className='cursor-pointer'/>
                            <img src={imgpc4} alt="" className='cursor-pointer'/>
                            <img src={imgpc5} alt="" className='cursor-pointer'/>
                            <img src={imgpc6} alt="" className='cursor-pointer'/>

                            <div className='flex items-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet All Customers</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>

    </div>
  )
}

export default Product
