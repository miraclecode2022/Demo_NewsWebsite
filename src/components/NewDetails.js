import React, { Component } from 'react';
import Header from '../components/Header';
import NewRelated from '../components/NewRelated';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, NavLink,Swtich } from "react-router-dom";
import dl from '../data/dulieu.json'

class NewDetails extends Component {
    // eslint-disable-next-line
    constructor(props, context) {
        super(props, context);
    }
    

    render() {
        var dem = 0;
        console.log(this.props);
        var x = parseInt(this.props.match.params.id);
        return (
            // eslint-disable-next-line
                dl.map((value, key) => {
                    if(value.id === x)
                    {
                        return (
                            <div key={key}>
                        
                            <Header/>
                            
                            <div className="container" >
                            <h1 className="my-4">
                            {value.tieuDe}
                            </h1>
                            <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid display-block" src={value.anh} alt="hinh" />
                            </div>
                            <div className="col-md-12">
                                <h3 className="my-3"> {value.trichDan}</h3>
                                <p>{value.noiDung}</p>
                            </div>
                            </div>
                             {/* /.row */}
                             <h3 className="my-4">Tin liên quan</h3>
                                <div className="row">
                                {
                                    // eslint-disable-next-line
                                    dl.map((value,key) => {
                                        if(value.id !== x){
                                            if(dem <= 1){
                                                dem++;
                                                return ( 
                                                    <NewRelated key={key}
                                                    anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan} tinId={value.id}
                                                    />
                                                );
                                            }
                                        }
                                    })
                                }
                                </div>
                        </div>
                    {/* /.container */}
                    </div>
                        )
                    }
                })       
        );
    }
}

export default NewDetails;