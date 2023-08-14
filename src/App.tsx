import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios, {AxiosRequestConfig} from 'axios';

function App() {
    // const url = "http://15.236.36.30/api/sql/swaygang/spark_indexer"; //result the same
    // const url = "http://localhost:29987/api/sql/swaygang/spark_indexer"; //result the same
    const url = "https://spark-indexer.spark-defi.com/api/sql/swaygang/spark_indexer";
    let fetchRequestOptions: RequestInit = {
        method: "POST",
        // mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        },
        body: "{\"query\":\"SELECT json_agg(t) FROM (SELECT * FROM swaygang_spark_indexer.orderentity WHERE status = 'Active' AND asset0 = '17e68049bb3cf21a85f00778fde367465bbd8263e8d4f8e47e533fe0df865658' AND asset1 = 'eaa756f320f175f0023a8c9fc2c9b7a03ce8d715f04ac49aba69d2b7d74e70b8') t;\"}",
    };

    const axiosRequestOptions: AxiosRequestConfig = {
    method: "post",
    url: "https://spark-indexer.spark-defi.com/api/sql/swaygang/spark_indexer",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        },
    data: "{\"query\":\"SELECT json_agg(t) FROM (SELECT * FROM swaygang_spark_indexer.orderentity WHERE status = 'Active' AND asset0 = 'eaa756f320f175f0023a8c9fc2c9b7a03ce8d715f04ac49aba69d2b7d74e70b8' AND asset1 = '17e68049bb3cf21a85f00778fde367465bbd8263e8d4f8e47e533fe0df865658') t;\"}",
  }

    useEffect(() => {
        // axios(axiosRequestOptions).catch(e => console.error(e));
         fetch(url, fetchRequestOptions).then((r) => r.json()).catch(e => console.error(e));
    })


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
