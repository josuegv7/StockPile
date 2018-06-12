import React from "react";
import css from "../style/welcome.css";

const welcomePage = () => (
<div>
  <section className={css.headerwrap}>
    <div className="container">
      <div className="row">
          <div className="col-lg-6">
              <div className="img-overlay"></div>
              <h1 className="sp-layer slider-text-big">
              <span className="highlight-texts">StockPile: Home Cooking</span>
              </h1>
              <h3>Cooking Made EASY!!</h3>
              <h4>
              Every Dish starts with your locally sourced, hand picked
              ingredients.<br/>
              Once you try it, you'll never want to eat out again.
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section className={css.promise}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={css.block}>
              <div className={css.testimonial_area}>
                <div className={css.tm_header}>
                  <h2>Our Promise</h2>
                  <div className={css.tm_text}>
                    <p>
                      When you walk home, we are dedicated to providing you with
                      friendly service, a welcoming atmosphere, and above all else,
                      an excellent meal made with the highest quality ingredients.
                      You will be satisfied!
                    </p>
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
