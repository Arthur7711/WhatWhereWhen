import React from "react";
import styles from "./Answers.module.css";

export default function Answers({ item }) {
  return (
    <div className={styles.answers}>
      {item.answers.map((el, i) => (
        <div key={i}>
          <p>{el}</p>
        </div>
      ))}
    </div>
  );
}