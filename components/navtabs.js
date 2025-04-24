import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const NavTabs = () => {
  const { t } = useTranslation('common');

  const user = false;
  return (
    <ul className="navbar-nav nav-pills ms-auto">


      {/* DELIVERY */}
      <li className="nav-item">
        <Link className="nav-link active" href="/delivery">
          {t('nav.delivery')}
        </Link>
      </li>


      {/* RESERVATION */}
      <li className="nav-item">
        <Link className="nav-link" href="/reservation">
          {t('nav.reservation')}
        </Link>
      </li>


      {/* MENU */}
      <li className="nav-item">
        <Link className="nav-link" href="/menu">
          {t('nav.menu')}
        </Link>
      </li>


      {/* CONTACTS */}
      <li className="nav-item">
        <Link className="nav-link" href="/contacts">
          {t('nav.contacts')}
        </Link>
      </li>


      {/* DROP SHIPPING */}
      <li className="nav-item">
        <Link className="nav-link" href="/dropshipping">
          {t('nav.dropshipping')}
        </Link>
      </li>


      {/* CART */}
      <li className="nav-item">
        <Link className="nav-link" href="/cart">
          {/* BOOTSTRAP CART ICON */}
          <i class="bi bi-cart-fill pe-2 text-light"></i>
          {t('nav.cart')}
        </Link>
      </li>

      {/* Login or Orders */}
      <li className="nav-item">
      {!user ? (
          <Link className="nav-link" href="/login">
          {t('nav.login')}
        </Link>
        ) : (
          <Link className="nav-link" href="/orders">
          {t('nav.orders')}
        </Link>
        )}
      </li>


    </ul>
  );
}

export default NavTabs;