import React, { useContext } from 'react'
import TabContext from '../../contexts/TabContext'

import './tabs.css'

function TabPanel(props) {
    const { name, className = '', children, ...restProps } = props
    const tabContext = useContext(TabContext)

    const classNames = `tab-panel ${className}`

    return (
        tabContext.activeTab === name && (
            <div className={classNames} {...restProps}>
                {children}
            </div>
        )
    )
}

export default TabPanel