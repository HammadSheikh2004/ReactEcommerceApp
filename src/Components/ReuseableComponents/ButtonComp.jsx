import { Button } from '@mui/material'
import React from 'react'

const ButtonComp = ({ btnTitle, onclick }) => {
    return (
        <>
            <Button size="small" variant='contained' color='primary' onClick={ onclick }>{btnTitle}</Button>
        </>
    )
}

export default ButtonComp