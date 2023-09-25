import React from 'react';
import '../styles/waves.css';

const Home = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./waves.css" />
        </head>
        <body>
          <div className="header">
            <div className="inner-header pt-52">
              <h1 className="text-4xl font-bold">Taking Steps Towards Water Sustainability</h1>
              <h3 className="py-4">Dive into Your Daily Water Consumption </h3>
              <button class="bg-gradient-to-tr from-[#023E8A] via-[#0077B6] to-[#0096C7] hover:bg-gradient-to-bl hover:scale-105 duration-200 ease-in-out text-white font-bold py-2 px-4 hover:border-blue-500 rounded">
                Calculate Your Footprints 
              </button>
            </div>

            <div>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use xlinkHref="#gentle-wave" x="48" y="0" fill="#90E0EF" />
                  <use xlinkHref="#gentle-wave" x="48" y="3" fill="#48CAE4" />
                  <use xlinkHref="#gentle-wave" x="48" y="5" fill="#00B4D8" />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0096C7" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content flex">
          </div>
        </body>
      </html>
    </>
  )
}

export default Home;