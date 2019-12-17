import React, { useState } from 'react';
import TabContext from '../../contexts/TabContext'

import './tabs.css'

function Tabs(props) {
    const { initialValue, className = '', children, ...restProps } = props
    const [ activeTab, changeTab ] = useState(initialValue)
    const tabProviderValue = { activeTab, changeTab };

    const classNames = `tabs ${className}`;

    return (
        <TabContext.Provider value={tabProviderValue}>
            <div className={classNames} {...restProps}>
                {children}
            </div>
        </TabContext.Provider>
    )

}

export default Tabs