import { useEffect, useState } from "react";
import MainCard from "./Components/MainCard";
import Header from "./Components/Header";
export default function App() {
  const [data, setData] = useState([]);

  const func = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const response = await data.json();
    setData(response.results);
  };
  // console.log(data) ;
  useEffect(() => {
    func();
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="main-container" >
        {data.map((obj, index) => {
          return <MainCard key={index} info={obj}></MainCard>;
        })}
      </div>
    </div>
  );
}
