import { useCallback } from "react";
import "./Test.css";
const Test = () => {
  const onHomeScreenCustomAppIconContainerClick = useCallback(() => {
    // Please sync "Home Screen - Widget Small - Light" to the project
  }, []);

  return (
    <div
      className="home-screen-custom-app-icon"
      //   onClick={onHomeScreenCustomAppIconContainerClick}
    >
      <div className="home-screen-light">
        {/* <img className="wallpaper-icon" alt="" src="//logo192.png" /> */}
        <div className="dock-background" />
        <div className="page-control-dot">
          <img
            className="page-control-dot1"
            alt=""
            // src="/page-control-dot.svg"
          />
          <img
            className="page-control-dot2"
            alt=""
            // src="/page-control-dot.svg"
          />
          <img
            className="page-control-dot3"
            alt=""
            // src="/page-control-dot1.svg"
          />
        </div>
        <div className="search-field">
          <div className="platter" />
          <div className="label">􀊫 Search</div>
        </div>
        {/* <img className="app-icons" alt="" src="/logo192.png" /> */}
        <div className="bars-status-bar-iphone">
          <div className="home-screen-light">
            <div className="home-screen-light">
              <div className="battery">
                {/* <img className="cap-icon" alt="" src="/cap.svg" /> */}
                <div className="capacity" />
              </div>
              {/* <img className="wifi-icon" alt="" src="/wifi.svg" /> */}
              <img
                className="cellular-connection-icon"
                alt=""
                // src="/cellular-connection.svg"
              />
              <div className="time">
                <div className="time-blue-task">
                  <div className="time1">10:33</div>
                </div>
                <div className="time-red-task">
                  <div className="time1">10:33</div>
                </div>
                <div className="time-green-task">
                  <div className="time1">10:33</div>
                </div>
                <div className="time-light">
                  <div className="time4">9:41</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="your-app">
        <div className="label1">App Name</div>
        <img className="app-icon" alt="" src="/logo192.png" />
        <div className="notification-dot">
          {/* <img className="notification-dot-child" alt="" src="/ellipse-1.svg" /> */}
          <div className="div">2</div>
        </div>
      </div>
      <div className="display-shape" />
    </div>
  );
};

export default Test;
