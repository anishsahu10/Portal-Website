import React, { useState } from "react";
// import "./App.css";  
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const BaseUrl= process.env.BaseUrl || "https://kvhrr.onrender.com"
const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Call the onSelect prop with the selected option
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : "Select an option"}
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ClientRecruitmentStats = () => {
  const options = ["Company", "Manager", "Location", "Recruiter"];

  const [selectedOption, setSelectedOption] = useState("");
  const [showGraph, setShowGraph] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowGraph(true);
  };

  const companyData = [
    { name: "Company A", value: 10 },
    { name: "Company B", value: 15 },
    { name: "Company C", value: 7 },
    { name: "Company D", value: 12 },
    { name: "Company E", value: 20 },
  ];

  const managerData = [
    { name: "Manager A", value: 30 },
    { name: "Manager B", value: 15 },
    { name: "Manager C", value: 10 },
    { name: "Manager D", value: 20 },
    { name: "Manager E", value: 25 },
  ];

  const locationData = [
    { name: "Location A", value: 15 },
    { name: "Location B", value: 20 },
    { name: "Location C", value: 10 },
    { name: "Location D", value: 5 },
    { name: "Location E", value: 12 },
  ];

  const recruiterData = [
    { name: "Recruiter A", value: 30 },
    { name: "Recruiter B", value: 20 },
    { name: "Recruiter C", value: 10 },
    { name: "Recruiter D", value: 15 },
    { name: "Recruiter E", value: 25 },
  ];

  return (
    <div>
      {/* <h1>My App</h1> */}
      <div className="graph">
        <h2>Recruitment Stats</h2>
        <BarChart
          width={500}
          height={300}
          data={companyData}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      {showGraph && (
        <div className="graph">
          {selectedOption === "Company" && (
            <div>
              <h2>Company Stats</h2>
              <BarChart
                width={500}
                height={300}
                data={companyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
              </BarChart>
            </div>
          )}
          {selectedOption === "Manager" && (
            <div>
              <h2>Manager Stats</h2>
              <BarChart
                width={500}
                height={300}
                data={managerData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
              </BarChart>
            </div>
          )}
          {selectedOption === "Location" && (
            <div>
              <h2>Location Stats</h2>
              <BarChart
                width={500}
                height={300}
                data={locationData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
              </BarChart>
            </div>
          )}
          {selectedOption === "Recruiter" && (
            <div>
              <h2>Recruiter Stats</h2>
              <BarChart
                width={500}
                height={300}
                data={recruiterData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
              </BarChart>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
 
export default ClientRecruitmentStats