import { mount } from 'marketing/MarketingApp';
import React, { useRef , useEffect } from 'react';

// this pattern should work with minimal effort for Angular , React and Vue
export default () => {
  const ref = useRef( null );

  useEffect( () => {
    mount( ref.current );
  });
  return <div ref={ ref } />;
}
