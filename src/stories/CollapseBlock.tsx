import React, { useState } from "react";
import "./collapseBlock.css";

interface CollapseBlockProps {
    title: string;
    collapsed?: boolean;
}

const CollapseBlock = (props: React.PropsWithChildren<CollapseBlockProps>) => {
    const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

    return (
        <div className="collapse-block">
            <div className="collapse-block-title" onClick={() => setIsCollapsed(!isCollapsed)}>
                {props.title}
            </div>
            {!isCollapsed && <div>{props.children}</div>}
        </div>
    );
};

export default CollapseBlock;
