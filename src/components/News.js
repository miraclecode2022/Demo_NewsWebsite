import React, { Component } from 'react';
import '../css/News.css'
import Header from '../components/Header'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, NavLink,Swtich } from "react-router-dom";
import NewItem from './NewItem';
import dl from '../data/dulieu.json'

class News extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="row martop">
                    {
                        dl.map((value,key) => { return ( <NewItem key={key} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan} tinId={value.id}/> ) })
                    }
                    
                </div>
                
            </div>
        );
    }
}

export default News;