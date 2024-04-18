import * as React from "react";

import styles from "./card.module.scss";

export type ButtonType = "primary" | "danger" | null;

export function Card(props: {
    title?: string;
    money?: string;
    per?: string;
    payType?: string;
    cardOff?: string;
}) {
    return (
        <div className={styles["card"]}>
            <div className={styles['card-top']}>
                <span className={styles['card-title']}>{props.title}</span>
                <div className={styles['card-money']}>
                    {props.money}
                    <span>{props.per}</span>
                </div>
                <p className={styles['card-pay-type']}>
                    {props.payType}
                </p>
                <div className={styles['card-subscribe']}>
                    <button>激活</button>
                </div>
                <a className={styles['card-offer']}>
                    {props.cardOff}
                </a>
            </div>
            <div>
                <ul>
                    <li>Limited generations (~200 / month)</li>
                    <li>Limited generations (~200 / month)</li>
                    <li>Limited generations (~200 / month)</li>
                    <li>Limited generations (~200 / month)</li>
                </ul>
            </div>
        </div>
    );
}
