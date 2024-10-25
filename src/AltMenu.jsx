import React from "react";
import { Button, Popover } from "antd";
import './SideNav.css';
import fromsBuilderIcon from "./formsBuilder.svg"
import shiftPlannerIcon from "./shiftPlanner.svg"
import shiftLeaderPlannerIcon from "./shiftLeaderPlanner.svg"
import workFlowsManagerIcon from "./workFlowsManager.svg"
import { RightOutlined } from '@ant-design/icons';

const CustomVerticalMenu = () => {
    const items = [
        {
          key: '1',
          icon: fromsBuilderIcon,
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
          flow:"custom"
        },
        {
          key: '2',
          icon: shiftPlannerIcon,
          label: 'Shift Planner',
          children: [
            {
              key: '2-1',
              label: 'Shift Planner',
              type: 'group',
              children: [
                {
                  key: '1',
                  label: 'Start Planning',
                },
                
              ],
            },
            {
              key: '2-2',
              label: 'Shift Leaders Planner',
              type: 'group',
              children: [
                {
                  key: '3',
                  label: 'Start Planning',
                },
                
              ],
            },
          ],
          flow:"custom"
        },

        {
            key: '1',
            icon: shiftLeaderPlannerIcon,
            label: 'Shift Leader Planner',
            children: [
              {
                key: '1-1',
                label: 'Shift Planner',
                type: 'group',
                children: [
                  {
                    key: '1',
                    label: 'Start Planning',
                  },
                
                ],
              },
              {
                key: '1-2',
                label: 'Shift Leaders Planner',
                type: 'group',
                children: [
                  {
                    key: '3',
                    label: 'Start Planning',
                  },
                
                ],
              },
            ],
            flow:"custom"
          },
          {
            key: '1',
            icon: workFlowsManagerIcon,
            label: 'Workflows Manager',
            children: [
              {
                key: '1-1',
                label: 'Dashboard',
                type: 'group',
                children: [
                  {
                    key: '1',
                    label: 'Build a Workflow',
                  },
                  
                ],
              },
              {
                key: '1-2',
                label: 'Workflows',
                type: 'group',
                
              },

              {
                key: '1-2',
                label: 'TasksLibrary',
                type: 'group',
                
              },
            ],
            flow:"custom"
          },

      
    ];
    const rendercustomPopoverContent = (children) => {
        return (
            <div className="submenu-content">
                {children && children?.map((child) => (
                    <Popover
                        key={child.key}
                        trigger="hover"
                        placement="rightTop"
                        overlayInnerStyle={{ padding: 0, borderRadius:"5px"}} // removes padding
                        arrow={false}
                        >
                        <div>
                            <div className="submenu-label">{child.label}</div>
                            <div>
                                {child?.children?.map((item) => (
                                    <div>
                                        <Button type="text" className="submenu-button" >
                                            <span style={{textAlign:"left"}}>{item?.label}</span>
                                        </Button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </Popover>
                ))}
            </div>
        );
    }

    const renderPopoverContent = (children) => (
        <div className="submenu-content">
            {children && children?.map((child) => (
                <div style={{ marginLeft: children?.type === "group" ? "20px" : "0" }}>
                <Popover
                    key={child.key}
                    content={child.children ? renderPopoverContent(child.children) : null}
                    trigger="hover"
                    placement="rightTop"
                    arrow={false}
                    overlayInnerStyle={{ padding: 0, borderRadius:"5px"}} // removes padding

                >
                    <Button type="text" className="submenu-button" style={{width:"175px"}}>
                        <span>{child.label}</span>
                       {child.children && <div><RightOutlined style={{ fontSize: '10px' }}/></div>}
                    </Button>
                </Popover>
                </div>
            ))}
        </div>
    );
    // border:"1px solid #cdcdcd",
    const renderMenuItems = (menuItems) =>
        menuItems.map((item) => (
            <div key={item.key}>
                <Popover 
                    content={item.children ? item.flow === "custom"? renderPopoverContent(item.children) : rendercustomPopoverContent(item.children): null} 
                    trigger="hover"
                    title={null}
                    placement="right"
                    arrow={false}
                    overlayInnerStyle={{ padding: 0, borderRadius:"5px"}} // removes padding
                >
                    <Button type="text" className="my-custom-button">
                        <div className="my-custom-button-icon">
                            <img src={item.icon} alt="My SVG Icon" height="30px" width="30px" />
                        </div>
                        <div className="my-custom-button-text">{item.label}</div>
                    </Button>
                </Popover>
            </div>
    ));

    return <>{renderMenuItems(items)}</>;
};

export default CustomVerticalMenu;
