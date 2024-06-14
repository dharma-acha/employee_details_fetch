import { useState } from "react";
import EmpCard from "../EmployeeCard/EmpCard";
import EmployeeList from "../Employees List/EmployeeList";
import classes from "./Content.module.css";

const DUMMY_EMP_DATA = [
  {
    empId: 3215643,
    empName: "Alex",
    role: "Associate",
    DOJ: "31/07/2019",
    exp: "2yrs",
    workLocation: "Hyderabad",
    technologies: "React-Js, HTML",
  },
  {
    empId:3215644 ,
    empName: "Steve",
    role: "Sr. Associate",
    DOJ: "16/04/2018",
    exp: "4yrs",
    workLocation: "Chennai",
    technologies: "Angular-Js, CSS",
  },
  {
    empId: 3215645,
    empName: "Harry",
    role: "PAT",
    DOJ: "3/07/2021",
    exp: "1yr",
    workLocation: "Mumbai",
    technologies: "Vue, JS",
  },
  {
    empId: 3215646,
    empName: "Terax",
    DOJ: "1/12/2020",
    role: "PAT",
    exp: "1yrs",
    workLocation: "Hyderabad",
    technologies: "HTML, Python",
  },
  {
    empId: 3215647,
    empName: "Hopper",
    DOJ: "14/05/2020",
    role: "Associate",
    exp: "2yrs",
    workLocation: "Kochi",
    technologies: "SQL, Node",
  },
  {
    empId: 3215648,
    empName: "Inosuke",
    DOJ: "17/06/2015",
    role: "Human Resources Manager",
    exp: "6yrs",
    workLocation: "Mumbai",
    technologies: "Management",
  },
  {
    empId: 3215649,
    empName: "Tom",
    DOJ: "12/08/2017",
    role: "Sr. Technician",
    exp: "4yrs",
    workLocation: "Mumbai",
    technologies: "OS, Windows",
  },
  {
    empId: 3215650,
    empName: "Sasuke",
    DOJ: "1/02/2016",
    role: "Team Lead",
    exp: "6yrs",
    workLocation: "Pune",
    technologies: "Game Development",
  },
  {
    empId: 3215651,
    empName: "Tanjiro kamado",
    DOJ: "17/01/2022",
    role: "Intern",
    exp: "<1yr",
    workLocation: "Mumbai",
    technologies: "Web Development",
  },
];
const Content = () => {
  const [empCard, setEmpCard] = useState(DUMMY_EMP_DATA[0]);

  const cardChangeHandler = (empData) => {
    console.log(empData);
    setEmpCard(empData);
  };
  return (
    <div className={classes.main}>
      <h2>Employee List</h2>
      <div className={classes.content}>
        <div className={classes.coldata}>
          <EmployeeList data={DUMMY_EMP_DATA} onEmpClick={cardChangeHandler} />
        </div>
        <div className={classes.col}>
          <EmpCard empData={empCard} />
        </div>
      </div>
    </div>
  );
};

export default Content;
