import React, { Component } from 'react';
import Header from '../components/Header'
import '../css/Contact.css'
import Redirect from 'react-router-dom/Redirect'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDirect : false,
            fSelect : "fCusVip"
        }
    }
    HandleInputChange = (event) => {
        const name = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [name] : giatri
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isDirect : true,
            
        });
    }
    getValueInput = () => {
        var Noidung = "";
        Noidung += "Name nhận đc là : " + this.state.fName; 
        Noidung += "Email nhận đc là : " + this.state.fEmail;
        Noidung += "Tell nhận đc là : " + this.state.fTel;
        Noidung += "Mess nhận đc là : " + this.state.fMess;
        Noidung += "Select nhận đc là : " + this.state.fSelect;
        Noidung += "fAnh nhận đc là : " + this.state.fAnh;
        return Noidung;
    }

    isFileChange = (event) => {
        const tenanh = event.target.files[0].name;
        this.setState({
            fAnh : tenanh
        });
    }

    render() {
        if(this.state.isDirect === true){
            console.log(this.state);
            return <Redirect to="/" />;
        }
        return (
            <div>
                <Header/>
                <section id="contact">
                <div className="section-content">
                <h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                </div>
                <div className="contact-section">
                <div className="container">
                    <form>
                    <div className="col-md-6 form-line">
                        <div className="form-group">
                        <label htmlFor="exampleInputUsername">Your name</label>
                        <input type="text" name="fName" className="form-control" placeholder=" Enter Name" onChange={(event) => this.HandleInputChange(event)} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email Address</label>
                        <input type="email" name="fEmail" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" onChange={(event) => this.HandleInputChange(event)}/>
                        </div>	
                        <div className="form-group">
                        <label htmlFor="telephone">Mobile No.</label>
                        <input type="tel" name="fTel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." onChange={(event) => this.HandleInputChange(event)}/>
                        </div>
                        <div className="form-group">
                              <label htmlFor="select"> Type Nghành </label>
                              <select className="form-control" name="fSelect" value={this.state.fSelect} onChange={(event) => this.HandleInputChange(event)}>
                                <option value="fCusPre"> Khách Hàng Premium </option>
                                <option value="fCusVip"> Khách Hàng VIP </option>
                                <option value="fVisistor"> Khách Thử </option>
                              </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="description"> Message</label>
                        <textarea className="form-control" name="fMess" id="description" placeholder="Enter Your Message" defaultValue={""} onChange={(event) => this.HandleInputChange(event)}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="description"> Chọn file </label>
                              <input type="file" className="form-control-file" name="fAnh" onChange={(event) => this.isFileChange(event)} />
                        </div>
                        <div>
                        <button type="button" className="btn btn-default submit" onClick={(event) => this.submitForm(event)}><i className="fa fa-paper-plane" aria-hidden="true" onChange={(event) => this.HandleInputChange(event)}/>  Send Message</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Contact;