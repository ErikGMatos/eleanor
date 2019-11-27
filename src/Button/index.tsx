import * as React from 'react';

import { Container } from './style';


interface IProps {
    children?: React.ReactChildren,
    icon?: string,
    iconinvert?: boolean,
    secondary?: boolean,
    disabled?: boolean,
    small?: boolean,
    large?: boolean,
    icononly?: boolean,
}

export default function Button({
    children, icon, iconinvert, secondary, disabled, small, large, icononly
}: IProps) {
  return (
   <Container
   iconinvert={iconinvert}
   secondary={secondary}
   disabled={disabled}
   small={small}
   large={large}
   icononly={icononly}
   >
       {children}
       {icon}
   </Container>
  );
}
