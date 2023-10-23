import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default Filter;