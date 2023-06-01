import { useState } from 'react'

import styles from './Card.module.css'
import useLocalStorage from '../../hooks/useLocalStorage'

const Card = ({ id, name, image, status }) => {

    const { addCard, getCards, removeCard } = useLocalStorage()

    const [bookmarked, setBookmarked] = useState(getCards().find(card => card.id === id))

    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <div style={{ padding: '1rem' }}>
                <div>Name: {name}</div>
                <div>Status: {status}</div>
                {
                    bookmarked ?
                        <button onClick={() => { removeCard(id); setBookmarked(false) }} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>unmark</button>
                        :
                        <button onClick={() => { addCard({ id, name, image, status }); setBookmarked(true) }} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>bookmark</button>
                }
            </div>
        </div>
    )
}

export default Card