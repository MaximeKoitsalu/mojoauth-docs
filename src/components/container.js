import React from "react"
import { Link } from "gatsby"

const Middle = () => {
  return (
    <main>
      {/*Hero section*/}
      <section className="py-72">
        <div className="hero grid-40-60">
          <div className="description">
            <h1 className="title">
              Getting started with the <span>MojoAuth</span>
            </h1>
            <div className="subtitle">
              <label>Objective</label>
              <p>
                Create a passwordless authetication system for any
                organization, where they can use our APIs to provide seamless
                auth experiences and reduce security risks for their customer.
              </p>
              <a
                href="https://codesandbox.io/s/friendly-elion-56smy?file=/index.html"
                target="_blank"
                className="btn btn-primary"
              >
                Try Out Now
              </a>
            </div>
          </div>
          <div className="vector">
            <img src="images/hero-vector.png" />
          </div>
        </div>
      </section>
      {/*Hero section*/}
      <section className="application-guide py-72">
        <div className="section-header">
          <h2>Application Guides</h2>
        </div>
        <div className="grid-25">
          <div className="card">
            <div className="icon yellow">
              <img src="images/sso.svg" />
            </div>
            <h3 className="title">Single Page App</h3>
            <ul>
              <li>
                <Link to="/guides/html-and-js/">
                  <img src="images/html5.svg" width={20} />
                  <span>HTML and JS</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/react/">
                  <img src="images/react.png" width={20} />
                  <span>React App</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="icon pink">
              <img src="images/web-apps.svg" />
            </div>
            <h3 className="title">Web Apps</h3>
             <ul>
              <li>
                <Link to="/guides/nodejs/">
                  <img src="images/node-dot-js.svg" width={20} />
                  <span>NodeJS</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/golang/">
                  <img src="images/go.svg" width={20} />
                  <span>Golang</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/java/">
                  <img src="images/java.png" width={20} />
                  <span>JAVA</span>
                </Link>
              </li>
              <li>
                <Link to="/guides/php/">
                  <img src="images/php.svg" width={20} />
                  <span>PHP</span>
                </Link>
              </li>
            </ul> 
          </div>

          <div className="card">
            <div className="icon blue">
              <img src="images/mobile-app.svg" />
            </div>
            <h3 className="title">Mobile Apps</h3>
             <ul>
              <li>
                <Link to="/guides/android/">
                  <img src="images/android.svg" width={20} />
                  <span>Android</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="icon pink">
              <img src="images/cms-app.svg" />
            </div>
            <h3 className="title">Integrations</h3>
             <ul>
              <li>
                <Link to="/integrations/bubble/">
                  <img src="images/bubble.png" width={20} />
                  <span>Bubble.io</span>
                </Link>
              </li>
              <li>
                <Link to="/integrations/webflow/">
                  <img src="images/webflow.png" width={20} />
                  <span>Webflow</span>
                </Link>
              </li>
              <li>
                <Link to="/integrations/wordpress/">
                  <img src="images/wordpress.png" width={20} />
                  <span>Wordpress</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Application Guides Section */}
      {/* Resources Section */}
      <section className="resources py-72">
        <div className="section-header">
          <h2>Comprehensive Resources</h2>
        </div>
        <div className="grid-50">
          <div className="card">
            <div className="icon blue-big">
              <img src="images/configuration.svg" />
            </div>
            <h3 className="title">Configuration & Branding Personalization</h3>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and type
              setting industry.
              </p> */}
            <div className="tag">Coming Soon</div>
          </div>
          <div className="card">
            <div className="icon pink-big">
              <img src="images/other-resources.svg" />
            </div>
            <h3 className="title">How To</h3>
            <ul>
              <li>
                <Link to="/resources/jwt-token/">
                  <img src="images/access-token.png" width={20} />
                  <span>Handle MojoAuth Token</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* SDK References Section */}
      <section className="sdk py-72">
        <div className="section-header">
          <h2>SDK References</h2>
        </div>
        <div className="grid-25">
          <div className="card">
            <Link to="/sdks/nodejs/">
            <div className="icon">
              <img src="images/node-dot-js.svg" />
            </div>
            <h3 className="title">NodeJS</h3>
            </Link>
          </div>
          <div className="card">
           <Link to="/sdks/golang/">
            <div className="icon">
              <img src="images/go.svg" />
            </div>
            <h3 className="title">
              <span>Golang</span>
            </h3>
             </Link>
          </div>
          <div className="card">
             <Link to="/sdks/java/">
            <div className="icon">
              <img src="images/java.svg" />
            </div>
            <h3 className="title">Java</h3>
            </Link>
          </div>
          <div className="card">
           <Link to="/sdks/android/">
            <div className="icon">
              <img src="images/android.svg" />
            </div>
            <h3 className="title">
              <span>Android</span>
            </h3>
             </Link>
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/python.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">Python</h3>
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/php.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">PHP</h3>
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/ruby.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">Ruby</h3>
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/visualstudio.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">Asp.net</h3>
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/ios.svg" />
            </div>
            <div className="tag">Coming Soon</div>
            <h3 className="title">IOS</h3>
          </div>
          
        </div>
      </section>
    </main>
  )
}

export default Middle
