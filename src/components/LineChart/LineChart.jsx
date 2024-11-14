import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {
    const studentMarksData = [
        { id: 1, name: 'Alice', math: 78, physics: 85, chemistry: 80 },
        { id: 2, name: 'Bob', math: 85, physics: 89, chemistry: 82 },
        { id: 3, name: 'Charlie', math: 76, physics: 81, chemistry: 78 },
        { id: 4, name: 'David', math: 92, physics: 95, chemistry: 94 },
        { id: 5, name: 'Eva', math: 68, physics: 70, chemistry: 72 },
        { id: 6, name: 'Frank', math: 80, physics: 84, chemistry: 83 },
        { id: 7, name: 'Grace', math: 90, physics: 93, chemistry: 91 },
        { id: 8, name: 'Hannah', math: 72, physics: 75, chemistry: 78 },
        { id: 9, name: 'Ian', math: 65, physics: 68, chemistry: 70 },
        { id: 10, name: 'Jane', math: 88, physics: 92, chemistry: 90 },
      ];
      
      
  return (
    <div>
          <LChart  width={800} height={600} data={studentMarksData}>
              <Line dataKey="math" stroke="#8884d8" ></Line>
              <Line dataKey="physics" stroke="red"></Line>
              <Line dataKey="chemistry" stroke="blue"></Line>

        </LChart>
    </div>
  )
}

export default LineChart
