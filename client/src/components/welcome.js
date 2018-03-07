import React from 'react';
import classes from "../index.css"; 
import welcomeImage from "../assets/images/image1.jpg"



const welcomePage = () => (
  <body>
    <section className={classes.pagesection} clearfix="true">
    <div container="true">
      <div className={classes.intro}>
        <img className={classes.introimg}   src={welcomeImage}/>
        <div className={classes.introtext} >
          <h2 className="section-heading mb-4">
            <span className={classes.sectionheadingupper}>StockPile: Home Cooking</span>
            <span className={classes.sectionheadinglower}>Cooking Made EASY!!</span>
          </h2>
          <p className="mb-3">Every Dish starts with your locally sourced, hand picked ingredients. 
                              Once you try it, you'll never want to eat out again.
                              - we guarantee it!
          </p>
          <div className={classes.introbutton}>
              <a className="btn btn-primary btn-xl" href="/signup"  >SignUp</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={classes.cta}>
  <div container="true">
    <div className="row">
      <div className="col-xl-9 mx-auto">
        <div className={classes.ctainner}>
          <h2 className="section-heading mb-4">
            <span className={classes.sectionheadingupper}>Our Promise</span>
            <span className={classes.sectionheadinglower}>To You</span>
          </h2>
          <p className="mb-0">When you walk home, we are dedicated to providing you with friendly service, 
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
