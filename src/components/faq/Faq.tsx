import { useScreenWidth } from "../../hooks/useScreenWidth";

import Accordion from "../accordion/Accordion";

import styles from "./Faq.module.css";

function Faq() {
    const width = useScreenWidth();

    return (
        <>
            <div className={styles.container}>
                <img src={`/public/background-pattern-${width < 420 ? "mobile" : "desktop"}.svg`} alt="header" />
            </div>
            <Accordion />
        </>
    );
}

export default Faq;
