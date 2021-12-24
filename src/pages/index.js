import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Eva Worrel"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>See styleguide</h3>
                                <p>Here you can see the basic building blocks for building pages.</p>
                            </header>
                            <Link to="/elements" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Changes deploy automatically</h3>
                                <p>But you will need to use git!</p>
                            </header>
                            <Link to="https://github.com" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Built on ReactJs and Gatsby</h3>
                                <p>Because they are cool!</p>
                            </header>
                            <Link to="https://reactjs.org" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Hosted On Netlify</h3>
                                <p>Because we know what we are doing...</p>
                            </header>
                            <Link to="https://netlify.com" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>This is just a starter design</h3>
                                <p>Maybe you like a different one?</p>
                            </header>
                            <Link to="https://www.gatsbyjs.com/starters/#Portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Also... if you want just a basic html site...</h3>
                                <p>We can set that up too!</p>
                            </header>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Don't worry though, you have time and help.</h2>
                            </header>
                            <p>Included in this gift is domain/site hosting for the next 5 years and some help getting things moving!</p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex