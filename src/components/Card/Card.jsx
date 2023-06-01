import React from 'react'

import styles from './Card.module.css'

const Card = ({ name, image, status }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <div style={{ padding: '1rem' }}>
                <div>Name: {name}</div>
                <div>Status: {status}</div>
            </div>
        </div>
    )
}

export default Card