import { questions } from "../../data/questions.json";
import { useState } from "react";

import Question from "../question/Question";

import styles from "./Accordion.module.css";

function Accordion() {
    const [activeQuestion, setActiveQuestion] = useState<number | undefined>(1);

    return (
        <main className={styles.container} role="main">
            <div className={styles.titleContainer} role="heading">
                <img src="icon-star.svg" alt="star icon" />
                <h1 className={styles.title}>FAQs</h1>
            </div>
            <ul className={styles.questions}>
                {questions.map(q => (
                    <Question key={q.id} q={q} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} />
                ))}
            </ul>
        </main>
    );
}

export default Accordion;
