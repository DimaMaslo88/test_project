import React from 'react';

import './App.css';
import {Header} from "./ui/components/Header";
import {TechnologiesStack} from "./ui/components/technologies/TechnologiesStack";
import {VettedSkills} from "./ui/components/technologies/skills/VettedSkills";

function App() {
    return (
        <div>
            <Header/>
            <TechnologiesStack/>
            <VettedSkills/>
        </div>
    );
}

export default App;
