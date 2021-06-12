import React from 'React'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <ul>
      <li><Link to = { '/home' }>Home</Link></li>
      <li><Link to = { '/signup' }>Sign Up</Link> </li>
    </ul>
  )
}