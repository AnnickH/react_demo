import ChartBar from './ChartBar';

const Chart = ({ expenses }) => {
  const months = [
    { label: 'jan', value: 0 },
    { label: 'fev', value: 0 },
    { label: 'mar', value: 0 },
    { label: 'avr', value: 0 },
    { label: 'mai', value: 0 },
    { label: 'jui', value: 0 },
    { label: 'jul', value: 0 },
    { label: 'aou', value: 0 },
    { label: 'sep', value: 0 },
    { label: 'oct', value: 0 },
    { label: 'nov', value: 0 },
    { label: 'dec', value: 0 },
  ];

  expenses.forEach((expense) => {
    const dateMonth = expense.date.getMonth();
    months[dateMonth].value += expense.amount;
  });

  const monthValues = months.map((month) => month.value);

  const max = Math.max(...monthValues);

  return (
    <div className="chart">
      {months.map((month) => {
        return (
          <ChartBar
            key={month.label}
            label={month.label}
            value={month.value}
            max={max}
          />
        );
      })}
    </div>
  );
};
export default Chart;
