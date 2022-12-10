import React from 'react'

const item = ({Links, title}) => {
  return (
    <ul>
        <h1 className='mb-1 font-semibold text-lg text-pink-500'>{title}</h1>
        {Links.map((Link)=>(
            <li key={Link.name}>
                <a className='text-gray-400 hover:text-teal-400 duration-300
                text-lg cursor-pointer leading-6' href={Link.link}>{Link.name}</a>
            </li>
        ))}
    </ul>
  )
}

export default item
