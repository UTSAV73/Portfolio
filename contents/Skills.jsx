import React, { useState } from 'react';

const Skills = () => {
    const [myskills] = useState(['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'FIREBASE', 'MIT APP']);

    return (
        <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
                {myskills.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
