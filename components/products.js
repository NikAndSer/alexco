import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const productsGrid = () => {

  return (
    <div>
      <div className='container'>
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
  )
}

export default productsGrid