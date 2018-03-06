import React from 'react';
import classes from "../index.css"; 
import welcomeImage from "../assets/images/image1.jpg"



const welcomePage = () => (
    <section className={classes.pagesection} clearfix>
    <div container>
      <div className={classes.intro}>
        <img className={classes.introimg}  img-fluid mb-3 mb-lg-0 rounded src={welcomeImage}/>
        <div className={classes.introtext} left-0 text-center bg-faded p-5 rounded>
          <h2 className="section-heading mb-4">
            <span className={classes.sectionheadingupper}>StockPile: Home Cooking</span>
            <span className={classes.sectionheadinglower}>Cooking Made EASY!!</span>
          </h2>
          <p className="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
          </p>
          <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" href="/signup"  >SignUp</a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  );

  export default welcomePage;



//   <section className="page-section clearfix">
//   <div className="container">
//     <div className="intro">
//       <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt="">
//       <div className="intro-text left-0 text-center bg-faded p-5 rounded">
//         <h2 className="section-heading mb-4">
//           <span className="section-heading-upper">StockPile: Home Cooking</span>
//           <span className="section-heading-lower">Cooking Made EASY!!</span>
//         </h2>
//         <p className="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
//         </p>
//         <div className="intro-button mx-auto">
//           <a className="btn btn-primary btn-xl" href="#">Sign Up Now</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>