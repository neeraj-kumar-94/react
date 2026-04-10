import React from 'react'

function Card({username, btnText="visit profile"}) {
    return (
        <div className="max-w-sm mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/36768562/pexels-photo-36768562.jpeg?_gl=1*m1smvp*_ga*NjE1MjAyNDE1LjE3NzUyMTEyNzA.*_ga_8JE65Q40S6*czE3NzUyMTEyNjkkbzEkZzEkdDE3NzUyMTEzMDckajIyJGwwJGgw"
                alt="Card"
            />

            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {username}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                This is a simple static card using React and Tailwind CSS.
                </p>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                {btnText}
                </button>
            </div>
        </div>
    )
}

export default Card
