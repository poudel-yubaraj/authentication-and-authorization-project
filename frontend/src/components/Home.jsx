import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-200 to-sky-500">
      <Link
        to="/login"
        className="bg-white w-full max-w-sm rounded-xl m-3 px-3 py-4 text-center hover:bg-sky-100 transition"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-white w-full max-w-sm rounded-xl m-3 px-3 py-4 text-center hover:bg-sky-100 transition"
      >
        Sign Up
      </Link>
    </div>
  )
}

export default Home
