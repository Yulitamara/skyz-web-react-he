import "../assets/scss/_skyz-demo.scss";
import personImge from "../assets/imgs/person.jpg";
import { useState } from "react";
import Table from "./Table";

const Demo = () => {
  // Create an array of booleans to manage the open state of each box
  const [boxOpenStates, setBoxOpenStates] = useState({
    connections: false,
    communication: false,
    // Add more keys for other boxes here
  });

  const [openBox, setOpenBox] = useState(null); // Track the currently open box

  const openBoxHandler = (boxKey) => {
    setOpenBox(boxKey);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebarDemo = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="skyz-demo">
      <h1>
        Live Demo! Try it out
        <span className="material-symbols-outlined">arrow_downward</span>
        {/* <br /> */}
        <span className="material-symbols-outlined phone-icon">
          phone_iphone
        </span>
      </h1>
      <div className="demo-container">
        <div className="skyz-demo__navbar">
          <div className="navbar__menu">
            <span
              className="material-symbols-outlined demo-side-toggle-"
              onClick={handleToggleSidebarDemo}
            >
              menu
            </span>
            <div className="navbar__menu--logo">
              <span className="material-symbols-outlined">home</span>
              <div>
                Skyz<span>CRM</span>
              </div>
            </div>
          </div>
          <div className="navbar__search">
            <div className="navbar__search--input-container">
              <input
                type="text"
                className="input"
                placeholder="Search..."
                id="searchInput"
              />
            </div>
            <div className="navbar__search--links-container">
              <div className="round-btn round-btn-primary">
                <span className="material-symbols-outlined"> search </span>
              </div>
              <div className="round-btn round-btn-secondary">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
          </div>
          <div className="navbar__personal">
            <span
              className="material-symbols-outlined fill-icon"
              id="change-color"
            >
              circle
            </span>
            <div className="darkmode-toggle">
              <button aria-label="darkmode-toggle" id="darkmodeToggle">
                <span className="material-symbols-outlined">dark_mode</span>
              </button>
            </div>
            <div className="navbar__personal--name">Impact System</div>
            {/* <div className="round-img-container"> */}
            {/* <img src="./up/imgs/passport.webp" alt=""> */}
            {/* </div> */}
          </div>
          <div className="navbar__hamburger-menu">
            <span className="material-symbols-outlined hamburger-menu">
              menu
            </span>
          </div>
        </div>
        <div className="navbar__overlay"></div>

        <div className="new-container">
          <div className={`skyz-demo__sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="sidebar__content">
              <ul className="sidebar__content--list">
                <li className="create-item">
                  <a href="#">
                    <span className="material-symbols-outlined">add</span>
                    <div>Create</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-symbols-outlined">home</span>
                    <div>SkyzCRM</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-symbols-outlined">category</span>
                    <div>Actions</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-symbols-outlined">
                      account_balance_wallet
                    </span>
                    <div>Acounts</div>
                    <div
                      className="side-nav__content--list__item--collapse active"
                      id="acountsCollapse"
                    >
                      <span>All</span>
                      <span>Opened</span>
                      <span>SLA Exception</span>
                      <span>In Progress</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-symbols-outlined">
                      attach_money
                    </span>
                    <div>Debit Order</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-symbols-outlined">chat</span>
                    <div>Chat</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-symbols-outlined">handyman</span>
                    <div>Service</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="skyz-demo__main">
            <div className="card-container">
              <div className="card">
                <div className="card-header">
                  <div className="top">
                    <div className="left">
                      <div className="title">
                        <span className="round-img-container">
                          <img src={personImge} alt="person image" />
                        </span>
                        <span>Deandra Reynolds</span>
                      </div>
                      <div className="flex-container title-right">
                        <span className="small-chip red">Manager</span>
                        <span className="small-chip green">Sales</span>
                      </div>
                    </div>
                    <div className="right">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                      {/* <span className="material-symbols-outlined">close</span> */}
                    </div>
                  </div>
                </div>
                {openBox === null && (
                  <div className="card__boxes">
                    <div className="card__boxes--box">
                      <div className="card__boxes--box__header">
                        <div className="card__boxes--box__header--title">
                          <span className="material-symbols-outlined">
                            link
                          </span>
                          <span>Connections</span>
                        </div>
                        <div className="card__boxes--box__header--btns">
                          <span
                            className="material-symbols-outlined"
                            onClick={() => openBoxHandler("connections")}
                          >
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div className="card__boxes--box__content">
                        <div className="card__boxes--box__content--fields">
                          <span>Figma, employee</span>
                          <span className="material-symbols-outlined stop-icon">
                            stop
                          </span>
                          <span>Lina Dee</span>
                          <span className="material-symbols-outlined stop-icon">
                            stop
                          </span>
                          <span>Max Reynolds, manager</span>
                        </div>
                      </div>
                    </div>
                    <div className="card__boxes--box">
                      <div className="card__boxes--box__header">
                        <div className="card__boxes--box__header--title">
                          <span className="material-symbols-outlined">
                            phone
                          </span>
                          <span>Communication</span>
                        </div>
                        <div className="card__boxes--box__header--btns">
                          <span
                            className="material-symbols-outlined"
                            onClick={() => openBoxHandler("communication")}
                          >
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div className="card__boxes--box__content">
                        <div className="card__boxes--box__content--fields">
                          <span>Work, +972-38728829</span>
                          <span className="material-symbols-outlined stop-icon">
                            stop
                          </span>
                          <span>Private, +972-52390378</span>
                        </div>
                      </div>
                    </div>
                    <div className="card__boxes--box">
                      <div className="card__boxes--box__header">
                        <div className="card__boxes--box__header--title">
                          <span className="material-symbols-outlined">
                            home
                          </span>
                          <span>Addresses</span>
                        </div>
                        <div className="card__boxes--box__header--btns">
                          <span className="material-symbols-outlined">
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div className="card__boxes--box__content">
                        <div className="card__boxes--box__content--fields">
                          <span>Halel 90, Jerusalem, 91827</span>
                          <span className="material-symbols-outlined stop-icon">
                            stop
                          </span>
                          <span>Ben Gurion 24, Remat Gan</span>
                        </div>
                      </div>
                    </div>
                    <div className="card__boxes--box">
                      <div className="card__boxes--box__header">
                        <div className="card__boxes--box__header--title">
                          <span className="material-symbols-outlined">
                            info
                          </span>
                          <span>More Info</span>
                        </div>
                        <div className="card__boxes--box__header--btns">
                          <span className="material-symbols-outlined">
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div className="card__boxes--box__content">
                        <div className="card__boxes--box__content--fields">
                          <span>Doctor</span>
                          <span className="material-symbols-outlined stop-icon">
                            stop
                          </span>
                          <span>24/08/1989</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="card__open-boxes">
                  {openBox === "connections" && (
                    <div className="card__open-boxes--box">
                      <div className="card-header">
                        <div className="top">
                          <div className="left">
                            <div className="title medium-title">
                              <span className="material-symbols-outlined title-icon">
                                link
                              </span>
                              <span>Connections</span>
                            </div>
                            <div className="flex-container title-right">
                              <div className="filter-tag">
                                <span className="material-symbols-outlined">
                                  vertical_split
                                </span>
                              </div>
                              <div className="filter-tag">
                                <span className="material-symbols-outlined">
                                  assignment
                                </span>
                                <div>
                                  <span className="material-symbols-outlined">
                                    arrow_drop_down
                                  </span>
                                </div>
                              </div>
                              <div className="filter-tag">
                                <span className="material-symbols-outlined">
                                  search
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="right">
                            <div className="round-btn round-btn-secondary">
                              <span className="material-symbols-outlined">
                                add
                              </span>
                            </div>
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                            <span
                              className="material-symbols-outlined"
                              onClick={() => openBoxHandler(null)}
                            >
                              close
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card__open-boxes--box__content">
                        <Table />
                      </div>
                    </div>
                  )}
                  {openBox === "communication" && (
                    <div className="card__open-boxes--box">
                      <div className="card-header">
                        <div className="top">
                          <div className="left">
                            <div className="title medium-title">
                              <span className="material-symbols-outlined title-icon">
                                call
                              </span>
                              <span>Communication</span>
                            </div>
                            <div className="flex-container title-right">
                              <div className="filter-tag">
                                <span className="material-symbols-outlined">
                                  vertical_split
                                </span>
                              </div>
                              <div className="filter-tag">
                                <span className="material-symbols-outlined">
                                  assignment
                                </span>
                                <div>
                                  <span className="material-symbols-outlined">
                                    arrow_drop_down
                                  </span>
                                </div>
                              </div>
                              <div className="filter-tag">
                                <span className="material-symbols-outlined">
                                  search
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="right">
                            <div className="round-btn round-btn-secondary">
                              <span className="material-symbols-outlined">
                                add
                              </span>
                            </div>
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                            <span
                              className="material-symbols-outlined"
                              onClick={() => openBoxHandler(null)}
                            >
                              close
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card__open-boxes--box__content">
                        <Table />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
