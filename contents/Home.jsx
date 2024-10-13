import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/utsav.jpg';
import Social from '../components/Social';

const Home = () => {
    return (
        <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic" />
            <ReactTypingEffect className="typingeffect" text={['I am Utsav Joshi', 'I am a Software Engineer']} speed={50} eraseDelay={700} />
            <Social />
        </div>
    );
};

export default Home;
