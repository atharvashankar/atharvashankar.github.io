import React from 'react'
import avtr from '../images/111526121.jpg'
const Home = () => {
  return (
    <>
        <section className="text-gray-600 glass my-12 mx-32 rounded-[75px] text-center body-font">
  <div className="container my-16 flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-lg  lg:w-full x-1/2 md:w-1/2 w-1/2 mb-10 md:mb-0">
      <img className="object-cover object-center mx-32 rounded-full h-34 w-4/6 " alt="hero" src={avtr}/>
    </div>
    <div className="lg:flex-grow md:w-3/4 lg:pl-24 mx-32 md:pl-16 flex flex-col md:items-start text-center w-1/2 items-center">
      <h1 className="title-font ml-12 text-center mb-4 font-medium text-[36px] text-white">Hi I'am Atharva
      </h1>
      <p className="mb-8 leading-relaxed text-white text-center text-[18px]">👀 I’m interested in learning new languages<br/>
                                       🌱 I’m currently learning bash-scripts<br/>
                                       📫 My email adress is Atharvashankar2010@gmail.com<br/>
                                       ____________________<br/>
                                      🚀 I'm a generous programmer.And I like to <br/>do cool stuff from internet or anything</p>
    </div>
    </div>
</section>
    </>
  )
}

export default Home