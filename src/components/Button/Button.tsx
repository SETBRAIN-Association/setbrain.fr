import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'delete';
  icon: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'primary',
  label,
  icon = 'fi-ss-interactive',
  ...props
}: ButtonProps) => {
  return (
    <button type='button' className={styles['button'] + ' ' + styles[type]} {...props}>
      <i className={styles['fi ' + icon + ' icon']}></i> {label}
    </button>
  );
};
