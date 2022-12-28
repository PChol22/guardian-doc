import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import styles from './title.module.css';

const letters = [
  { letter: 'G', color: 'red' },
  { letter: 'U', color: 'orange' },
  { letter: 'A', color: 'green' },
  { letter: 'R', color: 'red' },
  { letter: 'D', color: 'green' },
  { letter: 'I', color: 'orange' },
  { letter: 'A', color: 'red' },
  { letter: 'N', color: 'green' },
];

export const Title = () => {
  const [lettersOn, setLettersOn] = useState(letters.map(() => false));
  const [seconds, setSeconds] = useState(lettersOn.length * 2);

  const onTitleHover = () => {
    if (seconds === lettersOn.length * 2) {
      for (let i = 0; i < lettersOn.length * 2; i++) {
        setTimeout(() => setSeconds(i + 1), i * 500);
      }
    }
  }

  useEffect(() => {
    setLettersOn(letters.map((_,i) => seconds > i  && seconds <= letters.length + i));
  }, [seconds, setLettersOn])

  return (
    <div className={styles['title-container']} onMouseOver={onTitleHover}>
      {letters.map(({ letter, color }, i) => (
        <div className={clsx(styles['letter-container'], lettersOn[i] === true && styles['on'])} key={i}>
          <div className={clsx(styles.letter, styles[color])}>
            <h3>{letter}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
