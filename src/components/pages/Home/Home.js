import React, { useState, useEffect } from 'react';
import './Home.scss';
import { Row, Col, Container } from 'react-bootstrap';
import { HomepageData } from '../../../Data/Database';
import { Wave } from 'react-animated-text';
import TextLoop from "react-text-loop";

const Home = () => {
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPaused(false);
    }, 2500)
  }, [])
  return (
    <React.Fragment>
      <div className="Home">
        <div id="triangle"></div>
        <div
          className="position-absolute top-0 end-0"
          style={{
            backgroundImage: 'url(images/bg.jpg)',
            height: '100%',
            width: '47%',
            left: '53%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <Row className="w-100"> 
          <Col sm={6}>
            <Container className="d-flex align-items-center vh-100 p-5">
              <div>
                <h4>
                  {HomepageData.introduction.line1}
                </h4>
                <h1 className=" fw-bold d-flex ">
                  <TextLoop
                    fade
                  >
                    {HomepageData.introduction.positionWhiteTexts.map((text) => {
                      return <div>
                        <Wave
                          text={text}
                          effect="verticalFadeIn"
                          iterations={1}
                        /
                        >
                      </div>
                    })}
                  </TextLoop>
                  &nbsp;
                  <span className="text-warning" >
                    {HomepageData.introduction.positionColoredText}
                  </span>
                </h1>


                <h5 className="text-muted">
                  {HomepageData.introduction.description}
                </h5>
                <h4 className="Home_textOrange">
                  {HomepageData.introduction.tagline}
                </h4>
                <h5>
                  {
                    HomepageData.introduction.statusLine
                  }
                </h5>
                <a className="text-muted">
                  Learn more...
                </a>
              </div>
            </Container>
          </Col>
          <Col sm={6} >
            <div style={{width:'100%',height:'100%', marginLeft:'7%',background: 'linear-gradient(173.39deg, rgba(0, 0, 0, 0) 68.61%, #000000 91.14%)',position:'relative'}} >
              
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Home