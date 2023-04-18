import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Chart from '../Chart/Chart';

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredItems = items.filter(
    (item) => item.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onFilterChange={filterChangeHandler}
      />
      <Chart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
