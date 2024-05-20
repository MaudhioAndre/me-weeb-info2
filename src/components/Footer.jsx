import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-transparent">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-0">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <h1 to="/" className="block text-white text-2xl font-bold text-center md:text-left">
                            <span className="sr-only">Home</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                                M
                            </span>
                            e
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                                W
                            </span>
                            eeb
                        </h1>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
                            Copyright &copy; Akhmad Nuryasin 2024. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer