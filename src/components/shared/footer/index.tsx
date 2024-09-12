import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Nabil Faturrahman. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer