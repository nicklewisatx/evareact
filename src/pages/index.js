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
                    <section>
                    <div class="inner">
                    <h2 id="content">Included in this gift:</h2>
                    <ul>
                        <li>A starter site built on some crazy tech</li>
                        <li>Getting you connected to this site (ssh keys, git accounts... hacker stuff...)</li>
                        <li>Several hours of consultation and training with Uncle Nicklepickle on making this site your own</li>
                        <li>5 years of domain hosting</li>
                        <li>5 years of infrastructure hosting</li>
                        <li>An onging support package based on love</li>
                    </ul>
                    <bold>Disclaimer: Learning how to <em>code</em> not included.</bold>
                    </div>
                    </section>
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
                </div>

            </Layout>
        )
    }
}

export default HomeIndex