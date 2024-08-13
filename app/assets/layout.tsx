import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='p-8 overflow-hidden'>{children}</div>
    )
}

export default layout