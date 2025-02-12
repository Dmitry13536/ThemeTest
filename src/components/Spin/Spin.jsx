import React from 'react';
import { useSelector } from 'react-redux';
import Lsvg from '../../Star 4.svg';
import dsvg from '../../Star5.svg';
import styles from './spin.module.scss';

function Spin(){
    const theme = useSelector(state=> state.theme.isDark);

    return(
        <div className={styles.star}>
        {theme ?  
        
            <div>
            <img src={Lsvg} alt="noup" />
            </div>
        :
            <div>
            <img src={dsvg} alt="noup" />
            </div>
        }
        </div>
    )
    
}

export default Spin;
