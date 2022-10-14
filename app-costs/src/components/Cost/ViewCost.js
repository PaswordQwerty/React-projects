import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import './ViewCost.css';
import { useState } from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram"

const ViewCost = (props) => {

  const [selectedYear, setSelectedYear] = useState('2022');

  const yearChangeHandler = (year) =>{
    setSelectedYear(year);
  }

  const filteredCosts = props.cost.filter(cost =>{
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card >
    </div>
  );
}

export default ViewCost;