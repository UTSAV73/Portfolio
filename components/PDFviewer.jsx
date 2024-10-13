import { useEffect, useRef } from 'react';

const usePdfEmbed = (pdfUrl) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const iframe = document.createElement('iframe');
        iframe.src = pdfUrl;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';

        // Append the iframe to the container
        container.appendChild(iframe);

        // Cleanup function to remove iframe on unmount
        return () => {
            container.removeChild(iframe);
        };
    }, [pdfUrl]);

    return containerRef;
};

export default usePdfEmbed;
