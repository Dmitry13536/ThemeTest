import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import styles from './ThemeSwithc.module.scss'; // Убедитесь, что стили импортированы правильно
import { toggleTheme } from '../../features/theme';

function ThemeSwitch() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.isDark);

    useEffect(
        ()=>{
            if(!theme){
            document.body.classList.add('dark')}
            else{document.body.classList.remove('dark')}
        },[theme]
    )

    return (
        <button onClick={()=> dispatch(toggleTheme())} className={styles.mybutton}>
            <div className={`${styles.mybutton__background} ${theme?'': styles.dark}`}>
                <div className={`${styles.mybutton__circle} ${theme?'': styles.dark}`}></div>
            </div>
        </button>
    );
}

export default ThemeSwitch;

