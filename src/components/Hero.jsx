import React from 'react'
import assets, { cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='h-screen bg-[url("/src/assets/heroImage.png")] flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 bg-no-repeat bg-center bg-cover text-white'>
      
      <p className='bg-[#49B9FF]/50 w-fit px-3.5 py-1 rounded-full mt-20'>
        The Ultimate Hotel Experience
      </p>

      <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-14 font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfect Getaway Destination
      </h1>

      <p className='max-w-130 my-2 text-sm md:text-base'>
        Unparalleled luxury and comfort await at the world’s most exclusive hotels and resorts. Start your journey today.
      </p>

      <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row gap-4 w-full md:max-w-4xl mr-auto mt-6'>
        
        <div className='flex-1'>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calendar" className='h-4'/>
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input 
            list='destinations' 
            id="destinationInput" 
            type="text" 
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" 
            placeholder="Type here" 
            required 
          />
          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        <div className='flex-1'>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calendar" className='h-4'/>
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input 
            id="checkIn" 
            type="date" 
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" 
          />
        </div>

        <div className='flex-1'>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="calendar" className='h-4'/>
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input 
            id="checkOut" 
            type="date" 
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" 
          />
        </div>

        <div className='flex flex-col md:flex-col items-start md:items-start flex-1'>
          <label htmlFor="guests">Guests</label>
          <input 
            min={1} 
            max={4} 
            id="guests" 
            type="number" 
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full max-w-25" 
            placeholder="0" 
          />
        </div>

        <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white cursor-pointer md:my-auto w-full md:w-auto'>
          <img src={assets.searchIcon} alt="searchIcon" className='h-7'/>
          <span>Search</span>
        </button>

      </form>
    </div>
  )
}

export default Hero