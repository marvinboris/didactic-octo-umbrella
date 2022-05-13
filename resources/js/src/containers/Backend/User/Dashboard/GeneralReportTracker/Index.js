import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const getPath = (x, y, width, height) => (`
  M${x} ${y + height}
  V${y + 15}
  Q${x} ${y} ${x + width / 2} ${y}
  Q${x + width} ${y} ${x + width} ${y + 15}
  V${y + height}
  H${x}
  Z
  `);

const PillBar = (props) => {
  const {
    fill, fillOpacity, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} fillOpacity={fillOpacity} />;
};

export default class GeneralWorkReportTracker extends PureComponent {
  state = {
    focusBar: null
  }

  onMouseMove = state => {
    if (state.isTooltipActive) this.setState({ focusBar: state.activeTooltipIndex });
    else this.setState({ focusBar: null });
  }

  render() {
    const { data, cms } = this.props;
    const { focusBar } = this.state;

    return (
      <ResponsiveContainer>
        <BarChart data={data} barGap={16} onMouseMove={this.onMouseMove}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar barSize={30} dataKey={cms.rejected} stackId="a" fill="#5A657D">
            {data.map((entry, index) => <Cell key={JSON.stringify(entry)} fill='#5A657D' fillOpacity={focusBar === index ? 1 : 0.2} />)}
          </Bar>
          <Bar barSize={30} dataKey={cms.approved} stackId="a" fill="#6DA62C" shape={<PillBar />}>
            {data.map((entry, index) => <Cell key={JSON.stringify(entry)} fill='#6DA62C' fillOpacity={focusBar === index ? 1 : 0.2} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
