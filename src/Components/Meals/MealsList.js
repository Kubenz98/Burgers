import classes from './MealsList.module.scss'
import MealItem from '../MealItem/MealItem'
const MealsList = () => {
    return (
        <ul className={classes.list}>
            <MealItem />
        </ul>
    )
    }

export default MealsList