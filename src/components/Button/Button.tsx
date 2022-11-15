import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'delete';
  icon: string;
  label: string;
  enabled?: boolean,
  tooltip?: string,
  href?: string,
  onClick?: () => void;
}

export const Button = ({
  type = 'primary',
  label,
  enabled = true,
  tooltip,
  href = 'https://setbrain.fr',
  icon = 'fi-ss-interactive',
  ...props
}: ButtonProps) => {

  const buttonClick = function() {
    window.open(href);
  };

  return (
    <button onClick={buttonClick} type='button' className={styles['button'] + ' ' + styles[type]} disabled={!enabled} title={tooltip} {...props}>
      <i className={styles['icon']} style={{WebkitMaskImage: 'url(\'/icons/' + icon + '.svg\')'}}></i> {label}
    </button>
  );
};
