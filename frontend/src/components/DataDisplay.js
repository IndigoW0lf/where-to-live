import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Select from 'react-select';

function DataVisualization() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // Extract categories from data
        const uniqueCategories = [
          ...new Set(data.map((item) => item.Category)),
        ];
        setCategories(
          uniqueCategories.map((category) => ({
            value: category,
            label: category,
          }))
        );
        setSelectedCategory(uniqueCategories[0]); // Set default category
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  // Filter data based on the selected category
  const filteredData = data
    .filter((item) => item.Category === selectedCategory)
    .map((item) => ({
      name: item.City,
      value: item.Population,
    }));

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };

  return (
    <div>
      <Select options={categories} onChange={handleCategoryChange} />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={600}
          height={300}
          data={filteredData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataVisualization;