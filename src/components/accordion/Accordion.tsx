import { questions } from "../../data/questions.json";
import { useState } from "react";

import Question from "../question/Question";

import styles from "./Accordion.module.css";

function Accordion() {
    const [activeQuestion, setActiveQuestion] = useState<number | undefined>();

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src="icon-star.svg" />
                <h1 className={styles.title}>FAQs</h1>
            </div>
            <div className={styles.questions}>
                {questions.map(q => (
                    <Question key={q.id} q={q} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} />
                ))}
            </div>
        </div>
    );
}

export default Accordion;
