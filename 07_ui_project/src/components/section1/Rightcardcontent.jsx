import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores voluptatum tempora modi quaerat dolore.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default Rightcardcontent
