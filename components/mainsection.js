import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Contacts from './contacts';
import styles from './mainsection.module.css';


const MainSection = () => {

  return (
    // 1. Main section
    <div className="main-section border-top border-2 border-black pb-5">

      {/*Mint leaf PNG */}
      <Image className={styles.mintImage} src="/images/mint.png" width={125} height={120} alt="mint" />

      {/* #1 Container HOT DEALS + 6 CARDS OF MENU  */}
      <div className="container-fluid text-center mt-3">
        {/* One Row in Two Columns */}
        <div className="row md-12 p-1">



          {/* #1 Top Col Hot Deals */}
          <div className="col-md-6 col-lg-6 hotdeals">
            <h3 className="hotdealsH3">Hot Deals</h3>
            <div className="card mb-4 mt-3">
              <Link href="/recipes">
                <Image src="/images/stuffedPepper.png"
                  width={500}
                  height={500}
                  layout="responsive"
                  className="card-img-top" alt="..." />
              </Link>
            </div>
            <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
          </div>




          {/* #2 Top Col 6 Menu Cards in 2 columns */}
          <div className="col mt-md-0 mt-5">
            <h3>Menu</h3>

            {/* #1 Row 3 Col 3 Cards */}
            <div className="row p-1 mt-md-3 mt-4">

              {/* #1.1 Col */}
              <div className="col">
                <h5 className="card-title bg-transparent">Food</h5>
                <div className="card ">
                  <Link href="/recipes">
                    <Image src="/images/stuffedPepper.png"
                      width={700}
                      height={700}
                      layout="responsive"
                      className="card-img-top" alt="..." />
                  </Link>
                </div>
                <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
              </div>

              {/* #1.2 Col */}
              <div className="col">
                <h5 className="card-title bg-transparent">Food</h5>
                <div className="card">
                  <Link href="/recipes">
                    <Image src="/images/stuffedPepper.png"
                      width={700}
                      height={700}
                      layout="responsive"
                      className="card-img-top" alt="..." />
                  </Link>
                </div>
                <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
              </div>

              {/* 1.3 Col */}
              <div className="col">
                <h5 className="card-title bg-transparent">Food</h5>
                <div className="card">
                  <Link href="/recipes">
                    <Image src="/images/stuffedPepper.png"
                      width={700}
                      height={700}
                      layout="responsive"
                      className="card-img-top" alt="..." />
                  </Link>
                </div>
                <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
              </div>

            </div>


            {/* #2 Row 3 Col 3 Cards */}
            <div className="row mt-4 mb-5">

              {/* #2.1 Col */}
              <div className="col">

                <h5 className="card-title bg-transparent">Food</h5>
                <div className="card">
                  <Link href="/recipes">
                    <Image src="/images/stuffedPepper.png"
                      width={700}
                      height={700}
                      layout="responsive"
                      className="card-img-top" alt="..." />
                  </Link>
                </div>
                <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
              </div>

              {/* #2.2 Col */}
              <div className="col">
                <h5 className="card-title bg-transparent">Food</h5>
                <div className="card">
                  <Link href="/recipes">
                    <Image src="/images/stuffedPepper.png"
                      width={700}
                      height={700}
                      layout="responsive"
                      className="card-img-top" alt="..." />
                  </Link>
                </div>
                <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
              </div>

              {/* #2.3 Col */}
              <div className="col">
                <h5 className="card-title bg-transparent">Food</h5>
                <div className="card">
                  <Link href="/recipes">
                    <Image src="/images/stuffedPepper.png"
                      width={700}
                      height={700}
                      layout="responsive"
                      className="card-img-top" alt="..." />
                  </Link>
                </div>
                <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
              </div>

            </div>
          </div>
        </div>
      </div>






      {/* 2 Container last 6 menu cards at bottom */}
      <div className="container-fluid text-center mt-md-0 mt-5">

        {/* Only 1 Row 6 Columns 6 Cards */}
        <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6 p-2 mt-md-0 mt- g-4">

          {/* #1 Column */}
          <div className="col">
            <h5 className="card-title bg-transparent">Food</h5>
            <div className="card">
              <Link href="/recipes">
                <Image src="/images/stuffedPepper.png"
                  width={700}
                  height={700}
                  layout="responsive"
                  className="card-img-top" alt="..." />
              </Link>
            </div>
            <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
          </div>

          {/* #2 Column */}
          <div className="col">
            <h5 className="card-title bg-transparent">Food</h5>
            <div className="card">
              <Link href="/recipes">
                <Image src="/images/stuffedPepper.png"
                  width={700}
                  height={700}
                  layout="responsive"
                  className="card-img-top shadow-xl" alt="..." />
              </Link>

            </div>
            <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
          </div>

          {/* #3 Column */}
          <div className="col">
            <h5 className="card-title bg-transparent">Food</h5>
            <div className="card">
              <Link href="/recipes">
                <Image src="/images/stuffedPepper.png"
                  width={700}
                  height={700}
                  layout="responsive"
                  className="card-img-top" alt="..." />
              </Link>
            </div>
            <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
          </div>

          {/* #4 Column */}
          <div className="col">
            <h5 className="card-title bg-transparent">Food</h5>
            <div className="card">
              <Link href="/recipes">
                <Image src="/images/stuffedPepper.png"
                  width={700}
                  height={700}
                  layout="responsive"
                  className="card-img-top" alt="..." />
              </Link>
            </div>
            <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
          </div>

          {/* #5 Column */}
          <div className="col">
            <h5 className="card-title bg-transparent">Food</h5>
            <div className="card">
              <Link href="/recipes">
                <Image src="/images/stuffedPepper.png"
                  width={700}
                  height={700}
                  layout="responsive"
                  className="card-img-top" alt="..." />
              </Link>
            </div>
            <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
          </div>

          {/* #6 Column */}
          <div className="col">
            <h5 className="card-title bg-transparent">Food</h5>
            <div className="card">
              <Link href="/recipes">
                <Image src="/images/stuffedPepper.png"
                  width={700}
                  height={700}
                  layout="responsive"
                  className="card-img-top" alt="..." />
              </Link>
            </div>
            <p className="home-menu text-start d-none d-lg-block">Dive into a bowl of vibrant, ruby-red borscht, a beloved Russian soup. </p>
          </div>

        </div>
      </div>



      {/* Decorative Images Across the Component */}
      <Image className={styles.tomatoImage} src="/images/tomato.png" width={293} height={270} alt="tomato" />
      <Image className={styles.pepperImage} src="/images/pepper.png" width={141} height={148} alt="pepper" />
      <Image className={styles.wholeTomatoImage} src="/images/wholeTomato.png" width={200} height={200} alt="wholeTomatoImage" />
      <Image className={styles.lemonImage} src="/images/lemon.png" width={225} height={200} alt="lemon" />


      {/* Conctacts Component */}
      <Contacts />

    </div>

  );
};

export default MainSection;
