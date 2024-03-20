import { useState, forwardRef } from 'react';
import images from '../../assets/images';

function Image({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState();

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img onError={handleError} ref={ref} src={fallback || src} alt={alt} {...props}></img>;
}

export default forwardRef(Image);
