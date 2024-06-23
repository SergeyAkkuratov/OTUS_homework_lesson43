import React, { useState } from "react";
import "./collapseBlock.css";

interface CollapseBlockProps {
    title: string;
    collapsed?: boolean;
}

const CollapseBlock = (props: React.PropsWithChildren<CollapseBlockProps>) => {
    const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

    return (
        <div data-testid="collapse-block" className="collapse-block">
            <div data-testid="collapse-block-title" className="collapse-block-title" onClick={() => setIsCollapsed(!isCollapsed)}>
                {props.title}
            </div>
            {!isCollapsed && <div data-testid="collapse-block-inner">{props.children}</div>}
        </div>
    );
};

export default CollapseBlock;
