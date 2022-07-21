import React from 'react';

import './App.css';
import {Header} from "./ui/components/Header";
import {TechnologiesStack} from "./ui/components/technologies/TechnologiesStack";

function App() {
    return (
        <div>
            <Header/>
            <TechnologiesStack/>
        </div>
    );
}

export default App;
