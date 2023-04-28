

import styles from "@/styles/components/SideBar.module.scss"
import { Button } from "./Button"
import { DisplayRPM } from "./DisplayRPM"
import { DisplayGeneral } from "./DisplayGeneral"

export function SideBar(){


    return(
        <>
            <div className={styles.container}>
                <Button name="Set Point" colorBtn="blueBtn" />

                <DisplayRPM rpm="300"/>
                <DisplayGeneral message="sistema operando dentro do padrao" />
                <Button name="Manutenção" colorBtn="blueBtn" />
                <Button name="Histórico de manutenção" colorBtn="blueBtn" />
                <Button name="STOP"  colorBtn="redBtn" />
                <Button name="START" colorBtn="greenBtn" />
            </div>
        </>
    )
}