import React from 'react';
import '../components/about/About.css';
import Navbar from '../components/layout/Navbar';

function About() {

    let message = `Dear Diary is a highly technologically enhanced 
    \n Journalling application that feels what you're feeling and helps you maintain a positive mental state.`;

    return (
        
        <center>
            <Navbar />
        <section className='section-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h1 className='section-title text-3xl'>
                            The Team Behind Dear Diary
                        </h1>
                        <p className='mt-10'>{message}</p>
                    </div>


                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEsBFlwQZcD4w/profile-displayphoto-shrink_400_400/0/1649443308853?e=1675900800&v=beta&t=U1nU1KWxaQ1m_Z3Eb35bICqlMCLZ7gxIpA3-8csYHPw' className='team-img' alt='pic' />
                            <h3>Gaurav B.</h3>
                            <div className='team-info'>
                                <p>NUID: 002776005</p>
                                {/* <p>Gaurav is the best.</p> */}
                                {/* <p>Gaurav was responisble for the design and development of signup, signin and about page.</p> */}
                                <ul className='team-icon'>
                                    <li><a href='https://www.linkedin.com/in/gauravbhambhani/' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQGzshJavhxOrQ/profile-displayphoto-shrink_400_400/0/1627391405925?e=1675900800&v=beta&t=rJNhzoAiAzl3yDHdba50-OnTuKq7SnH6jBAbEno9SSs' className='team-img' alt='pic' />
                            <h3>Dhruv Patel</h3>
                            <div className='team-info'>
                                <p>NUID: 002928881</p>
                                {/* <p>Dhruv is the best.</p> */}

                                <ul className='team-icon'>
                                    <li><a href='https://www.linkedin.com/in/dhruv-patel-b385aa158/' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://media-exp1.licdn.com/dms/image/D4E03AQFxWBUBDXgiSQ/profile-displayphoto-shrink_400_400/0/1667334747741?e=1675900800&v=beta&t=rhyJ5Vzk8fczIZPgghuGr_L7r2NLdPk4XR-YN9xm48s' className='team-img' alt='pic' />
                            <h3>Anushka Mandloi</h3>
                            <div className='team-info'>
                                <p>NUID: 002XXXXXX</p>
                                {/* <p>Anushka is the best.</p> */}

                                <ul className='team-icon'>
                                    <li><a href='https://www.linkedin.com/in/anushkamandloi/' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFuDEdSgOJPBw/profile-displayphoto-shrink_400_400/0/1571248783675?e=1675900800&v=beta&t=QCsrWSguV4weAQaq37qVmJdMORpkbBsFGiMhekIXcLs' className='team-img' alt='pic' />
                            <h3>Jingyin Huang</h3>
                            <div className='team-info'>
                                <p>NUID: 001421242</p>
                                {/* <p>Jingyin is the best.</p> */}

                                <ul className='team-icon'>
                                    <li><a href='https://www.linkedin.com/in/jingyinghuang/' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </center>
    );
}

export default About