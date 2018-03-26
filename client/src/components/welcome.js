import React from 'react';
import classes from "../index.css"; 
import welcomeImage from "../assets/images/image1.jpg"



const welcomePage = () => (
  <body>
    <section className={classes.pagesection} clearfix="true">
    <div>
      <div className={classes.intro}>
        <img className={classes.introimg}   src={welcomeImage} alt="NO IAMGE"/>
        <div className={classes.introtext} >
          <h2>
            <span className={classes.sectionheadingupper}>StockPile: Home Cooking</span>
            <span className={classes.sectionheadinglower}>Cooking Made EASY!!</span>
          </h2>
          <p>Every Dish starts with your locally sourced, hand picked ingredients. 
                              Once you try it, you'll never want to eat out again.
                              - we guarantee it!
          </p>
          <div className={classes.introbutton}>
              <a href="/signup">SignUp</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={classes.cta}>
  <div>
    <div>
      <div>
        <div className={classes.ctainner}>
          <h2>
            <span className={classes.sectionheadingupper}>Our Promise</span>
            <span className={classes.sectionheadinglower}>To You</span>
          </h2>
          <p>When you walk home, we are dedicated to providing you with friendly service, 
                              a welcoming atmosphere, and above all else, an excellent meal made with the 
                              highest quality ingredients. You will be satisfied!</p>
        </div>
      </div>
    </div>
  </div>
  </section>
</body>
);
export default welcomePage;
