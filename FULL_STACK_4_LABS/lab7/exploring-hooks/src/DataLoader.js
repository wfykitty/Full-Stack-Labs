import React from "react";
//either by Fetch or Axios
import useFetch from './useFetch';
import useAxios from './useAxios';

export default function DataLoader(props) {
const data = useFetch("https://jsonplaceholder.typicode.com/users");
// const data = useAxios('https://jsonplaceholder.typicode.com/users');

return (
      <div>
        <ul>
          {data.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
 
