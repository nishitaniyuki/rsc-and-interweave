'use client';

import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function LogLink(props: Props) {
  const { children, ...rest } = props;
  const handleClick: React.MouseEventHandler<HTMLAnchorElement>  = (e) => {
    e.preventDefault();
    console.log('this is hijacked by LogLink');
  };

  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
