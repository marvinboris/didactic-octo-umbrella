import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#70A334', '#0590DE'];

export default class AvailableBalanceTracker extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={100}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
