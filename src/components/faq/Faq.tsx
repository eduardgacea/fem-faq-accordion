import { useScreenWidth } from "../../hooks/useScreenWidth";

import Accordion from "../accordion/Accordion";

import styles from "./Faq.module.css";

function Faq() {
    const width = useScreenWidth();

    return (
        <>
            <header className={styles.container} role="banner">
                <img src={`background-pattern-${width < 420 ? "mobile" : "desktop"}.svg`} alt="header" />
            </header>
            <Accordion />
        </>
    );
}

export default Faq;
