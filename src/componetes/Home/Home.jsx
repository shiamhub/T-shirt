import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>fgfdvzf</h2>
        </div>
    );
};

export default Home;