import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import './App.css'; // Import custom CSS
// import { ReactComponent as MyIcon } from './logo.svg';
import mySvg from './logo.svg';
import CustomVerticalMenu from './AltMenu';


const App = () => {
  const contentBoxes = [
    { title: "Forms Builder", icon: "https://mfgproplus.qa.pepsico.com/app/forms/questions_icon.svg" },
    { title: "Shift Planner", icon: "https://mfgproplus.qa.pepsico.com/app/forms/form_icon.svg", },
    , { title: "Shift Lead Planner", icon: "https://mfgproplus.qa.pepsico.com/app/forms/sections_library_icon.svg", },
    { title: "Workflows Manager", icon: "https://mfgproplus.qa.pepsico.com/app/forms/forms_library_icon.svg" }

  ]
  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
      <Sider width="7%" className='slider' style={{ backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: "center", margin: "5% 0% 15% 0%" }}>
          <img src={mySvg} alt="My SVG Icon" width="32px" height="32px" />
        </div>
        <CustomVerticalMenu />
      </Sider>

      <Layout style={{ height: "100vh", width: "100%" }}>
        <Header className='header'
          style={{ backgroundColor: '#f2f1ff', width: "100%",borderBottom:"1.5px solid #d0cdf5" }}
        ></Header>
        <Content
          style={{ backgroundColor: '#f2f1ff', width: "100%",borderBottom:"1.5px solid #d0cdf5" }}
          >
          <div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center",margin:"2%" }}>
              {contentBoxes?.map(itm => {
                return (<div className='contentBox'>
                  <div className='contentBoxes_icon'>
                    <img src={itm.icon} alt="My SVG Icon" height="45px" width="71px" />
                  </div>
                  <div className='contentBoxes_title'>{itm?.title}
                  </div>

                  <div className='contentBoxes_context'>{itm?.context}
                  </div>
                  {/* <Button type="primary" className="contentBoxes_Btn">
                  {itm?.buttonLabel}
                    </Button> */}
                  {/* <div>
                     <Button type="primary" className="contentBoxes_Btn">
                  {itm?.buttonLabel}
                    </Button>
                    </div> */}
                </div>)
              })}
            </div>
          </div>
        </Content>
        <Footer
          style={{ backgroundColor: '#f2f1ff', width: "100%",borderBottom:"1.5px solid #d0cdf5" }}
          className='footer'
        >

        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;