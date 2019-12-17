import React from 'react';


const withStyleChanged = BaseComponent => props => (
    <BaseComponent {...props} style={{background: "red", color: "white"}}>
    </BaseComponent>
)

export default withStyleChanged