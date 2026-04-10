import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    // working code
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://api.github.com/users/neeraj-kumar-94")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    return (
        <>
            <div className='bg-gray-600 text-center text-3xl text-white p-6'>
                Github Followers: {data?.followers}
                {data.avatar_url && (
                <img src={data.avatar_url} alt="Github User" width={300}/>
                )}
            </div>
        </>
    )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/neeraj-kumar-94');
    return response.json();
}