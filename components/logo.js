import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './logo.module.css';

const Logo = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.logo}>
            <Image 
            src="/images/logo.png"
            height={72}
            width={144}
            alt="Alex Logo"  
            />
        </div>
    ); 
};

export default Logo;