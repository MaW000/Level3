import React from 'react'

export default function Grid(props) {
    
    const styles = {backgroundColor: props.color}

    return (
        <div className='box' style={styles}></div>
    )
}

