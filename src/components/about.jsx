import React from 'react'
import html from '../img/skill-icon/3basicas.png'
import react from '../img/skill-icon/react.png'
import php from '../img/skill-icon/php1.png'
import mongose from '../img/skill-icon/mongo.png'
import sql from '../img/skill-icon/mysql.png'
import bootstrap from '../img/skill-icon/bootstrap.png'
import Expo from '../img/skill-icon/expo 2.png'
import Laravel from '../img/skill-icon/laravel.png'
import pdf from '../img/skill-icon/pdf-download.png'

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      skills: [
        {
          id: 'HTML5_skill',
          content: 'HTML5',
          porcentage: '80%',
          value: '90',
          imagen: html,
        },
        {
          id: 'ReactJS_skill',
          content: 'ReactJS',
          porcentage: '80%',
          value: '80',
          imagen: react,
        },
        {
          id: 'Expo',
          content: 'Expo',
          porcentage: '85%',
          value: '85',
          imagen: Expo,
        },
        {
          id: 'Bootstrap',
          content: 'Bootstrap',
          porcentage: '80%',
          value: '80',
          imagen: bootstrap,
        },
        {
          id: 'PHP_skill',
          content: 'PHP',
          porcentage: '70%',
          value: '70',
          imagen: php,
        },
        {
          id: 'Laravel',
          content: 'Laravel',
          porcentage: '80%',
          value: '80',
          imagen: Laravel,
        },
        {
          id: 'Mongoose',
          content: 'Mongoose',
          porcentage: '75%',
          value: '75',
          imagen: mongose,
        },
        {
          id: 'SQL',
          content: 'SQL',
          porcentage: '75%',
          value: '75',
          imagen: sql,
        },
      ],
      about_me: [
        {
          id: 'first-p-about',
          content:
            "I'm an electronic engineer with 1 year of experience as a full-stack developer. I am proficient in React JS, Expo, Express JS, PHP, Laravel, Photoshop, Figma, Unity, and Phaser. I am also an enthusiast of water sports, music, motorcycles, and nature.",
        },
        {
          id: 'second-p-about',
          content:
            'As a full-stack developer, I have experience in front-end and back-end development. I am able to build websites and mobile apps from scratch, as well as integrate them with databases and third-party services. I am also an expert in using different programming languages and frameworks, including React JS, Expo, Express JS, PHP, Laravel, Photoshop, Figma, Unity, and Phaser. I am a disciplined and creative programmer with a strong desire to learn and grow. I am always looking for new ways to improve my skills and knowledge. I am also very motivated and I am always willing to work hard to achieve my goals.',
        },
        {
          id: 'third-p-about',
          content:
            "I'm looking for a position in a company where I can use my skills and experience to create innovative products and services. I am confident that I can be a valuable asset to your team and I am eager to contribute to your success.",
        },
      ],
    }
  }

  render() {
    return (
      <section id='about' className='about-mf sect-pt4 route '>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='box-shadow-full'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='row'>
                      <div
                        className='col-sm-6 col-md-5'
                        style={{ margin: '0 auto' }}>
                        <div
                          className='about-img'
                          style={{ textAlign: 'justify' }}>
                          <img
                            className='img-fluid rounded b-shadow-a'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='skill-mf'>
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>
                              {skill.content}
                              <img
                                style={{ maxWidth: '90px', margin: '10px' }}
                                src={skill.imagen}
                                alt='no found'
                              />
                            </span>{' '}
                            <span className='pull-right'>
                              {skill.porcentage}
                            </span>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin='0'
                                aria-valuemax='100'></div>
                            </div>
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='about-me pt-4 pt-md-0'>
                      <div className='title-box-2'>
                        <h5 className='title-left'>About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className='lead' key={content.id}>
                            {content.content}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <h6>download my resume </h6>
                  <a
                    href='https://drive.google.com/uc?export=download&id=1EFKxV-diV8KCi_o1EvcS73PFwQsIjZBi'
                    download='resume.pdf'>
                    {' '}
                    <img
                      src={pdf}
                      style={{ maxWidth: '50px', margin: '10px' }}
                      alt='no found'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
