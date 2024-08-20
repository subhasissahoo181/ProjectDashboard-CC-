import { useState } from 'react';
import EditableField from './EditableField';
import DrafterDetails from './MoreData/Drafter'; // Import DrafterDetails component
import EngineeringDetails from './MoreData/Engineering'; // Import EngineeringDetails component
import MEPDetails from './MoreData/Mep'; // Import MEPDetails component
import CivilDetails from './MoreData/Civil'; // Import CivilDetails component
import data from './JsonData/Data.json'; // Importing JSON data

const ProjectDetails = ({ project, handleCloseModal }) => {
  const [editableProject, setEditableProject] = useState(project);
  const [isExpanded, setIsExpanded] = useState(false);
  const [nestedAccordion, setNestedAccordion] = useState({}); // Manage nested accordion state
  const [showAlert, setShowAlert] = useState(false); // Manage alert visibility

  // Handle input changes
  const handleInputChange = (key, value) => {
    setEditableProject((prev) => ({ ...prev, [key]: value }));
  };

  // Handle submit button click
  const handleSubmit = () => {
    // Implement your submit logic here
    console.log('Submitted Project Details:', editableProject);
    // For example, send a request to update project details

    // Show success alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
  };

  // Toggle expand/collapse
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Toggle nested accordion
  const toggleNestedAccordion = (key) => {
    setNestedAccordion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Check if the project exists
  if (!project) {
    return (
      <div className="container mt-4">
        <h2>Project not found!</h2>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/3 h-[600px] overflow-y-auto relative shadow-[inset_-12px_-8px_40px_#473e3e]">
        <button
          onClick={handleCloseModal}
          className="bg-red-400 p-2 absolute top-5 right-2 rounded-[8px] hover:bg-red-600 hover:shadow-lg transition-all duration-200"
        >
          <i className="text-4xl bi-x-lg text-white"></i>
        </button>

        <h1 className="font-bold mb-5 text-[25px]">Project Details</h1>
        <div className="relative overflow-x-auto shadow-lg p-4 border-2 border-gray-200 rounded-[8px]">
          <table className="w-full text-sm text-left border-2 border-gray-200 text-gray-500 dark:text-gray-400 rounded-[8px]">
            <tbody>
              {[
                { label: "Project Name", key: "projectName" },
                { label: "Project #", key: "projectNumber", isEditable: false }, // Uneditable
                { label: "Invoice #", key: "invoiceNumber", isEditable: false }, // Uneditable
                {
                  label: "Salesman",
                  key: "salesMan",
                  isDropdown: true,
                  options: data.salesmen, // Using imported data
                },
                {
                  label: "Description",
                  key: "description",
                  isTextarea: true,
                },
                {
                  label: "Overall Status",
                  key: "overallProjectStatus",
                  isDropdown: true,
                  options: data.status, // Using imported data
                },
                {
                  label: "State",
                  key: "state",
                  isDropdown: true,
                  options: data.states, // Using imported data
                },
                { label: "Priority", key: "priority" },
                { label: "Project Files Folder", key: "projectFilesFolder" },
                { label: "Project Notes", key: "projectNotes" },
                { label: "Contract Link", key: "contractLink" },
                { label: "Deposit Paid", key: "depositPaid" },
                { label: "Estimated Budget", key: "estimatedBudget" },
                { label: "Initial Status", key: "initialProjectStatus" },
                { label: "Currently Assigned", key: "currentlyAssignedTo" },
                {
                  label: "Client Project Name/Address",
                  key: "clientProjectNameAddress",
                  isTextarea: true,
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className={`odd:bg-[#EEEDEB] odd:dark:bg-gray-700 even:bg-[#FFFFFF] even:dark:bg-gray-400 border-b dark:border-gray-700 
  hover:bg-[#758694] odd:hover:bg-[#758694] even:hover:bg-[#758694] cursor-pointer`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-[15px]"
                  >
                    {item.label}
                  </th>
                  <td className="px-4 py-2">
                    {item.isDropdown ? (
                      <select
                        className="form-select border-2 border-gray-200 rounded-[4px] p-1 w-full h-[30px] text-[14px]"
                        value={editableProject[item.key]}
                        onChange={(e) => handleInputChange(item.key, e.target.value)}
                      >
                        <option value="" disabled>Select...</option>
                        {item.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : item.isTextarea ? (
                      <textarea
                        value={editableProject[item.key]}
                        onChange={(e) => handleInputChange(item.key, e.target.value)}
                        className="border-2 border-gray-200 rounded p-3 w-full h-[50px] text-[14px]"
                      />
                    ) : (
                      <EditableField
                        value={editableProject[item.key]}
                        onChange={(value) => handleInputChange(item.key, value)}
                        isEditable={item.isEditable !== false}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SeeMore expand/collapse button */}
        <div className="w-full mt-4">
          <button
            onClick={toggleExpand}
            className="w-full h-[50px] bg-sky-300 text-gray-800 rounded-lg flex justify-between items-center px-4"
          >
            <span className="text-[18px]">See More</span>
            <svg
              className={`w-4 h-4 transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isExpanded && (
            <div className="mt-2 space-y-2 text-[15px]">
              {/* Drafter Details */}
              <button
                onClick={() => toggleNestedAccordion('DRAFTER')}
                className="w-full h-[40px] bg-green-500 text-white rounded-lg flex items-center justify-between px-4"
              >
                Drafter Details
                <svg
                  className={`w-4 h-4 transform ${nestedAccordion['DRAFTER'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {nestedAccordion['DRAFTER'] && (
                <div className="p-4 bg-green-200 rounded-lg">
                  <DrafterDetails /> {/* Include DrafterDetails component */}
                </div>
              )}

              {/* Engineering Details */}
              <button
                onClick={() => toggleNestedAccordion('ENGINEERING')}
                className="w-full h-[40px] bg-yellow-500 text-white rounded-lg flex items-center justify-between px-4"
              >
                Engineering Details
                <svg
                  className={`w-4 h-4 transform ${nestedAccordion['ENGINEERING'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {nestedAccordion['ENGINEERING'] && (
                <div className="p-4 bg-yellow-200 rounded-lg">
                  <EngineeringDetails /> {/* Include EngineeringDetails component */}
                </div>
              )}

              {/* MEP Details */}
              <button
                onClick={() => toggleNestedAccordion('MEP')}
                className="w-full h-[40px] bg-blue-500 text-white rounded-lg flex items-center justify-between px-4"
              >
                MEP Details
                <svg
                  className={`w-4 h-4 transform ${nestedAccordion['MEP'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {nestedAccordion['MEP'] && (
                <div className="p-4 bg-blue-200 rounded-lg">
                  <MEPDetails /> {/* Include MEPDetails component */}
                </div>
              )}

              {/* Civil Details */}
              <button
                onClick={() => toggleNestedAccordion('CIVIL')}
                className="w-full h-[40px] bg-red-500 text-white rounded-lg flex items-center justify-between px-4"
              >
                Civil Details
                <svg
                  className={`w-4 h-4 transform ${nestedAccordion['CIVIL'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {nestedAccordion['CIVIL'] && (
                <div className="p-4 bg-red-200 rounded-lg">
                  <CivilDetails /> {/* Include CivilDetails component */}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
        <button
  onClick={handleSubmit}
  className="w-[100px] h-[50px] text-[18px] bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center"
>
  Submit
</button>

        </div>

        {/* Success Alert */}
        {showAlert && (
          <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg w-[250px] h-[50px] text-[18px] flex items-center justify-center">
          <i className="bi-check2 text-[25px] mr-2"></i>

  Submitted successfully!
</div>

        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
