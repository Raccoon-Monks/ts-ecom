'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

const Teste = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {

            try {

                const res = await fetch('http://localhost:3000/produtos', {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                })
                const json = await res.json();

                // console.log(JSON.stringify(json));
                // setData(json);

            } catch (error: any) {
                console.log('---------error.message---------')
                console.log(error.name); // ReferenceError
                console.log(error.message); // lalala is not defined
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className={styles.container}>
            {/* {data && data.map((d: any) => (
                <p>{d}</p>
            ))} */}
            <h1>Teste</h1>
        </div>
    )
}

export default Teste