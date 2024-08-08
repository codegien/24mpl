import {IdentificationIcon} from '@heroicons/react/solid'
import styles from '../../styles/IconStyle.module.css';

const IdIcon = (props) =>{

  return(
    <IdentificationIcon className={styles.icon} {...props} />
  )
}

export default IdIcon;