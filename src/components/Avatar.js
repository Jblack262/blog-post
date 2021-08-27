import React from 'react'

function Avatar({avatarUrl, name}) {
  return (
    <div className="Avatar">
      <img src={avatarUrl} alt="User Profile Pic"/>
      <h2 className="name">{name}</h2>
    </div>
  )
}



export default Avatar;