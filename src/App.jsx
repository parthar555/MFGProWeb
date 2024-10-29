import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import './App.css'; // Import custom CSS
import mySvg from './assets/logo.svg';
import BootStrapMenu from "./Components/bootMenu"
import DJButtonWithPopover from './Components/logoutBtn';
import { GrCluster, GrDatabase, GrCompare, GrShield, GrInbox, GrCompliance } from "react-icons/gr";
import { icons } from 'antd/es/image/PreviewGroup';

const App = () => {
  const contentBoxes = [
    { title: "Forms Builder", color: "#6e6c9a", fontColor: "white", icon: <GrDatabase />,content:"Create forms for operators to work with and report issues in real time" },
    { title: "Shift Planner", color: "#d8bcbd", fontColor: "white", icon: <GrCluster /> ,content:"Plan and assign operators for a shift"},
    { title: "Shift Leader Planner", color: "#a37f7e", fontColor: "white", icon: <GrCompare />,content:"Plan the shifts assigning production lines to supervise" },
    { title: "Workflows Manager", color: "#6e6c9a", fontColor: "white", icon: <GrCompliance /> ,content:"Build the workflows that staff will perform during their shift"},
    { title: "Digital Quality", color: "#504a7a", fontColor: "white", icon: <GrInbox />,content :"Tracks quality in digital forms" },
    { title: "Holds", color: "#2c2039", fontColor: "white", icon: <GrShield />,content : "Investigate and complete holds process" },

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