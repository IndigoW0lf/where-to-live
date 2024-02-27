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

// Constants for monetary and percentage categories
const monetaryCategories = [
  'Median value of owner-occupied housing units',
  'Median selected monthly owner costs with a mortgage',
  'Median gross rent',
  'Per capita income in past 12 months (2022)',
  'Annual 10th percentile wage',
  'Annual median wage',
  'Annual 90th percentile wage',
];

const percentageCategories = [
  'Population change from 2020 to 2022',
  'People under 5 years old',
  'People under 18 years old',
  'People 65 years and over',
  'Women population',
  'White population alone',
  'Native Hawaiian and Other Pacific Islander population alone',
  'Population of Two or More Races',
  'Hispanic or Latino population',
  "Bachelor's degree or higher",
  'In civilian labor force, total population age 16+ years',
  'In civilian labor force, female population age 16+ years',
  'Persons in poverty',
];

function DataVisualization() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((data) => {
        const numericData = data.map((item) => {
          let value = item.Value.replace(/[^0-9.-]+/g, ''); // Remove $ and % for numeric parsing
          value = parseFloat(value);
          return { ...item, Value: value };
        });
        setData(numericData);
        const uniqueCategories = [
          ...new Set(numericData.map((item) => item.Category)),
        ].map((category) => ({ value: category, label: category }));
        setCategories(uniqueCategories);
        if (uniqueCategories.length)
          setSelectedCategory(uniqueCategories[0].value);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const formatTooltipValue = (value, name, props) => {
    const category = props.payload.Category;
    if (monetaryCategories.includes(category)) {
      return `$${value.toLocaleString()}`;
    } else if (percentageCategories.includes(category)) {
      return `${value}%`;
    }
    return value.toLocaleString();
  };

  const filteredData = selectedCategory
    ? data.filter((item) => item.Category === selectedCategory)
    : [];

  return (
    <div>
      <Select
        options={categories}
        onChange={(option) => setSelectedCategory(option.value)}
        value={categories.find((option) => option.value === selectedCategory)}
      />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={filteredData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="City" />
          <YAxis />
          <Tooltip formatter={formatTooltipValue} />
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
