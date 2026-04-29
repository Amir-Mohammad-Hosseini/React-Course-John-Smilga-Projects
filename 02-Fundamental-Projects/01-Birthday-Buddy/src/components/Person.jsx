import React from 'react'

const Person = ({id , name , age , image}) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h2>{name}</h2>
        <p>{age} years</p>
      </div>
    </article>
  )
}

export default Person
