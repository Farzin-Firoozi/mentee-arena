import { useState, useEffect } from 'react'

const useCharachters = (page) => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const abortController = new AbortController()

        setLoading(true)

        fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
            signal: abortController.signal
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCharacters(prevChars => [...prevChars, ...res.results])
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })

        return () => {
            abortController.abort()
        }
    }, [page])

    return { characters, loading }
}

export default useCharachters