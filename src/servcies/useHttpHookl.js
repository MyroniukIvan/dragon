import {useEffect, useState} from "react";


export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true);
        const existingData = window.localStorage.getItem("data")
        if (existingData) {
            setLoading(false);
            setData(JSON.parse(existingData))
        }
        fetch(url).then((response) => response.json())
            .then((data) => {
                window.localStorage.setItem("data", JSON.stringify(data))
                setData(data)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url])
    return {data, loading, error}
}