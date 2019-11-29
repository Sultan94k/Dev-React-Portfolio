import React, { Component } from 'react';
// import "./Style/Portfolio.css";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>PROJECTS</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                  <a href="https://sultan94k.github.io/TriviaGame/" target="_blank">{item.url0}</a>
                  <a href="https://friendsultan.herokuapp.com/" target="_blank">{item.url1}</a>
                  <a href="https://salty-island-17838.herokuapp.com/" target="_blank">{item.url2}</a>
                  <a href="https://sultan94k.github.io/WeatherAPI/" target="_blank">{item.url3}</a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}