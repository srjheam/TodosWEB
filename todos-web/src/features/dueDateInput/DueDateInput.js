import React from "react";

function DueDateInput({ dueDate, onChange }) {
  return (
    <>
      <input type='datetime-local' name='dueDate' value={dueDate} onChange={e => onChange(e.target.value)} />
    </>
  );
}

export default DueDateInput;
