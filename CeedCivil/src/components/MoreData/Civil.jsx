// import React from 'react';
import data from '../JsonData/Data.json'; // Adjust the path based on your file structure

const Civil = () => {
  // Extract the project data (assuming there's only one project)
  const project = data.projects[0];

  // Destructure the necessary data from the project
  const {
    civilEngineering,
    civilEngineeringTaskedTo,
    civilEngineeringStatus,
    civilDropboxLink,
    civilEstimatedDeliveryTime
  } = project;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg backdrop-blur-md bg-opacity-30">
      <table className="w-full text-[13px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
          {/* <tr>
            <th scope="col" className="px-6 py-3 text-[13px]">Attribute</th>
            <th scope="col" className="px-6 py-3 text-[13px]">Value</th>
          </tr> */}
        </thead>
        <tbody>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Civil Engineering</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={civilEngineering}
                readOnly
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-0"
              />
            </td>
          </tr>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Civil Engineering Tasked To</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={civilEngineeringTaskedTo}
                readOnly
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-0"
              />
            </td>
          </tr>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Civil Engineering Status</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={civilEngineeringStatus}
                readOnly
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-0"
              />
            </td>
          </tr>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Civil Dropbox Link</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={civilDropboxLink}
                readOnly
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:outline-none focus:ring-0"
              />
            </td>
          </tr>
          <tr className="bg-transparent dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Civil Estimated Delivery Time</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={civilEstimatedDeliveryTime}
                readOnly
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-0"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Civil;
