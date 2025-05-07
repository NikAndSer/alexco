import Link from 'next/link';
import Logo from './logo.js';
import NavTabs from './navtabs.js';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
  return (

    // BOOTSTRAP NAVBAR FULL WIDTH
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-2 border-black">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand" href="/">
          <div className=" container logo d-none d-md-block">
            <Logo />
          </div>
        </Link>


        {/* LEAF PNG */}
        <Image className={styles.leafImage} src="/images/leaf.png" width={149} height={144} alt="leaf" />


        {/* NAVBAR TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* NAVBAR TABS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavTabs />
        </div>


      </div>
    </nav>


  );
};

export default Navbar;