import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import QuoteList from './components/QuoteList.js'
import React from 'react';


function App() {

    return ( <
        div className = "App" >
        <
        Header / >
        <
        QuoteList / >
        <
        /div>
    );
}

export default App;