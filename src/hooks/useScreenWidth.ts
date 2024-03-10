import { useEffect, useState } from "react";

const getViewortWidth = () => (window.visualViewport ? window.visualViewport.width : 0);

export function useScreenWidth() {
    const [width, setWidth] = useState(() => getViewortWidth());

    useEffect(() => {
        function handleResize() {
            setWidth(() => getViewortWidth());
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}
