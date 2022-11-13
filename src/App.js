import logo from './logo.svg';
import './App.css';
import ExpenceItem from './components/ExpenceItem';

function App() {
  const item =[
    {
      id:1,
      date:new Date(2021 ,2 ,28),
      title:"frist",
      price:33
    },
    {
      id:2,
      date:new Date(2022 ,2 ,28),
      title:"two",
      price:337
    }
  ]
  return (
    <div className="App">
      <ExpenceItem props={item}/>
    </div>
  );
}

export default App;
