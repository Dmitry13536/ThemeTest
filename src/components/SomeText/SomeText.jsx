import React from "react";
import styles from './SomeText.module.scss';

function SomeText(){
    
    return(
        <div>
            <p className={styles.mytext1}>Shine</p>
            <p className={styles.mytext2}>S h a k e</p>
        </div>
    )
}

export default SomeText;