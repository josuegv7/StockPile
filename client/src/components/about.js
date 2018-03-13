import React from 'react';
import classes from "../index.css"; 
import aboutImage from "../assets/images/aboutimage.jpeg";
import frig from "../assets/images/frig.png";
import comp from "../assets/images/comp.png";
import cooking from "../assets/images/cooking.png"
import { Grid, Row, Col } from 'react-flexbox-grid';


const aboutPage = () => (
    <body>
    <section className={classes.aboutheading}>
        <img className= {classes.aboutheadingimg} src={aboutImage} alt=""/>
    </section>
    <section>
        <div className={classes.aboutheadingcontent}>
          <div className="row">
            <div>
              <div>
                <h2>
                  <span>Quick and Easy</span><br/>
                  <span>How It Works: 4 Steps</span>
                </h2>
                </div>
              </div>
            </div>
            <Row>
            <div className={classes.card}>
                    <img className={classes.cardimg} src={frig} alt="Avatar"/>
                        <div className={classes.cardcontainer}>
                            <h4><b>Step 1: Forage</b></h4> 
                        </div>
            </div>
            <div className={classes.card}>
                    <img className={classes.cardimg} src={comp} alt="Avatar"/>
                        <div className={classes.cardcontainer}>
                            <h4><b>Step 2: Search</b></h4> 
                        </div>
            </div>
            <div className={classes.card}>
                    <img className={classes.cardimg} src={cooking} alt="Avatar"/>
                        <div className={classes.cardcontainer}>
                            <h4><b>Step 3: Cook</b></h4> 
                        </div>
            </div>
            </Row>
          </div>
      
    </section>
  </body>
)
export default aboutPage;




