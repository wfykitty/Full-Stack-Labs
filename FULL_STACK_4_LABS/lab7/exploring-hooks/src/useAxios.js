import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';

export default function useAxios(url) {
    const [data, setData] = useState([]);
    async function getData() {
        const response = axios.get(url);
        const data = await response.then(res => {return res.data});
        setData(data);
    }

    useEffect(() => { getData() }, 
    []);

    return data;
    }