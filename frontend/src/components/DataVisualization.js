import React, { useEffect, useState } from 'react';
import Select from 'react-select';
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

function DataVisualization() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const categoryOptions = Array.from(
          new Set(data.map((item) => item.Category))
        ).map((category) => ({ value: category, label: category }));
        setCategories(categoryOptions);
        if (categoryOptions.length > 0) {
          setSelectedCategory(categoryOptions[0]);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const filteredData = selectedCategory
    ? data.filter((item) => item.Category === selectedCategory.value)
    : [];

  return (
    <div>
      <Select
        options={categories}
        onChange={setSelectedCategory}
        value={selectedCategory}
      />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={filteredData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="City" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataVisualization;