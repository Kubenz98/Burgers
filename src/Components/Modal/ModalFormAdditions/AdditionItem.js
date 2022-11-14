import classes from "./AdditionItem.module.scss";
const AdditionItem = (props) => {
    
    return (
      <div className={classes.addition}>
      <input type="checkbox" id={props.additionData.id} onChange={props.onChange}/>
      <label htmlFor={props.additionData.id}>{props.additionData.name}</label>
    </div>
    )
  }

  export default AdditionItem;