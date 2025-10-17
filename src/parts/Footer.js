/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
              pwooddigital@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              Burnaby, BC, Canada
            </p>
          </div>
         
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2025 - All rights reserved - Parkwood Digital
          </p>
        </div>
      </div>
    </div>
  );
}
