import ViewCost from "./components/Cost/ViewCost";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Холодильник',
    amount: 120.8
  },
  {
    id: 'c2',
    date: new Date(2022, 11, 12),
    description: 'Компуктер',
    amount: 1254.72
  },
  {
    id: 'c3',
    date: new Date(2022, 10, 6),
    description: 'Свитер',
    amount: 51.3
  }
];

const App = () => {

  const [costs, setCost] = useState(INITIAL_COST);

  const addCostHandler = (cost) =>{
    setCost(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div className="App">
        <NewCost addCost={addCostHandler} />
        <ViewCost cost={costs} />
    </div>
  );
}

export default App;
