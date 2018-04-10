import React from 'react';
import frig from "../assets/images/frig.png";
import comp from "../assets/images/comp.png";
import cooking from "../assets/images/cooking.png";
import css from '../about.css';
import { Row, Col } from 'react-flexbox-grid';


const aboutPage = () => (
          <section className={css.service}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className={css.block_top}>
                              <div className={css.service_header}>
                                  <h1>Quick and Easy</h1>
                                  <p>How It Works: 3 Steps</p>
                              </div>
                          </div>
                      </div>
                  </div>

  				        <div className="row">
          					<div className="col-md-12">
          						<div className={css.block_bottom}>
                        <div className={css.service_tab}>
                      <Row>
                                <Col xs>
                                  <img  src={frig} alt="Avatar"/>
                                  <h4><b>Step 1:<br/> Forage</b></h4>
                                </Col>
                                <Col xs>
              									  <img  src={comp} alt="Avatar"/>
              									  <h4><b>Step 2:<br/> Search</b></h4>
                                </Col>
                                <Col xs>
              									  <img  src={cooking} alt="Avatar"/>
              									  <h4><b>Step 3:<br/> Cook</b></h4>
                                </Col>
                        </Row>
                        	</div>
          						</div>
          					</div>
  				        </div>
              </div>
          </section>
)
export default aboutPage;
