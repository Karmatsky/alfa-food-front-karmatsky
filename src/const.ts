import styles from "./Components/LeftMenuItem/LeftButtonItem.module.css";
import classes from "./Components/FilterFoodItem/ButItem.module.css";

export class getChildOrder {
    width: number
    height: number
    text: string
    classEl: string
    constructor(buttonW: number, buttonH: number, buttonT: string, buttonCl: string) {
        this.width = buttonW
        this.height = buttonH
        this.text = buttonT
        this.classEl = buttonCl
    }
}

export const leftButtons = [
    {
        width: 265,
        height: 49,
        text: "Иванов Иван Петрович",
        classEl: [styles.orderButton, styles.red].join(" ")
    },
    {
        width: 265,
        height: 49,
        text: "Иванов Дмитрий Петрович",
        classEl: styles.orderButton
    },
    {
        width: 265,
        height: 49,
        text: "Иванова Яна Петровна",
        classEl: styles.orderButton
    }
]

export const upperMenuButtons = [
    {
        width: 124,
        height: 44,
        text: "Завтрак",
        classEl: [classes.orderButtonMenu, classes.redMenu].join(" ")
    },
    {
        width: 94,
        height: 44,
        text: "Обед",
        classEl: classes.orderButtonMenu
    },
    {
        width: 129,
        height: 44,
        text: "Полдник",
        classEl: classes.orderButtonMenu
    }
]