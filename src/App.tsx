import React from 'react';
const style = {
  app: " w-4/5 text-center bg-pink-200 h-screen",
  h1: "text-red-500",
}


function App() {
  return (
    <div className={style.app}>
      <h1 className={style.h1}>Hello Tailwind!</h1>
    </div>
  );
}

export default App;
