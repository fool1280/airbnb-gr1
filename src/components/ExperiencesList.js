import React, { useState, useEffect } from "react";

export default function ExperiencesList() {
    const [exps, setExps] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetch("http://localhost:5000/experiences");
            const result = await data.json();
            setExps(result);
        }
        fetchData();
    }, []);
    if (!exps) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Experiences</h1>
            {exps.map((e) => (
                <Experience {...e} />
            ))}
        </div>
    );
}

const Experience = ({ title, pictureUrl, country, duration, price }) => (
    <div>
        <h2>{title}</h2>
        <img src={pictureUrl} />
        <h3>{country}</h3>
        <h4>Starting from ${price}</h4>
        <h4>{duration} hours</h4>
    </div>
);
