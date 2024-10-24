import React from 'react';
import {SnippetsOutlined} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import './App.css'; // Import custom CSS
// import { ReactComponent as MyIcon } from './logo.svg';
import mySvg from './logo.svg';


const items = [
  {
    key: '1',
    icon: <SnippetsOutlined />,
    label: 'Form Builder',
    children: [
      {
        key: '1-1',
        label: 'Create',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Section of question',
          },
          {
            key: '2',
            label: 'Form',
          },
        ],
      },
      {
        key: '1-2',
        label: 'Libraries',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Sections Library',
          },
          {
            key: '4',
            label: 'Forms Library',
          },
        ],
      },
    ],
  },

];


const App = () => {
  const { SubMenu, ItemGroup } = Menu;

  const onClick = (e) => {
    console.log('click', e);
  };
  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
      <Sider width="7%" className='slider' style={{ backgroundColor: '#ffffff' }}>
        <div style={{textAlign:"center",margin:"5% 0% 15% 0%"}}>
        <img src={mySvg} alt="My SVG Icon" width="32px" height="32px" />
        </div>
        <Menu
          onClick={onClick}
          icon={null}
          mode="vertical"
        >
          {items.map((menuItem) => (
            <SubMenu
              key={menuItem.key}
              icon={menuItem.icon}
              title={menuItem.label }
            >
              {menuItem.children.map((subItem) => (
                subItem.type === 'group' ? (
                  <ItemGroup key={subItem.key} title={subItem.label}>
                    {subItem.children.map((groupItem) => (
                      <Menu.Item key={groupItem.key}>
                        {groupItem.label}
                      </Menu.Item>
                    ))}
                  </ItemGroup>
                ) : (
                  <Menu.Item key={subItem.key}>
                    {subItem.label}
                  </Menu.Item>
                )
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout style={{ height: "100vh", width: "100%" }}>
        <Header className='header'
        style={{  backgroundColor: '#ffffff', width: "100%" }}
        ></Header>
        <Content
          style={{  backgroundColor: '#ffffff', width: "100%" }}
        >
          <div>
            
          </div>
        </Content>
        <Footer
          style={{ backgroundColor: '#ffffff', width: "100%" }}
className='footer'
        >
          
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;