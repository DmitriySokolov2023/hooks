import React, {useRef} from 'react';
import useHover from "../hooks/useHover";

const Hover = () => {
    const ref = useRef<HTMLHeadingElement>(null)
    const isHovering = useHover(ref)
    console.log(isHovering)
    return (
        <div ref={ref} style={{width:'300px', height:'300px', backgroundColor:'red'}}>
            
        </div>
    );
};

export default Hover;