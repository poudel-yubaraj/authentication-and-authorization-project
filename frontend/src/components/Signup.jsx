import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-200 to-sky-400">
       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
