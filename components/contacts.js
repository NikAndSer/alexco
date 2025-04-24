
import { useTranslation } from 'next-i18next';
import styles from './contacts.module.css';
import Logo from './logo';

const Contacts = () => {
    const { t } = useTranslation('common');

    return (


        <div className={styles.contacts}>
            <h2 className='text-center'>{t('Location & Contacts')}</h2>
            <div className="container mt-5">
                <div className="row g-5">




                    {/* MAP */}
                    <div className="col-md-6">
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.885753111399!2d107.08139070523411!3d10.334659941912063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756ff5924e04cf%3A0xf1be9458b9a75d3b!2zMTMwIFBoYW4gQ2h1IFRyaW5oLCBQaMaw4budbmcgMiwgVGjDoG5oIHBo4buRIFbFqW5nIFThuqd1LCBCw6AgUuG7i2EgLSBWxaluZyBUw6B1LCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1693113155689!5m2!1sen!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>




                    {/* CONTACTS */}
                    <div className="col-md-6">
                        <div className={styles.contactsWrapper}>


                            <Logo />
                            <div className="container ps-0 mt-4">


                                {/* ADDRESS */}
                                <div className="row">
                                    <div className="col d-flex align-items-center">
                                        <i className="bi bi-geo-alt-fill text-warning pe-2" style={{ fontSize: 22 }}></i>
                                        <p className="bg mb-0">{t('Адрес: Vung Tau 130 Phan Chu Trinh')}</p>
                                    </div>
                                </div>


                                {/* PHONE */}
                                <div className="row mt-2">
                                    <div className="col d-flex align-items-center">
                                        <i className="bi bi-phone-fill text-warning pe-2" style={{ fontSize: 22 }}></i>
                                        <p className="bg mb-0">{t('Телефон: +7 (495) 555-55-55')}</p>
                                    </div>
                                </div>


                                {/* EMAIL */}
                                <div className="row mt-2">
                                    <div className="col d-flex align-items-center">
                                        <i className="bi bi-envelope-fill text-warning pe-2" style={{ fontSize: 22 }}></i>
                                        <p className="bg mb-0">{t('Email:food@alexrestaurant.com')}</p>
                                    </div>
                                </div>


                                {/* WORKING HOURS */}
                                <div className="row mt-2">
                                    <div className="col d-flex align-items-baseline">
                                        <i className="bi bi-emoji-smile-fill text-warning pe-2" style={{ fontSize: 22 }}></i>
                                        <p className="bg mb-0">{t('We warmly welcome orders from 12:00 PM to 9:00 PM daily. For banquet reservations, we kindly request advance notice to ensure a delightful dining experience.')}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contacts;


