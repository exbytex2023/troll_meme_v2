import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div"
        style={{
          height:
            screenWidth < 1440
              ? "5180.41px"
              : screenWidth >= 1440 && screenWidth < 1920
              ? "4998.47px"
              : screenWidth >= 1920
              ? "5007.77px"
              : undefined,
          width:
            screenWidth < 1440
              ? "1349px"
              : screenWidth >= 1440 && screenWidth < 1920
              ? "1440px"
              : screenWidth >= 1920
              ? "1920px"
              : undefined,
        }}
      >
        <div
          className="overlap"
          style={{
            height:
              screenWidth < 1440
                ? "716px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "721px"
                : screenWidth >= 1920
                ? "730px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <div
            className="section"
            style={{
              height:
                screenWidth < 1440
                  ? "93px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "98px"
                  : screenWidth >= 1920
                  ? "107px"
                  : undefined,
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
          >
            <div
              className="div-elementor"
              style={{
                height:
                  screenWidth < 1440
                    ? "93px"
                    : screenWidth >= 1440 && screenWidth < 1920
                    ? "98px"
                    : screenWidth >= 1920
                    ? "107px"
                    : undefined,
                left: screenWidth >= 1920 ? "160px" : undefined,
                width: screenWidth >= 1920 ? "1600px" : undefined,
              }}
            >
              <div
                className="div-elementor-widget"
                style={{
                  height:
                    screenWidth < 1440
                      ? "93px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "98px"
                      : screenWidth >= 1920
                      ? "107px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "270px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "288px"
                      : screenWidth >= 1920
                      ? "320px"
                      : undefined,
                }}
              >
                <div
                  className="trollface-png"
                  style={{
                    height:
                      screenWidth < 1440
                        ? "73px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "78px"
                        : screenWidth >= 1920
                        ? "87px"
                        : undefined,
                    left:
                      screenWidth < 1440
                        ? "91px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "97px"
                        : screenWidth >= 1920
                        ? "108px"
                        : undefined,
                    width:
                      screenWidth < 1440
                        ? "87px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "94px"
                        : screenWidth >= 1920
                        ? "105px"
                        : undefined,
                  }}
                />
              </div>
              <div
                className="div-elementor-widget-2"
                style={{
                  height:
                    screenWidth < 1440
                      ? "93px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "98px"
                      : screenWidth >= 1920
                      ? "107px"
                      : undefined,
                  left:
                    screenWidth < 1440
                      ? "270px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "288px"
                      : screenWidth >= 1920
                      ? "320px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "800px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "854px"
                      : screenWidth >= 1920
                      ? "949px"
                      : undefined,
                }}
              >
                <div
                  className="nav-list-item-link"
                  style={{
                    left:
                      screenWidth < 1440
                        ? "114px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "141px"
                        : screenWidth >= 1920
                        ? "188px"
                        : undefined,
                    top:
                      screenWidth < 1440
                        ? "17px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "20px"
                        : screenWidth >= 1920
                        ? "25px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper">Home</div>
                </div>
                <div
                  className="div-wrapper"
                  style={{
                    left:
                      screenWidth < 1440
                        ? "207px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "234px"
                        : screenWidth >= 1920
                        ? "281px"
                        : undefined,
                    top:
                      screenWidth < 1440
                        ? "17px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "20px"
                        : screenWidth >= 1920
                        ? "25px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-2">About</div>
                </div>
                <div
                  className="nav-list-item-link-2"
                  style={{
                    left:
                      screenWidth < 1440
                        ? "302px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "329px"
                        : screenWidth >= 1920
                        ? "377px"
                        : undefined,
                    top:
                      screenWidth < 1440
                        ? "17px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "20px"
                        : screenWidth >= 1920
                        ? "25px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-3">How To Buy</div>
                </div>
                <div
                  className="nav-list-item-link-3"
                  style={{
                    left:
                      screenWidth < 1440
                        ? "460px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "487px"
                        : screenWidth >= 1920
                        ? "534px"
                        : undefined,
                    top:
                      screenWidth < 1440
                        ? "17px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "20px"
                        : screenWidth >= 1920
                        ? "25px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-4">Roadmap</div>
                </div>
                <div
                  className="nav-list-item-link-4"
                  style={{
                    left:
                      screenWidth < 1440
                        ? "589px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "616px"
                        : screenWidth >= 1920
                        ? "664px"
                        : undefined,
                    top:
                      screenWidth < 1440
                        ? "17px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "20px"
                        : screenWidth >= 1920
                        ? "25px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-5">Contact</div>
                </div>
              </div>
              <div
                className="link-wrapper"
                style={{
                  height:
                    screenWidth < 1440
                      ? "93px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "98px"
                      : screenWidth >= 1920
                      ? "107px"
                      : undefined,
                  left:
                    screenWidth < 1440
                      ? "1070px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "1142px"
                      : screenWidth >= 1920
                      ? "1269px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "270px"
                      : screenWidth >= 1440 && screenWidth < 1920
                      ? "288px"
                      : screenWidth >= 1920
                      ? "320px"
                      : undefined,
                }}
              >
                <div
                  className="link"
                  style={{
                    left:
                      screenWidth < 1440
                        ? "65px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "74px"
                        : screenWidth >= 1920
                        ? "90px"
                        : undefined,
                    top:
                      screenWidth < 1440
                        ? "26px"
                        : screenWidth >= 1440 && screenWidth < 1920
                        ? "28px"
                        : screenWidth >= 1920
                        ? "33px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-6">Chart</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-wrapper"
            style={{
              top:
                screenWidth < 1440
                  ? "88px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "93px"
                  : screenWidth >= 1920
                  ? "102px"
                  : undefined,
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
          >
            <div
              className="section-2"
              style={{
                left:
                  screenWidth < 1440
                    ? "114px"
                    : screenWidth >= 1440 && screenWidth < 1920
                    ? "160px"
                    : screenWidth >= 1920
                    ? "400px"
                    : undefined,
              }}
            >
              <div className="div-elementor-widget-3">
                <div className="heading">
                  <div className="text-wrapper-7">TROLL</div>
                </div>
                <div className="heading-2">
                  <div className="text-wrapper-8">Trollface is back</div>
                </div>
                <div className="div-elementor-widget-4">
                  <div className="link-2">
                    <div className="text-wrapper-9">Buy Now</div>
                  </div>
                </div>
              </div>
              <div className="trollface-png-wrapper">
                <div className="trollface-png-2" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-3"
          style={{
            height:
              screenWidth < 1440
                ? "714px"
                : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                ? "717px"
                : undefined,
            top:
              screenWidth < 1440
                ? "716px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "721px"
                : screenWidth >= 1920
                ? "730px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <img
            className="div-elementor-shape"
            style={{
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
            alt="Div elementor shape"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-7.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-14.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape.svg"
                : undefined
            }
          />
          <div
            className="heading-listed-in"
            style={{
              left:
                screenWidth < 1440
                  ? "256px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "302px"
                  : screenWidth >= 1920
                  ? "542px"
                  : undefined,
            }}
          >
            LISTED IN MULTIPLE EXCHANGES
          </div>
          <div
            className="section-4"
            style={{
              left:
                screenWidth < 1440
                  ? "104px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "150px"
                  : screenWidth >= 1920
                  ? "390px"
                  : undefined,
            }}
          >
            <div className="div-elementor-column">
              <div className="link-full-gate-io" />
            </div>
            <div className="link-HTX-logo-wrapper">
              <div className="link-HTX-logo" />
            </div>
            <div className="div-elementor-column-2">
              <div className="link-3" />
            </div>
            <div className="link-full-lbank-logo-wrapper">
              <div className="link-full-lbank-logo" />
            </div>
            <div className="div-elementor-column-3">
              <div className="link-4" />
            </div>
            <div className="link-full-bitmart-wrapper">
              <div className="link-full-bitmart" />
            </div>
          </div>
          <div
            className="section-5"
            style={{
              left:
                screenWidth < 1440
                  ? "104px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "150px"
                  : screenWidth >= 1920
                  ? "390px"
                  : undefined,
            }}
          >
            <div className="div-elementor-column-4">
              <div className="link-5" />
            </div>
            <div className="link-screenshot-wrapper">
              <div className="link-screenshot" />
            </div>
            <div className="div-elementor-column-5">
              <div className="link-screenshot-2" />
            </div>
            <div className="link-ac-wrapper">
              <div className="link-ac" />
            </div>
            <div className="link-review-wrapper">
              <div className="link-review" />
            </div>
            <div className="link-download-wrapper">
              <div className="link-download" />
            </div>
          </div>
          <div
            className="section-6"
            style={{
              height:
                screenWidth < 1440
                  ? "108px"
                  : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                  ? "111px"
                  : undefined,
              left:
                screenWidth < 1440
                  ? "10px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "30px"
                  : screenWidth >= 1920
                  ? "270px"
                  : undefined,
              width:
                screenWidth < 1440
                  ? "1329px"
                  : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                  ? "1380px"
                  : undefined,
            }}
          >
            <div
              className="link-bitrue-logo-wrapper"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-bitrue-logo"
                style={{
                  height:
                    screenWidth < 1440
                      ? "36px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "38px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="link-full-poloniex-wrapper"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-full-poloniex"
                style={{
                  height:
                    screenWidth < 1440
                      ? "35px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "37px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="div-elementor-column-6"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "332px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "345px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-screenshot-3"
                style={{
                  height:
                    screenWidth < 1440
                      ? "30px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "31px"
                      : undefined,
                  top:
                    screenWidth < 1440
                      ? "39px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "40px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="link-images-removebg-wrapper"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "498px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "518px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-images-removebg"
                style={{
                  height:
                    screenWidth < 1440
                      ? "22px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "23px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="link-full-tapbit-wrapper"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "664px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "690px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-full-tapbit"
                style={{
                  height:
                    screenWidth < 1440
                      ? "43px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "45px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="div-elementor-column-7"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "831px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "862px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-6"
                style={{
                  height:
                    screenWidth < 1440
                      ? "58px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "61px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="div-elementor-column-8"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "997px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "1035px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-screenshot-4"
                style={{
                  height:
                    screenWidth < 1440
                      ? "37px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "39px"
                      : undefined,
                  top:
                    screenWidth < 1440
                      ? "35px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "36px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
            <div
              className="link-digifinex-svg-wrapper"
              style={{
                height:
                  screenWidth < 1440
                    ? "108px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "111px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "1163px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "1208px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "172px"
                    : undefined,
              }}
            >
              <div
                className="link-digifinex-svg"
                style={{
                  height:
                    screenWidth < 1440
                      ? "21px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "22px"
                      : undefined,
                  top:
                    screenWidth < 1440
                      ? "45px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "46px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "116px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "122px"
                      : undefined,
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="section-7"
          style={{
            top:
              screenWidth < 1440
                ? "1429px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1438px"
                : screenWidth >= 1920
                ? "1447px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <img
            className="img"
            style={{
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
            alt="Div elementor shape"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-8.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-15.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-1.svg"
                : undefined
            }
          />
          <img
            className="div-elementor-shape-2"
            style={{
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
            alt="Div elementor shape"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-9.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-16.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-2.svg"
                : undefined
            }
          />
          <div
            className="div-elementor-2"
            style={{
              left:
                screenWidth < 1440
                  ? "104px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "150px"
                  : screenWidth >= 1920
                  ? "390px"
                  : undefined,
            }}
          >
            <div className="div-elementor-widget-5">
              <div className="div-2" />
            </div>
            <div className="div-elementor-widget-6">
              <div className="heading-3">
                <div className="text-wrapper-10">ABOUT</div>
              </div>
              <div className="TROLL-COIN-is-a-wrapper">
                <p className="TROLL-COIN-is-a">
                  $TROLL COIN is a memebreaking
                  <br />
                  cryptocurrency that embraces the
                  <br />
                  spirit of internet culture. With a<br />
                  strong community and a renounced
                  <br />
                  contract, it aims to bring laughter
                  <br />
                  and fun. Join us on this exciting
                  <br />
                  journey to becoming one of the top
                  <br />
                  meme coins available on thy
                  <br />
                  internet.
                </p>
              </div>
              <div className="screenshot-png" />
            </div>
          </div>
        </div>
        <div
          className="section-8"
          style={{
            top:
              screenWidth < 1440
                ? "2226px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "2235px"
                : screenWidth >= 1920
                ? "2244px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <div
            className="heading-HOW-TO-BUY"
            style={{
              left:
                screenWidth < 1440
                  ? "480px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "525px"
                  : screenWidth >= 1920
                  ? "765px"
                  : undefined,
            }}
          >
            HOW TO BUY
          </div>
          <div
            className="div-elementor-wrapper"
            style={{
              left:
                screenWidth < 1440
                  ? "114px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "160px"
                  : screenWidth >= 1920
                  ? "400px"
                  : undefined,
            }}
          >
            <div className="div-elementor-3">
              <div className="untitled-design-wrapper">
                <div className="untitled-design" />
              </div>
              <div className="div-elementor-widget-7">
                <div className="heading-4">
                  <div className="text-wrapper-11">Create a Wallet</div>
                </div>
                <div className="download-metamask-or-wrapper">
                  <p className="download-metamask-or">
                    Download metamask or your wallet of choice from the app store
                    <br />
                    or google play store for free. Desktop users, download the
                    <br />
                    google chrome extension by going to metamask.io.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-9"
            style={{
              left:
                screenWidth < 1440
                  ? "114px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "160px"
                  : screenWidth >= 1920
                  ? "400px"
                  : undefined,
            }}
          >
            <div className="div-elementor-3">
              <div className="untitled-design-wrapper">
                <div className="untitled-design-2" />
              </div>
              <div className="div-elementor-widget-7">
                <div className="heading-5">
                  <div className="text-wrapper-12">Get Some ETH</div>
                </div>
                <div className="have-ETH-in-your-wrapper">
                  <p className="have-ETH-in-your">
                    Have ETH in your wallet to switch to $TROLL. If you don’t have
                    <br />
                    any ETH, you can buy directly on metamask, transfer from
                    <br />
                    another wallet, or buy on another exchange and send it to your
                    <br />
                    wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-10"
            style={{
              left:
                screenWidth < 1440
                  ? "114px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "160px"
                  : screenWidth >= 1920
                  ? "400px"
                  : undefined,
            }}
          >
            <div className="div-elementor-4">
              <div className="uniswap-webp-wrapper">
                <div className="uniswap-webp" />
              </div>
              <div className="div-elementor-widget-8">
                <div className="heading-5">
                  <div className="text-wrapper-13">Go to Uniswap</div>
                </div>
                <div className="connect-to-uniswap-wrapper">
                  <p className="connect-to-uniswap">
                    Connect to Uniswap. Go to app.uniswap.org in google chrome
                    <br />
                    or on the browser inside your Metamask app. Connect your
                    <br />
                    wallet. Paste the $TROLL token address into Uniswap, select
                    <br />
                    Troll, and confirm. When Metamask prompts you for a wallet
                    <br />
                    signature, sign.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-11"
            style={{
              left:
                screenWidth < 1440
                  ? "114px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "160px"
                  : screenWidth >= 1920
                  ? "400px"
                  : undefined,
            }}
          >
            <div className="div-elementor-5">
              <div className="div-elementor-widget-9">
                <div className="trollface-png-3" />
              </div>
              <div className="div-elementor-widget-10">
                <div className="heading-5">
                  <div className="text-wrapper-14">Switch ETH for Troll</div>
                </div>
                <div className="switch-ETH-for-TROLL-wrapper">
                  <p className="switch-ETH-for-TROLL">
                    Switch ETH for $TROLL. We have ZERO taxes so you don’t
                    <br />
                    need to worry about buying with a specific slippage, although
                    <br />
                    you may need to use slippage during times of market volatility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-12"
          style={{
            height:
              screenWidth < 1440
                ? "679px"
                : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                ? "516px"
                : undefined,
            top:
              screenWidth < 1440
                ? "3352px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "3361px"
                : screenWidth >= 1920
                ? "3370px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <img
            className="div-elementor-shape-3"
            style={{
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
            alt="Div elementor shape"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-10.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-17.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-3.svg"
                : undefined
            }
          />
          <img
            className="div-elementor-shape-4"
            style={{
              top:
                screenWidth < 1440
                  ? "620px"
                  : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                  ? "457px"
                  : undefined,
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
            alt="Div elementor shape"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-11.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-18.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-4.svg"
                : undefined
            }
          />
          <div
            className="heading-TOKENOMICS"
            style={{
              left:
                screenWidth < 1440
                  ? "470px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "516px"
                  : screenWidth >= 1920
                  ? "756px"
                  : undefined,
            }}
          >
            TOKENOMICS
          </div>
          <div
            className="section-13"
            style={{
              height:
                screenWidth < 1440
                  ? "389px"
                  : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                  ? "226px"
                  : undefined,
              left:
                screenWidth < 1440
                  ? "114px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "160px"
                  : screenWidth >= 1920
                  ? "400px"
                  : undefined,
            }}
          >
            <div
              className="div-elementor-6"
              style={{
                height:
                  screenWidth < 1440
                    ? "383px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "220px"
                    : undefined,
              }}
            >
              <div
                className="div-elementor-widget-11"
                style={{
                  height:
                    screenWidth < 1440
                      ? "383px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "220px"
                      : undefined,
                }}
              >
                <div
                  className="heading-6"
                  style={{
                    top:
                      screenWidth < 1440
                        ? "102px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "20px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-15">Token Supply</div>
                </div>
                <div
                  className="heading-7"
                  style={{
                    top:
                      screenWidth < 1440
                        ? "152px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "70px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-16">960,420,000,000,000</div>
                </div>
                <div
                  className="heading-8"
                  style={{
                    top:
                      screenWidth < 1440
                        ? "202px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "120px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-17">Tax: 0%</div>
                </div>
                <div
                  className="heading-9"
                  style={{
                    top:
                      screenWidth < 1440
                        ? "252px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "170px"
                        : undefined,
                  }}
                >
                  <div className="text-wrapper-18">Liquidity Pool 93.1%</div>
                </div>
              </div>
              <div
                className="div-elementor-widget-wrapper"
                style={{
                  height:
                    screenWidth < 1440
                      ? "383px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "220px"
                      : undefined,
                }}
              >
                <div
                  className="div-elementor-widget-12"
                  style={{
                    height:
                      screenWidth < 1440
                        ? "323px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "24px"
                        : undefined,
                  }}
                >
                  {screenWidth < 1440 && <div className="troll-face-gif" />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlap-group-wrapper"
          style={{
            height:
              screenWidth < 1440
                ? "689px"
                : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                ? "662px"
                : undefined,
            top:
              screenWidth < 1440
                ? "4031px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "3877px"
                : screenWidth >= 1920
                ? "3886px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <div
            className="overlap-group"
            style={{
              height:
                screenWidth < 1440
                  ? "689px"
                  : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                  ? "662px"
                  : undefined,
            }}
          >
            <div
              className="div-elementor-7"
              style={{
                height:
                  screenWidth < 1440
                    ? "689px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "662px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "1349px"
                    : screenWidth >= 1440 && screenWidth < 1920
                    ? "1440px"
                    : screenWidth >= 1920
                    ? "1920px"
                    : undefined,
              }}
            />
            <div
              className="heading-ROADMAP"
              style={{
                left:
                  screenWidth < 1440
                    ? "525px"
                    : screenWidth >= 1440 && screenWidth < 1920
                    ? "571px"
                    : screenWidth >= 1920
                    ? "811px"
                    : undefined,
              }}
            >
              ROADMAP
            </div>
            <div
              className="section-14"
              style={{
                backgroundColor:
                  (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "#0000008f" : undefined,
                border: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "2px solid" : undefined,
                borderColor: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "#ffffff" : undefined,
                height:
                  screenWidth < 1440
                    ? "166px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "139px"
                    : undefined,
                left:
                  screenWidth < 1440
                    ? "104px"
                    : screenWidth >= 1440 && screenWidth < 1920
                    ? "530px"
                    : screenWidth >= 1920
                    ? "770px"
                    : undefined,
                width:
                  screenWidth < 1440
                    ? "1140px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "380px"
                    : undefined,
              }}
            >
              <div
                className="dgzmk-fdd-wrapper"
                style={{
                  height:
                    screenWidth < 1440
                      ? "166px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "25px"
                      : undefined,
                  left:
                    screenWidth < 1440
                      ? "0"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "12px"
                      : undefined,
                  top:
                    screenWidth < 1440
                      ? "0"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "12px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "380px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "356px"
                      : undefined,
                }}
              >
                <div
                  className="dgzmk-fdd"
                  style={{
                    backgroundImage:
                      screenWidth < 1440
                        ? "url(https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/dg1zm2k-71066fdd-7241-408d-8b65-34b0fe0373ec-png@2x.png)"
                        : undefined,
                    backgroundPosition: screenWidth < 1440 ? "50% 50%" : undefined,
                    backgroundSize: screenWidth < 1440 ? "cover" : undefined,
                    color: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "#ffffff" : undefined,
                    fontFamily:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "'Inter', Helvetica"
                        : undefined,
                    fontSize: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "24.8px" : undefined,
                    fontWeight: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "500" : undefined,
                    height:
                      screenWidth < 1440
                        ? "146px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "28px"
                        : undefined,
                    left:
                      screenWidth < 1440
                        ? "100px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "81px"
                        : undefined,
                    letterSpacing:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "3.00px" : undefined,
                    lineHeight: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "25px" : undefined,
                    position:
                      screenWidth < 1440
                        ? "relative"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "absolute"
                        : undefined,
                    textAlign:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "center" : undefined,
                    top:
                      screenWidth < 1440
                        ? "10px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "-3px"
                        : undefined,
                    whiteSpace:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "nowrap" : undefined,
                    width:
                      screenWidth < 1440
                        ? "180px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "195px"
                        : undefined,
                  }}
                >
                  {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && <>Phase 1: Troll</>}
                </div>
              </div>
              <div
                className="div-elementor-widget-13"
                style={{
                  backgroundColor: screenWidth < 1440 ? "#0000008f" : undefined,
                  border: screenWidth < 1440 ? "2px solid" : undefined,
                  borderColor: screenWidth < 1440 ? "#ffffff" : undefined,
                  height:
                    screenWidth < 1440
                      ? "166px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "25px"
                      : undefined,
                  left:
                    screenWidth < 1440
                      ? "380px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "12px"
                      : undefined,
                  top:
                    screenWidth < 1440
                      ? "0"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "57px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "380px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "356px"
                      : undefined,
                }}
              >
                {screenWidth < 1440 && (
                  <>
                    <div className="heading-10">
                      <div className="text-wrapper-19">Phase 1: Troll</div>
                    </div>
                    <div className="heading-11">
                      <p className="p">Phase 2: Troll and HODL</p>
                    </div>
                    <div className="heading-12">
                      <div className="text-wrapper-20">Phase 3: Troll Takeover</div>
                    </div>
                  </>
                )}

                {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
                  <p className="p">Phase 2: Troll and HODL</p>
                )}
              </div>
              <div
                className="div-elementor-widget-14"
                style={{
                  height:
                    screenWidth < 1440
                      ? "166px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "25px"
                      : undefined,
                  left:
                    screenWidth < 1440
                      ? "760px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "12px"
                      : undefined,
                  top:
                    screenWidth < 1440
                      ? "0"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "102px"
                      : undefined,
                  width:
                    screenWidth < 1440
                      ? "380px"
                      : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                      ? "356px"
                      : undefined,
                }}
              >
                <div
                  className="dgzmk-fdd"
                  style={{
                    backgroundImage:
                      screenWidth < 1440
                        ? "url(https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/dg1zm2k-71066fdd-7241-408d-8b65-34b0fe0373ec-png@2x.png)"
                        : undefined,
                    backgroundPosition: screenWidth < 1440 ? "50% 50%" : undefined,
                    backgroundSize: screenWidth < 1440 ? "cover" : undefined,
                    color: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "#ffffff" : undefined,
                    fontFamily:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "'Inter', Helvetica"
                        : undefined,
                    fontSize: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "23.6px" : undefined,
                    fontWeight: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "500" : undefined,
                    height:
                      screenWidth < 1440
                        ? "146px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "28px"
                        : undefined,
                    left:
                      screenWidth < 1440
                        ? "100px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "13px"
                        : undefined,
                    letterSpacing:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "3.00px" : undefined,
                    lineHeight: (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "25px" : undefined,
                    position:
                      screenWidth < 1440
                        ? "relative"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "absolute"
                        : undefined,
                    textAlign:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "center" : undefined,
                    top:
                      screenWidth < 1440
                        ? "10px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "-3px"
                        : undefined,
                    transform: screenWidth < 1440 ? "rotate(180deg)" : undefined,
                    whiteSpace:
                      (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920 ? "nowrap" : undefined,
                    width:
                      screenWidth < 1440
                        ? "180px"
                        : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                        ? "330px"
                        : undefined,
                  }}
                >
                  {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && <>Phase 3: Troll Takeover</>}
                </div>
              </div>
            </div>
            <div
              className="section-15"
              style={{
                left:
                  screenWidth < 1440
                    ? "434px"
                    : screenWidth >= 1440 && screenWidth < 1920
                    ? "480px"
                    : screenWidth >= 1920
                    ? "720px"
                    : undefined,
                top:
                  screenWidth < 1440
                    ? "306px"
                    : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                    ? "279px"
                    : undefined,
              }}
            >
              <div className="heading-13">
                <div className="text-wrapper-21">$TROLL</div>
              </div>
              <div className="div-elementor-8">
                <div className="list-item-strong">
                  Launch
                  <br />
                  CoinGecko/ Coinmarketcap 
                  <br />
                  Listings
                </div>
                <p className="list-item-strong-2">
                  1,000+ Holders
                  <br />
                  Get $TROLL 
                  <br />
                  Trending on twitter
                  <br />
                  with our memetic power
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-16"
          style={{
            top:
              screenWidth < 1440
                ? "4720px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "4538px"
                : screenWidth >= 1920
                ? "4548px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <img
            className="div-elementor-shape-5"
            style={{
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
            alt="Div elementor shape"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-12.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-19.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-5.svg"
                : undefined
            }
          />
          <img
            className="div-elementor-shape-6"
            style={{
              width:
                screenWidth < 1440
                  ? "1349px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "1440px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
            alt="Div elementor shape"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-13.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-20.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-6.svg"
                : undefined
            }
          />
          <div
            className="heading-CONTACT"
            style={{
              left:
                screenWidth < 1440
                  ? "557px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "602px"
                  : screenWidth >= 1920
                  ? "842px"
                  : undefined,
            }}
          >
            CONTACT
          </div>
          <img
            className="link-7"
            style={{
              left:
                screenWidth < 1440
                  ? "534px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "580px"
                  : screenWidth >= 1920
                  ? "820px"
                  : undefined,
            }}
            alt="Link"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-3.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-6.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link.svg"
                : undefined
            }
          />
          <img
            className="link-8"
            style={{
              left:
                screenWidth < 1440
                  ? "634px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "680px"
                  : screenWidth >= 1920
                  ? "920px"
                  : undefined,
            }}
            alt="Link"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-4.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-7.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-1.svg"
                : undefined
            }
          />
          <img
            className="link-9"
            style={{
              left:
                screenWidth < 1440
                  ? "734px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "780px"
                  : screenWidth >= 1920
                  ? "1020px"
                  : undefined,
            }}
            alt="Link"
            src={
              screenWidth < 1440
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-5.svg"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-8.svg"
                : screenWidth >= 1920
                ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-2.svg"
                : undefined
            }
          />
        </div>
        <div
          className="heading-by-wrapper"
          style={{
            top:
              screenWidth < 1440
                ? "5124px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "4942px"
                : screenWidth >= 1920
                ? "4952px"
                : undefined,
            width:
              screenWidth < 1440
                ? "1349px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          <p
            className="heading-by"
            style={{
              left:
                screenWidth < 1440
                  ? "476px"
                  : screenWidth >= 1440 && screenWidth < 1920
                  ? "521px"
                  : screenWidth >= 1920
                  ? "761px"
                  : undefined,
            }}
          >
            © 2023 by TROLL. All rights reserved!
          </p>
        </div>
      </div>
    </div>
  );
};
