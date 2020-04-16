import React, { Component } from 'react';
import './form.css';
import {FaEdit} from 'react-icons/fa';
import {FaTrashAlt	} from 'react-icons/fa';
import {validator} from './validation.js'
class Form extends Component {
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            tableData:[],
            editIndex: null
        };
    }
    firstNameHandler=event=>{
        this.setState({
            firstName:event.target.value
        });
    }
    lastNameHandler=event=>{
        this.setState({
            lastName:event.target.value
        });
    }
    emailHandler=event=>{
        this.setState({
            email:event.target.value
        });
    }
    submitHandler=()=>{
        if(this.state.firstName && this.state.lastName && this.state.email){
            if(validator.isEmailUserName(this.state.email)){
                const formData={
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                    email:this.state.email,
                };
                let newTableData = [...this.state.tableData];
                if(this.state.editIndex !== null){
                    newTableData[this.state.editIndex] = formData;
                } else {
                    newTableData.push(formData);
                }
                
                this.setState({
                    tableData:newTableData,
                    firstName: "",
                    lastName: "",
                    email: "",
                    editIndex: null,
                });
            }
            else{
                alert('Email is incorrect')
            }    
        }
        else{
            alert('All fields are compulsory')
        }
    }
    deleteRowData=(index)=>{
        let deleteList = [...this.state.tableData];
        deleteList.splice(index,1)
        this.setState({
            tableData:deleteList
        });
    }

    editRowData = (index)=>{
        const rowData =  this.state.tableData[index];
        this.setState({
            firstName: rowData.firstName,
            lastName: rowData.lastName,
            email: rowData.email,
            editIndex: index
        });
    }
    reset=()=>{
        this.setState({
            firstName:'',
            lastName:'',
            email:''
        })
    }
    render() {
        const {firstName,lastName,email} = this.state
        return (
            <div className="container">
                <div className="form-div">
                    <h1>Form</h1>
                    <div className="form-body">
                        <div className="form-top">
                            <p>Internship Information</p>
                        </div>
                        <div className="form-middle">
                                <label>Firstname:</label>
                                <input type="text" value={firstName} onChange={this.firstNameHandler }/>
                                <label>Lastname:</label>
                                <input type="text" value={lastName} onChange={this.lastNameHandler}/>
                                <label>Email:</label>
                                <input type="text" value={email} onChange={this.emailHandler}/>
                                <div className="btns">
                                    <button className="reset-btn" onClick={this.reset}>Reset</button>
                                    <button className="submit-btn" type="submit" onClick={(index)=>this.submitHandler(index)}>Submit</button>
                                </div>
                        </div>
                        <div className="form-bottom">
                            <p>@CopyRight 2020</p>
                        </div>     
                    </div>    
                </div>
                <div className="table-div">
                    <h1>Table</h1>
                    <table  cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th className="email-col">Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.tableData.map((item,index)=>{
                                    return <tr key={`dataTable-${index}`}>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td><button onClick={()=>this.editRowData(index)}><FaEdit/></button></td>
                                            <td><button onClick={()=>this.deleteRowData(index)}><FaTrashAlt/></button></td>
                                        </tr>
                                })}
                        </tbody>
                    </table>    
                </div>
                
            </div>
        );
    }
}

export default Form;