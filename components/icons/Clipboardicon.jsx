import {ClipboardListIcon} from '@heroicons/react/solid'
import styles from '../../styles/IconStyle.module.css';

const ClipBoardIcon = (props) =>{

  return(
    <ClipboardListIcon className={styles.icon} {...props} />
  )
}

export default ClipBoardIcon;