import React from 'react'
import ServiceCards from '../Components/ServiceCards'

const Services = () => {
  return (
    <div className='pt-10 bg-[#aefcf952] text-blue-950'>
<div className="items-center text-center space-y-6">
  <h2 className="text-4xl font-bold"> Services</h2>
  <p className="font-semibold text-xl">Paymine will secure your future & help you earn more with our Best In Class Services.</p>
</div>

      <ServiceCards/>
    </div>
  )
}

export default Services