import { useState, useEffect } from 'react'

export const useFetch = (fetchType, API) => {
    const [data, setData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);

    useEffect(() => {
        setLoadingStatus(true)
        switch (fetchType) {
            case 'search':
                fetch(API)
                    .then((res) => res.json())
                    .then((data) => {
                        setData(() => {
                            if (data.length > 0) {
                                const dataArr = data.map(({ name }) => {
                                    const urlName = name.replace(/\s+/g, '-').toLowerCase()
                                    return { name, id: urlName }
                                });
                                return dataArr
                            }
                            else {

                                return []
                            }
                        })
                        setLoadingStatus(false)
                    })
                break;

            case 'base-details':
                fetch(API)
                    .then((res) => res.json())
                    .then((data) => {
                        setData(() => {
                            const { currencies, capital } = data[0]
                            const returnData = { currencies, capital }
                            return returnData
                        })
                        setLoadingStatus(false)
                    })
                break;

            default:

                break;
        }
    }, [API, fetchType]);

    return { loadingStatus, data };
};