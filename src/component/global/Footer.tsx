import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper d-sm-flex flex-wrap flex-lg-nowrap justify-content-lg-between">
          <div className="footer_block col-sm-6 col-lg-auto" data-order={1}>
            <div className="logo logo--footer">
              <a className="d-inline-flex align-items-center" href="/">
                <span className="logo_picture">
                  <img src="logo.png" alt="Edison" />
                </span>
              </a>
            </div>
            <ul className="footer_block-socials d-flex align-items-center">
              <li className="footer_block-socials_item">
                <a className="link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li className="footer_block-socials_item">
                <a className="link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li className="footer_block-socials_item">
                <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="icon-instagram" />
                </a>
              </li>
            </ul>
            <div className="wrapper d-flex flex-column">
              <a className="link link--contacts text text--sm d-inline-flex align-items-center" href="mailto:example@domain.com">
                <i className="icon-envelope icon" />
                tuyensinh@future-academy.edu.vn
              </a>
              <a className="link link--contacts text text--sm d-inline-flex align-items-center" href="tel:+84973712395">
                <i className="icon-phone-solid icon" />
                +84-973-712-395
              </a>
            </div>
          </div>
          <div className="footer_block col-sm-6 col-lg-auto" data-order={2}>
            <h5 className="footer_block-header">Thông tin:</h5>
            <ul className="footer_block-nav">
              <li className="footer_block-nav_item">
                <a className="link" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="footer_block-nav_item">
                <a className="link" href="contacts.html">
                  Liên hệ
                </a>
              </li>
              <li className="footer_block-nav_item">
                <a className="link" href="courses.html">
                  Khoá học
                </a>
              </li>
              <li className="footer_block-nav_item">
                <a className="link" href="#">
                  Về chúng tôi
                </a>
              </li>
              <li className="footer_block-nav_item">
                <a className="link" href="#">
                  Blogs
                </a>
              </li>
              <li className="footer_block-nav_item">
                <a className="link" href="faq.html">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_block col-sm-6 col-lg-auto m-sm-0" data-order={3}>
            <h5 className="footer_block-header">Khoá học nổi bật:</h5>
            <ul className="footer_block-list">
              <li className="footer_block-list_item d-flex align-items-baseline">
                <span className="marker" />
                <a className="link" href="course.html">
                  Code thiểu năng — Javascript
                </a>
              </li>
              <li className="footer_block-list_item d-flex align-items-baseline">
                <span className="marker" />
                <a className="link" href="course.html">
                  Code nông dân — Javascript
                </a>
              </li>
              <li className="footer_block-list_item d-flex align-items-baseline">
                <span className="marker" />
                <a className="link" href="course.html">
                  Code hero — Full "MERN" stack web development
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_block col-sm-6 col-lg-auto" data-order={4}>
            <h5 className="footer_block-header">Instagram:</h5>
            <ul className="footer_block-instagram d-grid">
              <li className="footer_block-instagram_item">
                <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" />
                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                  </picture>
                </a>
              </li>
              <li className="footer_block-instagram_item">
                <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" />
                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                  </picture>
                </a>
              </li>
              <li className="footer_block-instagram_item">
                <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" />
                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                  </picture>
                </a>
              </li>
              <li className="footer_block-instagram_item">
                <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" />
                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                  </picture>
                </a>
              </li>
              <li className="footer_block-instagram_item">
                <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" />
                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                  </picture>
                </a>
              </li>
              <li className="footer_block-instagram_item">
                <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" />
                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                  </picture>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_secondary">
        <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-sm-between">
          <a className="footer_secondary-scroll" id="scrollToTop" href="#">
            <i className="icon-angle-up icon" />
          </a>
          <p className="footer_secondary-copyright">
            Copyright @ <span id="currentYear" /> Future Academy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
