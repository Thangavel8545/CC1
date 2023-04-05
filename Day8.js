import React, { useState, useEffect } from 'react';

function Day8() {
  const [message, setMessage] = useState("Hello dear one, Learning React...?");

  useEffect(() => {
    console.log('use effect hook called');
    const timeoutId = setTimeout(() => {
      setMessage("Great... This is time to learn about HOOKS");
    }, 6000);

    return () => {
      console.log('use effect cleanup');
      clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default Day8;