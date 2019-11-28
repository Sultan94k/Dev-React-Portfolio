import React, { Component } from 'react';
import "./Style/Contact.css"
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="contact-body">
            <div className="contact-wrap">
              <p className="lead">
              Feel free to contact me for any work or suggestions below.
              </p>
            
        <div className="actionss">
          <a className="btn d-none d-md-inline-block" href="mailto:sultanmuratkarimov@gmail.com" target="_blank">
            <i className="fa fa-paper-plane" aria-hidden="true"></i> Hire Me </a>
          <a className="btn1" href="" target="_blank">
             <i className="fa fa-download" aria-hidden="true"></i> Download My Resume</a>
            </div>
       
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                    <a className="s1" href={item.url} target="_blank">
                    <i className={item.className} target="_blank" />
                    </a>
                )
              })
            }
          </ul>
          </div>   
            </div>
      </section>
        );
  }
}