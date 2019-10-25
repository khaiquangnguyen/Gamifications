import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Card from './Card/Card';
import { GiConsoleController } from 'react-icons/gi';

function App() {
  return (
    <div className={styles.Container}>
      <Card
        thumbnail='https://semantic-ui.com/images/avatar/large/joe.jpg'
        isMale={true}
        name='Khoi Le'
        role={<GiConsoleController size='2rem'/>}
        timeZone='Asia/Bangkok'
        key='Khoi Le'
      />

      <Card
        thumbnail='https://semantic-ui.com/images/avatar/large/chris.jpg'
        isMale={true}
        name='Khai Nguyen'
        role={<GiConsoleController size='2rem'/>}
        timeZone='America/Los_Angeles'
        key='Khai Nguyen'
      />
      <Card
        thumbnail='https://semantic-ui.com/images/avatar/large/ade.jpg'
        isMale={false}
        name='Hang Ha'
        role={<GiConsoleController size='2rem'/>}
        timeZone='Europe/Zurich'
        key='Hang Ha'
      />

    </div>
  );
}

export default App;
