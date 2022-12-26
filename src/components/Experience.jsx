import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import express from "../assets/express.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import bootstrap from "../assets/Bootstrap.png"

const Experience = () => {
  const techs =[
    {
      id:1,
      src:html,
      title:"HTML",
      style:'shadow-orange-500'
    },
    {
      id:1,
      src:css,
      title:"CSS",
      style:'shadow-blue-500'
    },
    {
      id:1,
      src:javascript,
      title:"JavaScript",
      style:'shadow-yellow-500'
    },
    {
      id:1,
      src:react,
      title:"React",
      style:'shadow-cyan-500'
    },
    {
      id:1,
      src:express,
      title:"Express",
      style:'shadow-gray-200'
    },
    
    {
      id:1,
      src:bootstrap,
      title:"Bootstrap",
      style:'shadow-violet-800'
    },
    // {
    //   id:1,
    //   src:github,
    //   title:"GitHub",
    //   style:'shadow-gray-500'
    // },
    {
      id:1,
      src:tailwind,
      title:"TailWind",
      style:'shadow-sky-400'
    },
    {
      id:1,
      src:node,
      title:"NodeJs",
      style:'shadow-green-500'
    },
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b p-4 from-gray-800 to-black w-full py-4 h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience