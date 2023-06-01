import { useState, useEffect, useRef, useCallback } from 'react'

const useInfiniteScroll = () => {
    const [page, setPage] = useState(1)
    const lastItemRef = useRef(null)

    const handleObserver = useCallback((entries) => {
        const [target] = entries
        if (target.isIntersecting) {
            console.log("reached the end")
            console.log("page is ", page)
            setPage(prev => prev + 0.5)
        }
    }, [])

    useEffect(() => {

        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(handleObserver, option);

        if (lastItemRef.current) observer.observe(lastItemRef.current);

    }, [handleObserver])

    return { lastItemRef, page }
}

export default useInfiniteScroll