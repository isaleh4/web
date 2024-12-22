import React from 'react';

function Counter() {
  let count = 0;

  const increment = () => {
    count++;
    document.getElementById('countDisplay').innerText = count; 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 id="countDisplay">0</h1>
      <button onClick={increment} style={{ fontSize: '20px', padding: '10px' }}>
        زيادة
      </button>
    </div>
  );
}

export default Counter;
