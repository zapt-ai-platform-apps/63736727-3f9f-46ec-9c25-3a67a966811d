import React from 'react';

export function FormInput({ label, id, type = 'text', value, onChange, required = false, textarea = false }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1" htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className="box-border w-full p-2 border border-gray-300 rounded"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="box-border w-full p-2 border border-gray-300 rounded"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}