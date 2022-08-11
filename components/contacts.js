import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
import styles from '../styles/Contacts.module.css'
function Contacts(){
    return(
        <div className={styles.contactscontainer}>
            <div >
                <button><FaLocationArrow/></button>
                <button><FaMailBulk/></button>
                <button><FaPhone/></button>
            </div>
            
            <div> 
            <p>New York City</p> 
            <p> mangowi21@gmail.com</p> 
            <p>+1 (133) 2549- 139</p>
            </div>
        </div>

    );
}
export default Contacts;