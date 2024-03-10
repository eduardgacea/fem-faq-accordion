import Separator from "../../ui/separator/Separator";
import styles from "./Question.module.css";

import { questions } from "../../data/questions.json";

type QuestionProps = {
    q: {
        id: number;
        question: string;
        answer: string;
    };
    activeQuestion: number | undefined;
    setActiveQuestion: React.Dispatch<React.SetStateAction<number | undefined>>;
};

function Question({ q, activeQuestion, setActiveQuestion }: QuestionProps) {
    const { id, question, answer } = q;

    const isActive = id === activeQuestion;

    const handleClick = () => (isActive ? setActiveQuestion(undefined) : setActiveQuestion(id));

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.question}>{question}</div>
                <div className={styles.icon} onClick={handleClick}>
                    <img src={`icon-${isActive ? "minus" : "plus"}.svg`} alt="expand icon" />
                </div>
            </div>
            {isActive && <div className={styles.answer}>{answer}</div>}
            {id !== questions.length && <Separator />}
        </div>
    );
}

export default Question;
