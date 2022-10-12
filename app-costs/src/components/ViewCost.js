import CostItem from "./CostItem";
import './ViewCost.css';

function ViewCost(props){
    return (
    <div className="costs">
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
    </div>);
}

export default ViewCost;