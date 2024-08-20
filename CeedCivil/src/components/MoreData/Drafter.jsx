// import React from 'react';
import data from '../JsonData/Data.json'; // Adjust the path based on your file structure

const Drafter = () => {
  // Extract the project data (assuming there's only one project)
  const project = data.projects[0];

  // Destructure the necessary data from the project
  const {
    drafterNeeded,
    drafterTaskedTo,
    draftingStatus,
    draftingDropboxLink,
    draftingEstimatedDeliveryTime
  } = project;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg backdrop-blur-md bg-opacity-30">
      <table className="w-full text-[13px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
          {/* <tr>
            <th scope="col" className="px-6 py-3">Attribute</th>
            <th scope="col" className="px-6 py-3">Value</th>
          </tr> */}
        </thead>
        <tbody>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Drafter Needed</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={drafterNeeded}
                readOnly
                className="w-full bg-transparent border-none text-gray-900 dark:text-white"
              />
            </td>
          </tr>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Drafter Tasked To</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={drafterTaskedTo}
                readOnly
                className="w-full bg-transparent border-none text-gray-900 dark:text-white"
              />
            </td>
          </tr>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Drafting Status</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={draftingStatus}
                readOnly
                className="w-full bg-transparent border-none text-gray-900 dark:text-white"
              />
            </td>
          </tr>
          <tr className="bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Drafting Dropbox Link</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={draftingDropboxLink}
                readOnly
                className="w-full bg-transparent border-none text-blue-600 dark:text-blue-400"
              />
            </td>
          </tr>
          <tr className="bg-transparent dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Drafting Estimated Delivery Time</td>
            <td className="px-6 py-4">
              <input
                type="text"
                value={draftingEstimatedDeliveryTime}
                readOnly
                className="w-full bg-transparent border-none text-gray-900 dark:text-white"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Drafter;
