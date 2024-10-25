import React from "react";
import { Button, Popover } from "antd";
import { SnippetsOutlined } from "@ant-design/icons";
import './SideNav.css';
import formsBuilders from './formsBuilder.svg';

const CustomVerticalMenu = () => {
    const items = [
        {
            key: "1",
            icon: <SnippetsOutlined />,
            label: "Forms Builder",
            children: [
                {
                    key: "1-1",
                    label: "Create",
                    type: "group",
                    children: [
                        { key: "1-1-1", label: "Section of question" },
                        { key: "1-1-2", label: "Form" },
                    ],
                },
                {
                    key: "1-2",
                    label: "Libraries",
                    type: "group",
                    children: [
                        { key: "1-2-1", label: "Sections Library" },
                        {
                            key: "1-2-2",
                            label: "Forms Library",
                            type: "group",
                            children: [
                                { key: "1-2-2-1", label: "Form A" },
                                { key: "1-2-2-2", label: "Form B" },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

  

    const renderMenuItems = (menuItems) =>
        menuItems.map((item) => (
            <div key={item.key} style={{ marginLeft: item.type === "group" ? "20px" : "0" }}>
                <Popover
                    content={item.children ? renderPopoverContent(item.children) : null}
                    trigger="hover"
                    placement="right"
                >
                    <Button type="text" className="my-custom-button">
                        <div className="my-custom-button-icon">
                            <img src={formsBuilders} alt="My formsBuilders Icon" height="30px" width="30px" />
                        </div>
                        <div className="my-custom-button-text">{item.label}</div>
                    </Button>
                </Popover>
            </div>
    ));

    return <>{renderMenuItems(items)}</>;
};

export default CustomVerticalMenu;
