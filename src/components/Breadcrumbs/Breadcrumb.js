import React, { Fragment } from 'react'

import './breadcrumb.css';

function Breadcrumb(props) {
    const { className = '', children, ...restProps } = props
    const classNames = `breadcrumb ${className}`;

    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )

}

function BreadcrumbItem(props) {
    
    const { active, className = '', children, ...restProps } = props;
    const itemClassNames = `breadcrumb-item ${active ? 'active' : ''} ${className}` 

    return (
        <Fragment>
            <a className={itemClassNames} {...restProps}>
                {children}
            </a>
            <span className="breadcrumb-separator">
                >
            </span>
        </Fragment>
    )

}

Breadcrumb.Item = BreadcrumbItem

export { Breadcrumb, BreadcrumbItem }