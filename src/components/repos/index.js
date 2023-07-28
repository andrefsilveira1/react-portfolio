import React, { useEffect, useState } from 'react';
import "./index.css";

export default function Repositories() {
    const startData = {
        name: ''
    }
    const [data, setData] = useState(startData);
    const [name, setName] = useState('');
    useEffect(() => {
        fetch("https://api.github.com/users/andrefsilveira1/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log("Result:", result)
                    setData(result)
                }, (error) => { console.log("err:", error) }
            )
    }, [])
    useEffect(() => {
        fetch("https://api.github.com/users/andrefsilveira1").then((res) => res.json)
            .then(
                (result) => {
                    console.log("RES:", result)
                    setName(result.login);

                }, (error) => { console.log(error) }
            );

    }, []);
    return (
        <>
            <div>
                <section className="mb-12" id="projects">
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    <div>
                        {data.length > 0 && data.map((item, index) => (
                            <a target='_blank' href={item.svn_url} className='no-underline text-black'>
                                <div className="repo bg-gray-100 p-4 rounded m-5 shadow" key={index}>
                                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}