import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { ScrollToTop } from '../../utils';

const ScrollTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
        ScrollToTop();
    }, [pathname]);
    return <>{props.children}</>;
}
export default ScrollTop;