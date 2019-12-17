import React from 'react';

const withNameOverride = BaseComponent => props => (
    <BaseComponent name="Texto cambiado" {...props}>
    </BaseComponent>
)

export default withNameOverride