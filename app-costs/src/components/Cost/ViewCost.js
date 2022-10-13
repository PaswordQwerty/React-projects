import Card from "../UI/Card";
import CostItem from "./CostItem";
import './ViewCost.css';

const ViewCost = (props) => {
    return (
    <Card className="costs">
        <CostItem 
          date={props.cost[0].date} 
          discription={props.cost[0].discription} 
          amount={props.cost[0].amount}
        />
        <CostItem 
          date={props.cost[1].date} 
          discription={props.cost[1].discription} 
          amount={props.cost[1].amount}
        />
        <CostItem 
          date={props.cost[2].date} 
          discription={props.cost[2].discription} 
          amount={props.cost[2].amount}
        />
    </Card>);
}

export default ViewCost;