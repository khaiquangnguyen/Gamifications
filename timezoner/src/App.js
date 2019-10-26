import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Card from './Card/Card';
import { GiConsoleController } from 'react-icons/gi';
import HangAvatar from './Hang_avatar.jpg';
import KhaiAvatar from './Khai_avatar.jpg'
import KhoiAvatar from './Khoi_avatar.JPG';
function App() {
  return (
    <div className={styles.Container}>
      <Card
        thumbnail={KhoiAvatar}
        isMale={true}
        name='Khoi Le'
        role={<GiConsoleController size='1.5rem' color='#537780'/>}
        timeZone='Asia/Bangkok'
        key='Khoi Le'
        country='VN'
        countryName='Viet Nam'
      />

      <Card
        thumbnail={KhaiAvatar}
        isMale={true}
        name='Khai Nguyen'
        role={<GiConsoleController size='1.5rem' color='#537780'/>}
        timeZone='America/Los_Angeles'
        key='Khai Nguyen'
        country='US'
        countryName = 'United States'

      />
      <Card
        thumbnail={HangAvatar}
        isMale={false}
        name='Hang Ha'
        role={<GiConsoleController size='1.5rem' color='#537780'/>}
        timeZone='Europe/Zurich'
        key='Hang Ha'
        country='GB-ENG'
        countryName = 'England'
      />

    </div>
  );
}

export default App;
