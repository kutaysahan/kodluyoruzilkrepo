import React from 'react'
import styles from './styles.module.css';

export const Button = (props) => {
  return (
    <div>
      {
        props.type === 'link' ? 
        <a href="#">
          <button className={`${styles.btn} ${styles.link}`} {...props}> {props.text} </button>
        </a> :
          <button className={`${styles.btn} ${getType(props.type)}`} {...props}> {props.text} </button>
      }
    </div>
  )
}

const getType = (type) => {
  if (type === 'primary') {
    return styles.primary;
  } else if (type === 'default') {
    return styles.default;
  } else if (type === 'dashed') {
    return styles.dashed;
  } else if (type === 'text') {
    return styles.text;
  } else if (type === "link") {
    return styles.link;
  }
}
