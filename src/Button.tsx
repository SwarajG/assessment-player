import * as React from 'react';

export interface Props {
  text ?: string
}

export const Button = (props: Props) => {
  const { text } = props;
  return (
    <button>{text}</button>
  );
};
