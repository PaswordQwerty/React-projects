import ConstItem from "./components/ConstItem";

function App() {

  const cost = [
    {
      data: new Date(2022, 2, 12),
      discription: 'Холодильник',
      amount: 120.8
    },
    {
      data: new Date(2021, 11, 12),
      discription: 'Компуктер',
      amount: 1254.72
    },
    {
      data: new Date(2022, 5, 12),
      discription: 'Свитер',
      amount: 51.3
    }
  ];

  return (
    <div className="App">
        <h1>Изучение React</h1>
        <ConstItem 
          data={cost[0].data} 
          discription={cost[0].discription} 
          amount={cost[0].amount}>
        </ConstItem>
        <ConstItem 
          data={cost[1].data} 
          discription={cost[1].discription} 
          amount={cost[1].amount}>
        </ConstItem>
        <ConstItem 
          data={cost[2].data} 
          discription={cost[2].discription} 
          amount={cost[2].amount}>
        </ConstItem>
    </div>
  );
}

export default App;
