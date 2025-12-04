'use client';

import { ReactNode } from 'react';

// third party
import { BrowserView, MobileView } from 'react-device-detect';
import SimpleBar from 'simplebar-react';

interface SimpleBarScrollProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// ==============================|| SIMPLE BAR SCROLL ||============================== //

export default function SimpleBarScroll({ children, className, style, ...other }: SimpleBarScrollProps) {
  return (
    <>
      <BrowserView style={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
        <SimpleBar
          clickOnTrack={false}
          style={{ maxHeight: '100%', ...style }}
          className={className}
          data-simplebar-direction="ltr"
          {...other}
        >
          {children}
        </SimpleBar>
      </BrowserView>

      <MobileView>
        <div style={{ overflowX: 'auto', ...style }} className={className} {...other}>
          {children}
        </div>
      </MobileView>
    </>
  );
}
