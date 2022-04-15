import React, { useRef } from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": {
        src: string;
        background: string;
        speed: number;
        style: { width: string; height: string };
        loop: true;
        autoPlay: true;
      };
    }
  }
}

const index = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <main>
      {/* hero section start */}
      <div className="underlay" />
      <section className="hero">
        <div className="container d-lg-flex align-items-center">
          <div className="hero_content">
            <h1 className="hero_content-header" data-aos="fade-up">
              Lập trình thực chiến
            </h1>
            <p className="hero_content-text" data-aos="fade-up" data-aos-delay={50}>
              Học viện đào tạo lập trình viên xuất sắc. Được tin tưởng bởi hàng nghìn học viên và nhà tuyển dụng trên toàn Việt Nam.
            </p>
            <div className="hero_content-action d-flex flex-wrap">
              <a className="btn btn--gradient" href="#" data-aos="fade-left">
                <span className="text">Tìm hiểu thêm</span>
              </a>
            </div>
          </div>
          <div className="hero_media col-lg-6">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_u43fdvrl.json"
              background="transparent"
              speed={1}
              style={{ width: "100%", height: "100%" }}
              loop
              autoPlay
            />
          </div>
        </div>
      </section>
      {/* hero section end */}
      {/* features section start */}
      <div className="features">
        <div className="container">
          <ul className="features_list d-md-flex flex-wrap">
            <li className="features_list-item col-md-4" data-order={1} data-aos="fade-up">
              <div className="card">
                <div className="content">
                  <div className="card_media">
                    <i className="icon-user-graduate-solid icon" />
                  </div>
                  <div className="card_main">
                    <h5 className="card_main-title">Chứng nhận tốt nghiệp</h5>
                    <p className="card_main-text">
                      100% học viên tốt nghiệp tại Future Academy đều được cấp certificate để có thể xin việc tại các công ty công nghệ hàng
                      đầu
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="features_list-item col-md-4" data-order={2} data-aos="fade-up">
              <div className="card">
                <div className="content">
                  <div className="card_media">
                    <i className="icon-globe-solid icon" />
                  </div>
                  <div className="card_main">
                    <h5 className="card_main-title">Toàn cầu</h5>
                    <p className="card_main-text">
                      Là những nơi mà học viên của Future Academy đã đặt chân đến làm việc sau khi tốt nghiệp
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="features_list-item col-md-4" data-order={3} data-aos="fade-up">
              <div className="card">
                <div className="content">
                  <div className="card_media">
                    <i className="icon-headset-solid icon" />
                  </div>
                  <div className="card_main">
                    <h5 className="card_main-title">Hỗ trợ 24/7</h5>
                    <p className="card_main-text">
                      Toàn bộ học viên của Future Academy đều được hỗ trợ 24/7 trong suốt quá trình học cũng như sau khi đã tốt nghiệp khoá
                      học
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* features section end */}
      {/* promo section start */}
      <section className="promo">
        <div className="container d-flex flex-column-reverse flex-lg-row justify-content-lg-end">
          <div className="promo_media">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_6gfl0jjp.json"
              background="transparent"
              speed={1}
              style={{ width: "100%", height: "100%" }}
              loop
              autoPlay
            />
          </div>
          <div className="promo_content">
            <h2 className="promo_content-header" data-aos="fade-left">
              Trinh phục ngành công nghệ với Future Academy
            </h2>
            <p className="promo_content-text" data-aos="fade-up" data-aos-delay={50}>
              Khai phá giới hạn bản thân và bắt đầu sự nghiệp rực rỡ của mình trong ngành IT
            </p>
            <a className="promo_content-btn btn btn--gradient" href="#" data-aos="fade-up" data-aos-delay={100}>
              <span className="text">Tìm hiểu thêm</span>
            </a>
          </div>
        </div>
      </section>
      {/* promo section end */}
      {/* about section start */}
      <section className="about">
        <div className="container">
          <div className="about_deco">
            <lottie-player src="api/hello" background="transparent" speed={1} style={{ width: "100%", height: "100%" }} loop autoPlay />
          </div>
          <div className="about_main">
            <div className="content">
              <h2 className="about_main-header" data-aos="fade-in">
                Học ở Future Academy
              </h2>
              <ul className="about_main-list">
                <li className="about_main-list_item" data-aos="fade-up">
                  <i className="icon-check icon" />
                  <div className="content">
                    <h5 className="title">Môi trường chuyên nghiệp</h5>
                    <p className="text">
                      Môi trường học tập và làm việc chuyên nghiệp. Học viên được trải nghiệm việc vừa học vừa được giao task làm việc thực
                      tế
                    </p>
                  </div>
                </li>
                <li className="about_main-list_item" data-aos="fade-up" data-aos-delay={50}>
                  <i className="icon-check icon" />
                  <div className="content">
                    <h5 className="title">Văn hoá khác biệt</h5>
                    <p className="text">Trải nghiệm văn hoá làm việc của một lập trình viên thực tế, sáng tạo và máu lửa</p>
                  </div>
                </li>
                <li className="about_main-list_item" data-aos="fade-up" data-aos-delay={100}>
                  <i className="icon-check icon" />
                  <div className="content">
                    <h5 className="title">Phương pháp đào tạo</h5>
                    <p className="text">Lấy học viên làm trung tâm, đào tạo theo phương pháp project-based training</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="about_review" data-aos="zoom-in">
            <div className="about_review-wrapper">
              <div className="media">
                <picture>
                  <source data-srcset="img/person-01.jpeg" srcSet="img/person-01.jpeg" />
                  <img className="lazy" data-src="img/person-01.jpeg" src="img/person-01.jpeg" alt="media" />
                </picture>
              </div>
              <div className="main">
                <h5 className="main_name">Teacher Chương Chu</h5>
                <ul className="rating d-flex align-items-center">
                  <li className="rating_star">
                    <i className="icon-star icon" />
                  </li>
                  <li className="rating_star">
                    <i className="icon-star icon" />
                  </li>
                  <li className="rating_star">
                    <i className="icon-star icon" />
                  </li>
                  <li className="rating_star">
                    <i className="icon-star icon" />
                  </li>
                  <li className="rating_star">
                    <i className="icon-star icon" />
                  </li>
                </ul>
                <q className="main_review quote">
                  “Chúng tôi luôn coi học viên là những thành viên trong gia đình, sẵn sàng support 24/7 để chắp cánh cho giấc mơ công nghệ
                  của các bạn”
                </q>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section end */}
      {/* popular courses section start */}
      <section className="popular">
        <div className="container">
          <div className="popular_header">
            <h2 className="popular_header-title" data-aos="fade-up">
              Khoá học nổi bật
            </h2>
            <p className="popular_header-text" data-aos="fade-down">
              Các khoá học tại Future Academy — nơi khởi đầu cho những thành công của các lập trình viên trong tương lai, cung cấp và đào
              tạo nguồn nhân lực IT chất lượng cao cho các dự án lớn trên toàn cầu.
            </p>
          </div>
          {/* <ul
      class="popular_tags courses-tags d-flex flex-wrap align-items-center justify-content-center"
    >
      <li class="list-item" data-aos="fade-left">
        <a class="tag" href="#">programming</a>
      </li>
      <li class="list-item" data-aos="fade-left" data-aos-delay="50">
        <a class="tag" href="#">management</a>
      </li>
      <li class="list-item" data-aos="fade-left" data-aos-delay="100">
        <a class="tag" href="#">art</a>
      </li>
      <li class="list-item" data-aos="fade-left" data-aos-delay="150">
        <a class="tag" href="#">digital marketing</a>
      </li>
      <li class="list-item" data-aos="fade-left" data-aos-delay="200">
        <a class="tag" href="#">game development</a>
      </li>
      <li class="list-item" data-aos="fade-left" data-aos-delay="250">
        <a class="tag" href="#">smm</a>
      </li>
    </ul> */}
          <ul className="popular_list d-md-flex flex-wrap">
            <li className="popular_list-card course-card col-12 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="course-card_wrapper">
                <div className="top d-flex align-items-start">
                  <span className="top_icon top_icon--blue">
                    <i className="icon-code-solid icon" />
                  </span>
                  <div className="wrapper d-flex flex-column">
                    <h5 className="top_title">Code thiểu năng — Javascript</h5>
                    <ul className="rating d-flex align-items-center">
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                    </ul>
                    <span className="top_author">by Future Academy</span>
                    <span className="top_details">15 modules (45 Hours)</span>
                  </div>
                </div>
                <div className="pricing">
                  <span className="pricing_price h5">2 sessions / per week</span>
                </div>
                <div className="bottom">
                  <ul className="bottom_list">
                    <li className="bottom_list-item d-flex align-items-start">
                      <i className="bottom_list-item_marker icon-circle" />
                      <p className="bottom_list-item_text">Trinh phục kiến thức cơ bản về JS và Front-end web development</p>
                    </li>
                    <li className="bottom_list-item d-flex align-items-start">
                      <i className="bottom_list-item_marker icon-circle" />
                      <p className="bottom_list-item_text">
                        Sẵn sàng apply vào những vị trí Intern, Fresher tại những công ty công nghệ trên toàn Việt Nam
                      </p>
                    </li>
                  </ul>
                  <a className="bottom_btn btn btn--bordered btn--arrow" href="course.html">
                    Tìm hiểu thêm
                    <i className="icon-arrow-right-solid icon" />
                  </a>
                </div>
              </div>
            </li>
            <li className="popular_list-card course-card col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={50}>
              <div className="course-card_wrapper">
                <div className="top d-flex align-items-start">
                  <span className="top_icon top_icon--orange">
                    <i className="icon-css3 icon" />
                  </span>
                  <div className="wrapper d-flex flex-column">
                    <h5 className="top_title">Code nông dân — Advanced JS</h5>
                    <ul className="rating d-flex align-items-center">
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                    </ul>
                    <span className="top_author">by Future Academy</span>
                    <span className="top_details">15 modules (45 Hours)</span>
                  </div>
                </div>
                <div className="pricing">
                  <span className="pricing_price h5">2 sessions / per week</span>
                </div>
                <div className="bottom">
                  <ul className="bottom_list">
                    <li className="bottom_list-item d-flex align-items-start">
                      <i className="bottom_list-item_marker icon-circle" />
                      <p className="bottom_list-item_text">Trinh phục những kiến thức nâng cao về JS, web development</p>
                    </li>
                    <li className="bottom_list-item d-flex align-items-start">
                      <i className="bottom_list-item_marker icon-circle" />
                      <p className="bottom_list-item_text">
                        Bổ sung các module về phỏng vấn, thuật toán, sẵn sàng ứng tuyển vào vị trí Junior ở các công ty công nghệ
                      </p>
                    </li>
                  </ul>
                  <a className="bottom_btn btn btn--bordered btn--arrow" href="course.html">
                    Tìm hiểu thêm
                    <i className="icon-arrow-right-solid icon" />
                  </a>
                </div>
              </div>
            </li>
            <li className="popular_list-card course-card col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="course-card_wrapper">
                <div className="top d-flex align-items-start">
                  <span className="top_icon top_icon--sky">
                    <i className="icon-sitemap-solid icon" />
                  </span>
                  <div className="wrapper d-flex flex-column">
                    <h5 className="top_title">Code hero — fullstack JS</h5>
                    <ul className="rating d-flex align-items-center">
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                      <li className="rating_star">
                        <i className="icon-star icon" />
                      </li>
                    </ul>
                    <span className="top_author">by Future Academy</span>
                    <span className="top_details">30 modules (90 Hours)</span>
                  </div>
                </div>
                <div className="pricing">
                  <span className="pricing_price h5">2 sessions / per week</span>
                </div>
                <div className="bottom">
                  <ul className="bottom_list">
                    <li className="bottom_list-item d-flex align-items-start">
                      <i className="bottom_list-item_marker icon-circle" />
                      <p className="bottom_list-item_text">Trinh phục các kiến thức nâng cao về web development</p>
                    </li>
                    <li className="bottom_list-item d-flex align-items-start">
                      <i className="bottom_list-item_marker icon-circle" />
                      <p className="bottom_list-item_text">
                        Sẵn sàng ứng tuyển vào các vị trí Junior, mid-level developer tại các công ty công nghệ
                      </p>
                    </li>
                  </ul>
                  <a className="bottom_btn btn btn--bordered btn--arrow" href="course.html">
                    sign up for a course
                    <i className="icon-arrow-right-solid icon" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <a className="popular_btn btn btn--gradient" href="courses.html">
            <span className="text">Tìm hiểu thêm</span>
          </a>
        </div>
      </section>
      {/* popular courses section end */}
      {/* banner section start */}
      <div className="banner">
        <div className="underlay" />
        <div className="container d-lg-flex align-items-center">
          <div className="banner_content">
            <h4 className="banner_content-title" data-aos="fade-up">
              Cùng Future Academy sử dụng công nghệ để thay đổi thế giới
            </h4>
            <div className="wrapper" data-aos="fade-up" data-aos-delay={50}>
              <a className="banner_content-btn btn btn--yellow" href="pricing.html">
                Đăng ký ngay
              </a>
            </div>
          </div>
          <div className="banner_media">
            <picture>
              <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" />
              <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
            </picture>
          </div>
        </div>
      </div>
      {/* banner section end */}
    </main>
  );
};

export default index;
