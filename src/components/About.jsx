import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        As mentioned previously, I'm an enthusiastic engineer with an artistic touch
        We as engineers are responsible for faster movement of this world, when I say that it means development in 360 degrees without going against the nature.
        And thus I believe in simplifying and finding solution to human and nature problems by applying my technical knowledge in artistic form
      </p>

        <br/>
        <p className='text-xl'>
        I'm well versed in both frontend and backend development with team building skills in organized way, I would want to contribute to the organization and to the world so as to bring some impact to the place wherever I belong to.          </p>
      </div>
    </div>
  )
}

export default About