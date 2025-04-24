import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './header.module.css';
import Navbar from './navbar.js';
import Logo from './logo.js';
import Layout from './layout';

const { heroContent, heroWrapper, imageWrapper, overlay, logo } = styles;

export default () => {

    const { t } = useTranslation('common');

    return (
        <div className={heroWrapper}>
            <div className={imageWrapper}>
                <Image
                    priority
                    src="/images/hero2.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Hero"
                />
                
                <div className={overlay}></div>
            </div>

            <div className={heroContent}>
                {/* restaurant moto  */}
                <div className={logo}>
                <div className="container">
                    <Logo />
                </div>
                </div>
                <p>{t('Гармония кулинарии: Радующая вкусы по всему миру!')}</p>
            </div>
            {/* <Navbar /> */}
        </div>

    );
    };