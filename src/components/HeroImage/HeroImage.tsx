import React from 'react';

import './HeroImage.css';

export interface HeroImageProps {
  prop?: string;
}

export function HeroImage({prop = 'default value'}: HeroImageProps) {
  return <div className='HeroImage'>HeroImage {prop}</div>;
}
