import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';
import 'react-tooltip/dist/react-tooltip.css';

const today = new Date();

function HeatMap() {
  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -100)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${value.count}`,
          };
        }}
        showWeekdayLabels={true}
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      <a data-tooltip-id="my-tooltip"> ◕‿‿◕ </a>
      <Tooltip id="my-tooltip" content="Hello world!" events={['hover']} />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default HeatMap;
