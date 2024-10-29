import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'; // Additional styling if needed
import { FaAngleRight } from 'react-icons/fa';
import { digitalQuality, holds, shiftLeaderPlanner, shiftPlanner, workflows, workFlowsManager } from './Icons';




const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuData = [
    {
      title: 'Workflows',
      icon: workflows(),
      submenu: [
        { title: 'Create', children :['Section of Questions','Form'] },
        { title: 'Libraries', children: ['Sections Library', 'Forms Library'] },
      ],
    },
    {
      title: 'Shift Planner',
      icon:shiftPlanner(),
      submenu: [
        { title: 'Shift Planner', children :['Start Planning'] },
        { title: 'Shift Leaders Planner', children : ['Start Planning'] },
        
      ],
    },
    {
      title: 'Shift Leader Planner',
      icon:shiftLeaderPlanner(),
      submenu: [
        { title: 'Shift Planner', children :['Start Planning'] },
        { title: 'Shift Leaders Planner', children : ['Start Planning'] },
      ],
    },
    {
        title: 'Workflows Manager ',
        icon:workFlowsManager(),
        submenu: [
          { title: 'Dashboard',children :['Build a Workflow'] },
          { title: 'Forms' ,children:['Create Form'] },
          { title: 'Task', children: ['Create Task'] },
        ],
      },
      {
        title: 'Digital Quality',
        icon:digitalQuality(),
        submenu: [
          { title: 'FCP1' },
          { title: 'CCP1' },
          { title: 'FCP2' },
        ],
      },
      {
        title: 'Holds',
        icon:holds(),
        submenu: [
          { title: 'Management' },
          { title: 'Design' },
          { title: 'Development', children: ['Frontend', 'Backend', 'QA'] },
        ],
      },
  ];

  return (
    <div className="menu-container">
      {menuData.map((menu, index) => (
        <div
          key={index}
          className="menu-item"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => {
            setActiveMenu(null);
            setActiveSubmenu(null);
          }}
        >
              <div className="menu-title">
              <div>{menu?.icon}</div>
              <div className='menu-text'>{menu.title}</div>
              </div>
          {activeMenu === index && (
            <div className="submenu">
              {menu.submenu.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="submenu-item"
                  onMouseEnter={() => setActiveSubmenu(subIndex)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <span className='subMenu-title'>{subItem.title}</span>
                  {subItem.children && <FaAngleRight className="arrow-icon" />}
                  {activeSubmenu === subIndex && subItem.children && (
                    <div className="submenu nested-submenu">
                      {subItem.children.map((childItem, childIndex) => (
                        <div key={childIndex} className="submenu-item">
                          {childItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;