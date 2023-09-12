import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'CPU Usage',
            data: [],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      cpuData: [], // Placeholder for dynamic data
    };
  }

  // Simulate fetching dynamic data
  fetchData() {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const randomValue = Math.random() * 100;
      this.setState(prevState => ({
        chartData: {
          ...prevState.chartData,
          labels: [...prevState.chartData.labels, time],
          datasets: [
            {
              ...prevState.chartData.datasets[0],
              data: [...prevState.chartData.datasets[0].data, randomValue],
            },
          ],
        },
        cpuData: [...prevState.cpuData, randomValue],
      }));
    }, 1000);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>System Dashboard</h1>
        <Line
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
          }}
        />
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>CPU Usage</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cpuData.map((value, index) => (
              <tr key={index}>
                <td>{this.state.chartData.labels[index]}</td>
                <td>{value.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;