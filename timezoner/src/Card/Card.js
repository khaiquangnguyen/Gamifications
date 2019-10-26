import React from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import {GiMale, GiFemale} from 'react-icons/gi';
import { FlagIcon } from "react-flag-kit";

const propTypes = {
  thumbnail: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  isMale: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
};

const defaultProps = {

};

const Card = ({thumbnail, timeZone, name, country, isMale, role, rating, countryName}) => {
  const stars = (() => {
    const stars = [];
    for (let i = 0; i <= 50; i++) {
      const radius= `${Math.ceil(Math.random()+2)}px`;

      const divStyle = {
        top: `${Math.ceil(Math.random() * 100)}%`,
        left:`${Math.ceil(Math.random() * 100)}%`,
        width:radius,
        height: radius,
      };
      stars.push(<span key={i} className={styles.Star} style={divStyle}/>)

    }
    return stars;
  })();

  const timeOption = {
    timeZone:timeZone,
    hour: '2-digit',
    minute:'2-digit',
  };
  const DateOption = {
    timeZone:timeZone,
    weekday: 'long',
    day: '2-digit',
    month: '2-digit'
  };
  const getHourOptions = {
    timeZone:timeZone,
    hour: 'numeric',
    hour12: false,
  };
  const time  = new Date().toLocaleString("en-US", timeOption);
  const date  = new Date().toLocaleString("en-US", DateOption);
  const hour = new Date().toLocaleString("en-US", getHourOptions);
  console.log(hour);
  const style = (() => {
    if (6 <= hour && hour <= 18) return styles.Day;
    if (18 < hour && hour <= 24) return styles.Night;
    return styles.Midnight;
  })();
  return (
    <div className={style}>
      <div className={styles.Container}>
        {stars}
        <div className={styles.Header}>
          <div className={styles.Flag}>
            <FlagIcon code={country} size={20} />
          </div>
          <div className={styles.CountryName}>
            {countryName}
          </div>
        </div>
        <div className={styles.ThumbnailSection}>
          <img className={styles.Avatar} src={thumbnail} alt={name} />
          {/*<div className={styles.Gender}>*/}
          {/*  {isMale? <GiMale size='1.5rem' color='#537780'/> : <GiFemale size='1.5rem' color='#537780'/>}*/}
          {/*</div>*/}
          {/*<div className={styles.RoleType}>*/}
          {/*  {role}*/}
          {/*</div>*/}
        </div>
        <div className={styles.NameTimeContainer}>
        <div className={styles.Name}>
          {name}
        </div>
        <div className={styles.TimeZoneBox}>
          <span className={styles.Time}>{time} </span>
          <span className={styles.Date}> {date} </span>
        </div>
        </div>
        {/*/!*<div className={styles.TimeIllustration} />*!/*/}
      </div>
    </div>
      )
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;