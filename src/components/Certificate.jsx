import React from 'react'
import portimg1 from '../assets/portfolio/portimg1.jpg'
import portimg2 from '../assets/portfolio/portimg2.jpg'
import portimg3 from '../assets/portfolio/portimg3.jpg'
import portimg4 from '../assets/portfolio/portimg4.jpg'
import portimg5 from '../assets/portfolio/portimg5.jpg'
import portimg6 from '../assets/portfolio/portimg6.jpg'

const certificate = () => {

  const certificates = [
    {
      id:1,
      src: portimg1,
      String:'ReactJs'
    
    },
    {
      id:2,
      src: portimg2,
      String:'MongoDB & NodeJs'
    },
    {
      id:3,
      src: portimg3,
      String:'ReactJs'
    },
    {
      id:4,
      src: portimg4,
      String:'MongoDb & NodeJs'

    },
    {
      id:5,
      src: portimg5,
      String:'Bootstrap'

    },
    {
      id:6,
      src: portimg6,
      String:'Innovation'

    },
  ]
  return (
    <div name="certificate" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Certificates</p>
          <p className='py-6'>Checkout some of my Certificates</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          certificates.map(({id, src, String}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105'>
                {String}
              </button>
            </div>
          </div>  
          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default certificate