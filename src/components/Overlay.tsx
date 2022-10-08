import React, { forwardRef } from 'react';

const Overlay = forwardRef((ref: any) => (
    <div
        ref={ref}
        onScroll={(event) => {
            const target = event.target as HTMLElement;
            console.log(target)
        }}
        className="scroll">
        <div className="slide">
            0°
        </div>
        <div className="slide">
            90°
        </div>
        <div className="slide">
            180°
        </div>
        <div className="slide">
            270°
        </div>
        <span className="caption" ref={ref}>
            0°
        </span>
    </div>
))

export default Overlay;