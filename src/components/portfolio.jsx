import React from 'react'

//import stock

import sitamm1 from '../img/sitamm1.png'
import sitamm2 from '../img/sitamm2.png'
import sitamm3 from '../img/sitamm3.png'
import sitamm4 from '../img/sitamm4.png'

import pampas1 from '../img/pampas1.png'
import pampas2 from '../img/pampas2.png'
import pampas3 from '../img/pampas3.png'
import pampas4 from '../img/pampas4.png'

import cash3 from '../img/cash3.jpg'
import cash1 from '../img/cash1.jpg'
import cash2 from '../img/cash2.jpg'

import Hrsistem1 from '../img/Hrsistem1.png'
import Hrsistem2 from '../img/Hrsistem2.jpeg'
import Hrsistem3 from '../img/Hrsistem3.jpeg'

import gym1 from '../img/gym1.png'
import gym2 from '../img/gym2.png'
import gym3 from '../img/gym3.png'
import gym4 from '../img/gym4.png'

import game from '../img/game.png'
import game1 from '../img/game1.jpg'

import stock from '../img/image1.jpg'
import stock1 from '../img/image2.jpeg'
import stock2 from '../img/image3.png'
import stock3 from '../img/image4.jpg'
import stock4 from '../img/image5.png'

class Portfolio extends React.Component {
  render() {
    return (
      <section id='work' className='portfolio-mf sect-pt4 route'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='title-box text-center'>
                <h3 className='title-a'>Portfolio</h3>
                <p className='subtitle-a'>
                  some of my projects in which I have participated.
                </p>
                <div className='line-mf'></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='work-box'>
                <a href={sitamm1} data-lightbox='gallery-sitamm'>
                  <div className='work-img'>
                    <img src={sitamm1} alt='' className='img-fluid' />
                  </div>
                  <div className='work-content'>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <h2 className='w-title'>MERN project</h2>
                        <div className='w-more'>
                          <span className='w-ctegory'>
                            Development project of a MERN application with which
                            employees could have different benefits such as
                            credits.
                          </span>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='w-like'>
                          <span className='ion-ios-plus-outline'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={sitamm2}
                  data-lightbox='gallery-sitamm'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sitamm3}
                  data-lightbox='gallery-sitamm'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sitamm4}
                  data-lightbox='gallery-sitamm'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>

                <a href='https://admin.sitamm.com/login' target='_blank'>
                  <h6 className='col-sm-8'>- Production project.</h6>
                </a>

                <a href='https://github.com/jhonshua/sitamm' target='_blank'>
                  <h6 className='col-sm-8'>- Code github.</h6>
                </a>
                <br />
              </div>
            </div>

            <div className='col-md-4'>
              <div className='work-box'>
                <a href={pampas1} data-lightbox='gallery-pampas'>
                  <div className='work-img'>
                    <img src={pampas1} alt='' className='img-fluid' />
                  </div>
                  <div className='work-content'>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <h2 className='w-title'>MERN project</h2>
                        <div className='w-more'>
                          <span className='w-ctegory'>
                            Development project of a MERN application with which
                            employees can keep track of the differences in
                            incidents in the company's facilities and design of
                            the web page
                          </span>{' '}
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='w-like'>
                          <span className='ion-ios-plus-outline'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={pampas2}
                  data-lightbox='gallery-pampas'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pampas3}
                  data-lightbox='gallery-pampas'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={pampas4}
                  data-lightbox='gallery-pampas'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a href='http://128.199.6.217:81/auth/login' target='_blank'>
                  <h6 className='col-sm-8'>- Production project MERN.</h6>
                </a>
                <a href='https://grupopampas.com.mx/' target='_blank'>
                  <h6 className='col-sm-8'> - Production project WEB.</h6>
                </a>
                <br />
              </div>
            </div>

            <div className='col-md-4'>
              <div className='work-box'>
                <a href={cash1} data-lightbox='gallery-cash'>
                  <div className='work-img'>
                    <img src={cash1} alt='' className='img-fluid' />
                  </div>
                  <div className='work-content'>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <h2 className='w-title'>
                          React Js Project Demo presentation
                        </h2>
                        <div className='w-more'>
                          <span className='w-ctegory'>
                            React Js,Bootstrap,redux toolkit.
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='w-like'>
                          <span className='ion-ios-plus-outline'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={cash2}
                  data-lightbox='gallery-cash'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={cash3}
                  data-lightbox='gallery-cash'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='work-box'>
                <a href={Hrsistem1} data-lightbox='gallery-medlingos'>
                  <div className='work-img'>
                    <img src={Hrsistem1} alt='' className='img-fluid' />
                  </div>
                  <div className='work-content'>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <h2 className='w-title'>
                          Payroll and employee control project Laravel-PHP
                        </h2>
                        <div className='w-more'>
                          <span className='w-ctegory'>PHP Laravel</span>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='w-like'>
                          <span className='ion-ios-plus-outline'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={Hrsistem2}
                  data-lightbox='gallery-medlingos'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={Hrsistem3}
                  data-lightbox='gallery-medlingos'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href='http://v3.desarrollo-hrsystem.site/login'
                  target='_blank'>
                  <h6 className='col-sm-8'>-Production project MERN</h6>
                </a>
                <a
                  href='https://github.com/jhonshua/Poryecto-Hr-PHP'
                  target='_blank'>
                  <h6 className='col-sm-8'>- Code github.</h6>
                </a>
                <br />
              </div>
            </div>

            <div className='col-md-4'>
              <div className='work-box'>
                <a href={game} data-lightbox='gallery-game'>
                  <div className='work-img'>
                    <img src={game} alt='' className='img-fluid' />
                  </div>
                  <div className='work-content'>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <h2 className='w-title'>
                          Project in javascript creation of a 2d game
                        </h2>
                        <div className='w-more'>
                          <span className='w-ctegory'>Game phaser 4 </span>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='w-like'>
                          <span className='ion-ios-plus-outline'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={game1}
                  data-lightbox='gallery-game'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href='https://jhonshua.github.io/juego-jascript/'
                  target='_blank'>
                  <h6 className='col-sm-8'>-Production project MERN</h6>
                </a>
                <a
                  href='https://github.com/jhonshua/juego-jascript'
                  target='_blank'>
                  <h6 className='col-sm-8'>- Code github.</h6>
                </a>
                <br />
              </div>
            </div>

            <div className='col-md-4'>
              <div className='work-box'>
                <a href={gym1} data-lightbox='gallery-smth'>
                  <div className='work-img'>
                    <img src={gym1} alt='' className='img-fluid' />
                  </div>
                  <div className='work-content'>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <h2 className='w-title'> Web page</h2>
                        <div className='w-more'>
                          <span className='w-ctegory'>HTML and Js project</span>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='w-like'>
                          <span className='ion-ios-plus-outline'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={gym2}
                  data-lightbox='gallery-smth'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gym3}
                  data-lightbox='gallery-smth'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gym3}
                  data-lightbox='gallery-smth'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={gym4}
                  data-lightbox='gallery-smth'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href='https://jhonshua.github.io/Pagina-Comercial-Gym/'
                  target='_blank'>
                  <h6 className='col-sm-8'>- Production project MERN</h6>
                </a>
                <a
                  href='https://github.com/jhonshua/Pagina-Comercial-Gym'
                  target='_blank'>
                  <h6 className='col-sm-8'>- Code github.</h6>
                </a>
                <br />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='work-box'>
                <a href={stock} data-lightbox='gallery-mf'>
                  <div className='work-img'>
                    <img src={stock} alt='' className='img-fluid' />
                  </div>
                  <div className='work-content'>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <h2 className='w-title'>Electronic Engineering</h2>
                        <div className='w-more'>
                          <span className='w-ctegory'>
                            arduino project C++ and assembler languages
                          </span>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='w-like'>
                          <span className='ion-ios-plus-outline'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox='gallery-mf'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox='gallery-mf'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox='gallery-mf'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox='gallery-mf'
                  style={{ display: 'none' }}>
                  jsx-a11y/anchor-has-content warning
                </a>

                <a
                  href='https://www.tinkercad.com/things/fBD0Yd6A1xS?sharecode=Kl2YphV48lpOO3Ggt78QvGFdL44NoTtkxX6JTWJWxfc'
                  target='_blank'>
                  <h6 className='col-sm-8'>
                    - 2x16 lcd message with elapsed seconds count C++
                  </h6>
                </a>
                <a
                  href='https://www.tinkercad.com/things/3TI6225UrrN?sharecode=Wt_SpFRT2PfO_DU4c1TpiM67ave82jirp-pcjGySPaE'
                  target='_blank'>
                  <h6 className='col-sm-8'>- sonar distance meter C++</h6>
                </a>
                <a
                  href='https://www.tinkercad.com/things/kiyuj1rw0Qm?sharecode=B9kUZDTB_95BCO1di-kvsjiDFNFgdJaBg6NMWFtJtV8'
                  target='_blank'>
                  <h6 className='col-sm-8'>- c++ game</h6>
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
