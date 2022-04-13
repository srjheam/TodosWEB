import React from 'react';

function TitleInput({ title, handleTitleChange, handleKeyDown }) {
  return (
    <>
      <input type='text' name='title' value={title} onChange={e => handleTitleChange(e.target.value)} onKeyDown={handleKeyDown} />
    </>
  );
}

export default TitleInput;
