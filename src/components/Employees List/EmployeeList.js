import classes from "./EmployeeList.module.css";

const EmployeeList = (props) => {
  return (
    <div className={classes["row-container"]}>
      {props.data.map((item) => {
        return (
          <div
            key={item.empId}
            className={classes.row}
            onClick={() => props.onEmpClick(item)}
          >
            Name: {item.empName} ({item.empId})
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
