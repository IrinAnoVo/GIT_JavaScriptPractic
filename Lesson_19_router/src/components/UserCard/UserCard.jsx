import React from 'react'
import { Link } from 'react-router'

const UserCard = ({user}) => {
  return (
    <div className='user-card'><Link to={`/users/${user.id}`}>{user.name} ({user.username}) - {user.address.city}</Link></div>
  )
}

export default UserCard