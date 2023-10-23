import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <input
      className={styles.filterInput}
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Filter;