/* eslint-disable react/prop-types */

import clsx from "clsx";
import { VARIANT_CONFIG } from "./typography.const";

const Typography = ({ variant, children, className, ...rest }) => {
  const Element = VARIANT_CONFIG[variant].element || 'p';
  const classes = VARIANT_CONFIG[variant].classes || '';
  
  return (
    <Element {...rest} className={clsx(classes, className)}>{children}</Element>
  )
}


export { Typography };