import ViewCost from "./components/Cost/ViewCost";

const App = () => {

  const cost = [
    {
      date: new Date(2022, 2, 12),
      discription: 'Холодильник',
      amount: 120.8
    },
    {
      date: new Date(2021, 11, 12),
      discription: 'Компуктер',
      amount: 1254.72
    },
    {
      date: new Date(1997, 10, 6),
      discription: 'Свитер',
      amount: 51.3
    }
  ];

  return (
    <div className="App">
        <h1>Изучение React</h1>
        <ViewCost cost={cost} />
    </div>
  );
}

export default App;
