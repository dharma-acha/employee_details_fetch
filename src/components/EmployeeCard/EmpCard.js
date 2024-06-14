import classes from "./EmpCard.module.css";
import img from "../../images/placeholder.jpg";
const EmpCard = (props) => {
  const employeeData = { ...props.empData };
  return (
    <div className={classes.card}>
      <div className={`${classes.details} ${classes.top}`}>
        <div className={`${classes.placeholders} ${classes.img}`}>
          <img src={img} alt="placeholder" />
        </div>
        <div className={classes.data}>
          <p className={classes.name}>{employeeData.empName}</p>
          <p className={classes.role}>{employeeData.role}</p>
        </div>
      </div>
      <div className={classes.details}>
        <p className={classes.placeholders}>EmpId:</p>
        <p className={classes.data}>{employeeData.empId}</p>
      </div>
      <div className={classes.details}>
        <p className={classes.placeholders}>DOJ:</p>
        <p className={classes.data}>{employeeData.DOJ}</p>
      </div>
      <div className={classes.details}>
        <p className={classes.placeholders}>Total Exp:</p>
        <p className={classes.data}>{employeeData.exp}</p>
      </div>
      <div className={classes.details}>
        <p className={classes.placeholders}>Work Location:</p>
        <p className={classes.data}>{employeeData.workLocation}</p>
      </div>
      <div className={classes.details}>
        <p className={classes.placeholders}>Technologies:</p>
        <p className={classes.data}>{employeeData.technologies}</p>
      </div>
      {/* <div className={classes.details}>
        <div className={classes.placeholders}>
          <p>EmpId:</p>
          <p>DOJ:</p>
          <p>Total Exp:</p>
          <p>Work Location:</p>
          <p>Technologies:</p>
        </div>
        <div className={classes.data}>
          <p>{employeeData.empId}</p>
          <p>{employeeData.DOJ}</p>
          <p>{employeeData.exp}</p>
          <p>{employeeData.workLocation}</p>
          <p>{employeeData.technologies}</p>
        </div>
      </div> */}
    </div>
  );
};

export default EmpCard;
