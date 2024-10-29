import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import './App.css'; // Import custom CSS
import mySvg from './assets/logo.svg';
import BootStrapMenu from "./Components/bootMenu"
import DJButtonWithPopover from './Components/logoutBtn';
import { GrCluster, GrDatabase, GrCompare, GrShield, GrInbox, GrCompliance } from "react-icons/gr";

const App = () => {
  const contentBoxes = [
    { title: "Forms Builder", color: "#6e6c9a", fontColor: "#333333", icon: <GrDatabase />,content:"content dafkdsfjk kldjsflk jljds" },
    { title: "Shift Planner", color: "#d8bcbd", fontColor: "#333333", icon: <GrCluster /> },
    { title: "Shift Leader Planner", color: "#a37f7e", fontColor: "#333333", icon: <GrCompare /> },
    { title: "Workflows Manager", color: "#6e6c9a", fontColor: "#333333", icon: <GrCompliance /> },
    { title: "Digital Quality", color: "#504a7a", fontColor: "white", icon: <GrInbox /> },
    { title: "Holds", color: "#2c2039", fontColor: "white", icon: <GrShield /> },

  ]
  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
      <Sider width="7%" className='slider' style={{ backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: "center", margin: "5% 0% 15% 0%" }}>
          <img src={mySvg} alt="My SVG Icon" width="32px" height="32px" />
        </div>
        <div style={{ textAlign: "center", margin: "5% 0% 15% 0%" }}>
          <img src=" https://sso.mypepsico.com/login/images/pepsico.png" alt="My SVG Icon" width="80px" height="20px" />
        </div>
        <BootStrapMenu />
      </Sider>

      <Layout style={{ height: "100vh", width: "100%" }}>
        <Header className='header'
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5", backgroundColor: "#f5f5f5" }}
        >
          <div className='header-container'>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" value="LE-USA025" disabled>
                <option selected>Frito-LayInc.</option>
              </select>

            </div>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" disabled>
                <option selected>LE-USA025</option>

              </select>

            </div>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" disabled>
                <option selected>LE-USA025</option>
              </select>
            </div>
            <div>
              <DJButtonWithPopover />
            </div>


          </div>
        </Header>
        <Content
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5" }}
        >
          <div>
            <div className='contentBox_cont'>
              {contentBoxes?.map(itm => {
                return (

                  <div className='contentBox' >

                    <div className='contentBoxes_icon' style={{ backgroundColor: itm?.color, borderColor: itm?.color, color: itm?.fontColor }}>
                      {itm?.icon}
                    </div>
                    <div className='contentBoxes_title'>{itm?.title}
                    </div>
                    <div className='contentBoxes_content'>{itm?.content}
                    </div>


                  </div>)
              })}
            </div>
          </div>
        </Content>
        <Footer
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5" }}
          className='footer'
        >
          <div style={{ textAlign: "center", padding: "10px", fontSize: "0.9em", color: "#6c757d" }}>
            © 2024 YourCompanyName. All rights reserved. | Privacy Policy | Terms of Service
          </div>



        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;