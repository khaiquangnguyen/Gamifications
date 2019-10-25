import React from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import {GiMale, GiFemale} from 'react-icons/gi';

const propTypes = {
  thumbnail: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  isMale: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

const defaultProps = {

};

const Card = ({thumbnail, timeZone, name, country, isMale, role, flag, rating}) => {
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
  const time  = new Date().toLocaleString("en-US", timeOption);
  const date  = new Date().toLocaleString("en-US", DateOption);
  console.log(timeZone,time, date);
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Flag}/>
        <div className={styles.Rating}/>
      </div>
      <div className={styles.ThumbnailSection}>
        <img className={styles.Avatar} src={thumbnail} alt={name} />
        <div className={styles.Gender}>
          {isMale? <GiMale size='2rem'/> : <GiFemale size='2rem'/>}
        </div>
        <div className={styles.RoleType}>
          {role}
        </div>
        </div>
      <div className={styles.Name}>
        {name}
      </div>
      <div className={styles.TimeZoneBox}>
        <span>{time} </span>
        <span> {date} </span>
      </div>
      <div className={styles.TimeIllustration} />
    </div>)
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;