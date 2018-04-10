import React from 'react';
import css from "../welcome.css";

const welcomePage = () => (
<div>
  <section className={css.slider}>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <div className={css.block}>
                      <div className="slider-text-area">
                          <div className={css.slider_text}>
                              <h2 className={css.slider_h2}>StockPile: Home Cooking<br/></h2>
                              <h3 className={css.sub_slider_text}>Cooking Made EASY!!</h3>
                              <h4 className={css.slider_p}>Every Dish starts with your locally sourced, hand picked ingredients.<br/>
                                                          Once you try it, you'll never want to eat out again.<br/>

                              </h4>
                              <button type="button" className={css.edit_button_1} green darken-3 center-align><a href="/signin">Sign In</a></button>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section className={css.testimonial}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className={css.block}>
                              <div className={css.testimonial_area}>
                                  <div className={css.tm_header}>
                                      <h2>Our Promise</h2>
                                      <h3>To You</h3>
                                      <div className={css.tm_text}>
                                        <p>When you walk home, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, an excellent meal made with the highest quality ingredients. You will be satisfied!</p>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  </section>

</div>
);
export default welcomePage;
