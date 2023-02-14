import React, {useEffect} from 'react';
import Header from './components/Header';
import {logo} from "./assets";
import { FirebaseDB } from './db/db';

const style = {
  app: "text-center",
  app__h1: "text-red-500",
}

const db = new FirebaseDB();

function App() {
  useEffect (() => {
    db.getProducts();
  }, [])

  return (
    <div className={style.app}>
      <Header logo={logo} />
      <h1 className={style.app__h1}>Hello Tailwind!</h1>
    </div>
  );
}

export default App;
