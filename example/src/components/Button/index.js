import React from 'react';
import {FaPencilAlt} from 'react-icons/fa'

import { Container } from './style';


export default function Button({
    children, icon, iconinvert, secondary, disabled, small, large, icononly
}) {
  return (
   <Container
   iconinvert={iconinvert}
   secondary={secondary}
   disabled={disabled}
   small={small}
   large={large}
   icononly={icononly}
   >
       {children && children}
       {icon && <FaPencilAlt />}
   </Container>
  );
}
