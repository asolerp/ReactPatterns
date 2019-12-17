import React, { useContext } from 'react'
import TabContext from '../../contexts/TabContext'

import './tabs.css'

function Tab(props) {
    const { name, className = '', onClick = () => {}, children, ...restProps } = props
    const tabContext = useContext(TabContext)

    const classNames = `
        tab
        ${tabContext.activeTab === name ? 'active' : ''}
        ${className}
    `

    const handleClick = event => {
        tabContext.changeTab(name);
        onClick(event)
    }

    return (
        <span className={classNames} onClick={handleClick} {...restProps}>
            {children}
        </span>
    )

}

export default Tab