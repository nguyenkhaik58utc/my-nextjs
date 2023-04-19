import * as React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import ImgLD from '../../service/images/config'
import { stringify } from 'querystring';
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fptshop.com.vn/LandingNew/css/icon-fptshop.css" />
      </Head>
      <main className="ld-san-ngay-dem">
        <section className="sale-all-day-top-banner">
          <p className="img-top-banner">
            <Image src={ImgLD.img_bg_1} alt="" className=" desktop-only" />
            <Image src={ImgLD.img_bg_2} alt="" className=" mobile-only" />
          </p>
          {
            <div className="container">
              <div className="inner">
                <div className="col-1">
                  <p className="img-1 desktop-only">
                    <Image src = {ImgLD.img_1} alt="" />
                  </p>
                  <p className="img-1 mobile-only">
                    <Image src={ImgLD.img_2_mb} alt="" />
                  </p>
                </div>

                <div className="col-2">
                  <p className="img-2 desktop-only">
                    <Image src={ImgLD.img_2} alt="" />
                  </p>
                  <p className="img-2 mobile-only">
                    <Image  src={ImgLD.img_1_mb} alt="" />
                  </p>

                  <div className="all-day-form-sale">
                    <form action="" method="post">
                      <div className="wrap-form">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control error"
                            id="inpName"
                            name="inpName"
                            placeholder="Họ tên"
                          />
                          <span className="txt-error">Thông tin bắt buộc</span>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="inpPhone"
                            name="inpPhone"
                            placeholder="Số điện thoại"
                          />
                          <span className="txt-error hide">Thông tin bắt buộc</span>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="wrap-btn">
                    <a className="ld-btn btn-booking" >
                      ĐĂNG KÝ NGAY
                    </a>
                  </div>
                  <p className="customer js--open-modal">
                    Có <strong>XXXX</strong> khách đăng ký.{' '}
                    <a className="btn-popup"  data-toggle="modal" data-target="myModal4">
                      Xem danh sách &gt;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          }
        </section>

        <nav className="sale-all-day-menu">
          <div className="container">
            <div className="inner">
              <ul className="sale-all-day-menu-right" id="navigation">
                <li className="active">
                  <a href="#section1" className="item scroll">
                    Lịch săn sale
                  </a>
                </li>
                <li>
                  <a href="#section2" className="item scroll">
                    Hướng dẫn tham gia
                  </a>
                </li>
                <li>
                  <a href="#section3" className="item scroll">
                    Danh sách trúng giải
                  </a>
                </li>
                <li>
                  <a href="#section4" className="item scroll">
                    Thông tin sản phẩm
                  </a>
                </li>
                <li>
                  <div className="sale-all-day-menu-call">
                    <a className="sale-all-day-menu-btn btn-call" href="tel:18006601">
                      <i className="demo-icon icon-call"></i>
                      <span>Hotline: 1800 6601</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="section-common section-1" id="section1">
          <div className="container">
            <div className="inner">
              <p className="sale-all-day-tit">
                <Image  className="desktop-only" src={ImgLD.img_tit_1} alt="" />
                <Image  className="mobile-only" src={ImgLD.img_tit_1_mb} alt="" />
              </p>
              <div className="sale-all-day-content">
                <div className="ss-slider">
                  <div className="swiper st1-swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide slide-1">
                        <div className="item">
                          <Image
                            
                            className="desktop-only"
                            src={ImgLD.img_3}
                            alt=""
                          />
                          <Image
                            
                            className="mobile-only"
                            src={ImgLD.img_3_mb}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide slide-2">
                        <div className="item">
                          <Image
                            
                            className="desktop-only"
                            src={ImgLD.img_4}
                            alt=""
                          />
                          <Image
                            
                            className="mobile-only"
                            src={ImgLD.img_4}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide slide-3">
                        <div className="item">
                          <Image
                            
                            className="desktop-only"
                            src={ImgLD.img_5}
                            alt=""
                          />
                          <Image
                            
                            className="mobile-only"
                            src={ImgLD.img_5_mb}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="swiper-pagination"></div>
                  </div>

                  <div className="box-button desktop-only">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-common section-2" id="section2">
          <div className="container">
            <a href="">
              <Image
                
                className="desktop-only"
                src={ImgLD.img_the_le}
                alt=""
              />
              <Image
                
                className="mobile-only"
                src={ImgLD.img_the_le_mb}
                alt=""
              />
            </a>
          </div>
        </section>

        <section className="section-common section-3" id="section3">
          <div className="container">
            <a href="">
              <Image
                
                className="desktop-only"
                src={ImgLD.img_danh_sach}
                alt=""
              />
              <Image
                
                className="mobile-only"
                src={ImgLD.img_danh_sach_mb}
                alt=""
              />
            </a>
          </div>
        </section>

        <section className="section-common section-4" id="section4">
          <div className="container">
            <a href="" className="desktop-only">
              <Image  src={ImgLD.img_9} alt="" />
              <Image  src={ImgLD.img_10} alt="" />
            </a>
            <a href="" className="mobile-only">
              <Image  src={ImgLD.img_8_mb} alt="" />
              <Image  src={ImgLD.img_9_mb} alt="" />
              <Image  src={ImgLD.img_10_mb} alt="" />
            </a>
          </div>
        </section>

        <section className="hoidap">
          <div className="container">
            <Image  src={ImgLD.img_hoi_dap} alt="" />
          </div>
        </section>
      </main>

      <div className="popup-modal popup-mess">
        <div className="popup-overlay js--close-modal"></div>
        <div className="popup-modal-dialog">
          <div className="popup-main">
            <a className="popup-btn-close js--close-modal">
              <i className="ic-close"></i>
            </a>

            <div className="popup-contents">
              <p className="icon-mess">
                <Image  src={ImgLD.img_ic_check} alt="" />
              </p>
              <p className="txt-1">Đăng ký thành công</p>
              <p className="txt-2">
                Chúc mừng bạn đã đăng ký thành công.
                <br />
                Bạn hãy theo dõi kết quả quay số được công bố hàng ngày nhé!
              </p>
              <a href="" className="btn-buy">
                Tiếp tục mua hàng
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="popup-modal popup-show-list-customer myModal4"
        id="popup-show-list-customer"
        role="dialog"
      >
        <div className="popup-overlay js--close-modal"></div>
        <div className="popup-modal-dialog">
          <div className="popup-main">
            <a className="popup-btn-close js--close-modal">
              <i className="ic-close"></i>
            </a>
            <h3 className="popup-title">Danh sách 320 khách đăng ký</h3>

            <div className="popup-contents">
              <div className="content-rules-list-customer">
                <div className="content-rules">
                  <div className="top-rules">
                    <form action="" method="post" id="frm-search" name="frm-search">
                      <div className="frm-search">
                        <input
                          className="form-control desktop-only"
                          type="search"
                          name="search"
                          placeholder="Nhập số điện thoại để tìm kiếm"
                        />
                        <input
                          className="form-control mobile-only"
                          type="search"
                          name="search"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>

                      <i className="ic-close"></i>
                    </form>
                  </div>
                  <div className="list-rules">
                    <table className="tb-rules">
                      <tbody>
                        <tr>
                          <td className="desktop-only">1</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">2</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">3</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">4</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>

                        <tr>
                          <td className="desktop-only">5</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">6</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">7</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">8</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">9</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="desktop-only">10</td>
                          <td>Nguyễn Văn Anh</td>
                          <td style={{ width: '120px' }}>0865061xxx</td>
                          <td style={{ width: '145px' }}>
                            <span className="wrap-icon icon-check-border">Săn đêm 15/04</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="wrap-btn">
                    <a className="btn-more">Xem thêm</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popup-modal popup-show-list-customer">
        <div className="popup-overlay js--close-modal"></div>
        <div className="popup-modal-dialog">
          <div className="popup-main">
            <a className="popup-btn-close js--close-modal">
              <i className="ic-close"></i>
            </a>
            <h3 className="popup-title">Danh sách 320 khách đăng ký</h3>

            <div className="popup-contents">
              <div className="content-rules-list-customer">
                <div className="content-rules">
                  <div className="top-rules">
                    <form action="" method="post" id="frm-search" name="frm-search">
                      <div className="frm-search">
                        <input
                          className="form-control desktop-only"
                          type="search"
                          name="search"
                          placeholder="Nhập số điện thoại để tìm kiếm"
                        />
                        <input
                          className="form-control mobile-only"
                          type="search"
                          name="search"
                          placeholder="Nhập số điện thoại"
                        />
                        <i className="ic-close"></i>
                      </div>
                    </form>
                  </div>

                  <div className="no-result">
                    <Image  src={ImgLD.img_no_find} alt="" />
                    <p className="txt-no-result">Số điện thoại tìm kiếm chưa đăng ký</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
