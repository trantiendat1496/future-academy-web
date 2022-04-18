import React from "react";

const Header = () => {
  return (
    <header className="header" data-page="home">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="logo header_logo">
          <a className="d-inline-flex align-items-center" href="/">
            <span className="logo_picture">
              <img src="/logo.png" alt="Edison" />
            </span>
          </a>
        </div>
        <button className="header_trigger" type="button" data-bs-toggle="collapse" data-bs-target="#headerMenu" aria-controls="headerMenu">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
        <nav className="header_nav collapse" id="headerMenu">
          <ul className="header_nav-list">
            <li className="header_nav-list_item">
              <a className="nav-item" href="/" data-page="home">
                Trang chủ
              </a>
            </li>
            <li className="header_nav-list_item dropdown">
              <a
                className="nav-link nav-item dropdown-toggle d-inline-flex align-items-center"
                href="courses.html"
                data-bs-toggle="collapse"
                data-bs-target="#coursesMenu"
                data-trigger="dropdown"
                aria-expanded="false"
                aria-controls="coursesMenu"
                data-page="courses"
              >
                Khoá học
                <i className="icon-angle-down icon" />
              </a>
              <div className="dropdown-menu collapse" id="coursesMenu">
                <ul className="dropdown-list">
                  <li className="list-item" data-main="true">
                    <a className="dropdown-item nav-item" data-page="courses" href="courses.html" data-main="true">
                      Khoá học
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" data-page="course" href="course.html">
                      Mô tả khoá học
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header_nav-list_item">
              <a className="nav-item" href="about.html" data-page="about">
                Về chúng tôi
              </a>
            </li>
            <li className="header_nav-list_item dropdown">
              <a
                className="nav-link nav-item dropdown-toggle d-inline-flex align-items-center"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesMenu"
                data-trigger="dropdown"
                aria-expanded="false"
                aria-controls="pagesMenu"
                data-page
              >
                Blogs
                <i className="icon-angle-down icon" />
              </a>
              <div className="dropdown-menu collapse" id="pagesMenu">
                <ul className="dropdown-list">
                  <li className="list-item">
                    <a className="dropdown-item nav-item" data-page="library" href="library.html">
                      Media library
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" data-page="events" href="events.html">
                      Events
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" data-page="teachers" href="team.html">
                      Teachers
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" data-page="faq" href="faq.html">
                      FAQ
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="dropdown-item nav-item" data-page="error" href="404.html">
                      404
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header_nav-list_item">
              <a className="nav-item" href="contacts.html" data-page="contacts">
                Liên hệ
              </a>
            </li>
          </ul>
          <ul className="promobar_socials d-flex align-items-center justify-content-center">
            <li className="promobar_socials-item">
              <a className="link" href="#" target="_blank" rel="noopener noreferrer">
                <i className="icon-facebook" />
              </a>
            </li>
            <li className="promobar_socials-item">
              <a className="link" href="#" target="_blank" rel="noopener noreferrer">
                <i className="icon-twitter" />
              </a>
            </li>
            <li className="promobar_socials-item">
              <a className="link" href="#" target="_blank" rel="noopener noreferrer">
                <i className="icon-instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
