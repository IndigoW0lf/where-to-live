import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const CityDemographicsPieChart = ({ cityData }) => {
  const COLORS = ['#ffb5a7', '#b8c0a2', '#fde2e4', '#e2ece9'];
  const demographicsData = [
    { name: 'White population', value: cityData['White Population alone'] },
    {
      name: 'Native Hawaiian and Pacific Islander',
      value:
        cityData['Native Hawaiian and Other Pacific Islander Population alone'],
    },
    {
      name: 'Two or More Races',
      value: cityData['Population of Two or More Races'],
    },
    {
      name: 'Hispanic or Latino',
      value: cityData['Hispanic or Latino Population'],
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={demographicsData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={67}
          fill="#8884d8"
          label
        >
          {demographicsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

const DemographicsPieCharts = ({ data }) => {
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((jsonData) => setCitiesData(jsonData))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div style={{ backgroundColor: '#7b8472', padding: '20px' }}>
      <h2
        style={{ textAlign: 'center', marginBottom: '18px', color: '#eae5e0' }}
      >
        City Demographics Overview
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
      >
        {/* Legend with only border */}
        <div
          style={{
            width: '15%',
            textAlign: 'left',
            padding: '10px',
            border: '2px solid #eae5e0',
            borderRadius: '10px',
            color: '#eae5e0',
          }}
        >
          <h3 style={{ margin: '0 0 10px 0' }}>Legend</h3>
          <p>
            <span style={{ color: '#ffb5a7' }}>■ White</span>
          </p>
          <p>
            <span style={{ color: '#b8c0a2' }}>
              ■ Native Hawaiian and Pacific Islander
            </span>
          </p>
          <p>
            <span style={{ color: '#fde2e4' }}>■ Two or More Races</span>
          </p>
          <p>
            <span style={{ color: '#e2ece9' }}>■ Hispanic or Latino</span>
          </p>
        </div>
        {/* Pie Charts */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '68%',
          }}
        >
          {citiesData.map((cityData) => (
            <div
              key={cityData.City}
              style={{ width: '48%', padding: '8px', boxSizing: 'border-box' }}
            >
              <h3 style={{ textAlign: 'center', color: '#eae5e0' }}>
                {cityData.City}
              </h3>
              <CityDemographicsPieChart cityData={cityData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemographicsPieCharts;
