import React from 'react';
import Widecard from '../components/Widecard';

const Education = () => {
    return (
        <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering" score="CGPA: 8.11" where="Delhi Technological Univesity" from="2021" to="Present (currently in final year)" />
            <Widecard title="CBSE" where="Green Valley international Public School" score="85.4%" from="2019" to="2020" />
            <Widecard title="CBSE" where="St. Gregorios School" score="93%" from="2017" to="2018" />
        </div>
    );
};

export default Education;
