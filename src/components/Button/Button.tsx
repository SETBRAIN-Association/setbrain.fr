import React from 'react';
import './button.scss';

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
    <button type='button' className={'button ' + type} {...props}>
      <i className={'fi ' + icon + ' icon'}></i> {label}
    </button>
  );
};
