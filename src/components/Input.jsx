import React from 'react';
import { InputText } from 'primereact/inputtext';

const Input = () => {
  return (
    <div>
      <span className="p-float-label">
        <InputText id="input" />
        <label htmlFor="input">Input</label>
      </span>
    </div>
  );
};

export default Input;