import React from 'react';
import { Link } from "react-router-dom";

const Navitem = ({ item, tolink, activec }) => {
    return (
        <li id={item}>
            <Link to={tolink} onClick={() => activec(item)}>
                {item}
            </Link>
        </li>
    );
};

export default Navitem;
