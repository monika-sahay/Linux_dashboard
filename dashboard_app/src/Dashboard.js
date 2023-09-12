import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {
                labels: [],
                datasets : [
                    {
                        label: 'CPU Usage',
                        data : [],
                        backgroundColor: 'rgba(75,192,192,0.5)',
                        borderColor: 'rgba(75,192,192,0.5)',
                        borderWidth: 2,
                        pointRadius: 0,
                    },
                ],
            },
            cpuData :[],
        };
    }
    // simulate fetching dynamic data
    fetchData(){
        setInterval (() =>{
            const time = new Date().toLocaleTimeString();
            
            
        })
    }

}