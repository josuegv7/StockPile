import React from "react";
import frig from "../assets/images/frig.png";
import comp from "../assets/images/comp.png";
import cooking from "../assets/images/cooking.png";
import css from "../style/about.css";

const aboutPage = () => (
  <section className={css.service}>
    <div className="container">
      <div className="row mt centered">
        <div className="col-md-12">
          <div className={css.block_top}>
            <div className={css.service_header}>
              <h1>Quick and Easy</h1>
              <h3>How It Works: 3 Steps</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt centered">
        <div className="col-md-12">
          <div className={css.block_bottom}>
            <div className={css.service_tab}>
              <div className="row">
                <div className="col-lg-4">
                  <img src={frig} width="180" alt="" />
                  <h4>
                    <b>
                      Step 1:<br /> Forage
                    </b>
                  </h4>
                </div>
                <div className="col-lg-4">
                  <img src={comp} width="180" alt="" />
                  <h4>
                    <b>
                      Step 2:<br /> Search
                    </b>
                  </h4>
                </div>
                <div className="col-lg-4">
                  <img src={cooking} width="180" alt="" />
                  <h4>
                    <b>
                      Step 3:<br /> Cook
                    </b>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default aboutPage;
