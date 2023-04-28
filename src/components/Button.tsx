import { useState, useEffect } from 'react';
import firebase from '../firebase';
import styles from "@/styles/components/Button.module.scss";


type ButtonProps =  {
    name: string;
    colorBtn: "whiteBtn" | "blueBtn" | "greenBtn" | "redBtn" | "grayBtn";
   
}

export function Button({name, colorBtn}: ButtonProps){
    const [ledValue, setLedValue] = useState('');

    useEffect(() => {
      const ledRef = firebase.ref('LED');
      ledRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setLedValue(data);
      });
    }, []);
  
    function handleLedToggle(): void {
        const ledRef = firebase.ref('LED');
        const newValue = ledValue === 'OFF' ? 'ON' : 'OFF';
        ledRef.set(newValue);
      };
    return (
        <div className={colorBtn === "whiteBtn" ? styles.whiteBtn : colorBtn === "blueBtn" ? styles.blueBtn : colorBtn === "greenBtn" ? styles.greenBtn : colorBtn === "redBtn" ? styles.redBtn : styles.grayBtn } onClick={handleLedToggle}>
            <span>{name.toLocaleUpperCase()}</span>
        </div>
    )
}