import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const getDeviceConfig = (width) => {
    if (width < 600 ){
        return 'mobile';
    }
    else {
        return 'large';
    };
};

const useBreakpoint = () => {
        const [brkPnt, setBrkpnt] = useState(() => getDeviceConfig(window.innerWidth));

        useEffect(() => {
            const calcInnerWidth = throttle(function() {
                setBrkpnt(getDeviceConfig(window.innerWidth))
            }, 200);
            window.addEventListener('resize', calcInnerWidth);
            return() => window.removeEventListener('resize', calcInnerWidth);
        }, []);
    
    return brkPnt;
    
    
            
}

export default useBreakpoint