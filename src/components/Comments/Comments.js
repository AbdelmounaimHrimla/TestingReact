import React, { Component } from 'react';
import './css/Comments.css';
import {NavLink} from 'react-router-dom';

import axios from 'axios';

class Comments extends Component {
    state = {
        comments :  [],
        startSliced : 0,
        endSliced : 10,
        dataLength : 0 
    }

    getAllComments = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments') 
        .then(response => {
            console.log("FIRST!!!!!!!!!!!!!!");
            console.log(response.data);
           
            const comments = response.data.slice(this.state.startSliced, this.state.endSliced);
            const silcedComments = comments.map(comment => {
                return {
                    ...comment
                }
            });
            const dataLength = response.data.length;
            console.log('LENGTH ' + dataLength);
            this.setState({dataLength: dataLength});
            console.log('State Length ' + this.state.dataLength);
            console.log("SECOND!!!!!!!!!!!!!!");
            this.setState({comments :silcedComments });
            console.log(this.state.comments); 
            
        });
    }
    componentDidMount() {
        this.getAllComments();
    }

    nextPage = () => {
        
        this.setState({
            startSliced : this.state.startSliced + 10,
            endSliced : this.state.endSliced + 10
        });

        this.getAllComments();
    }
    previousPage = () => {
        this.setState({
            startSliced : this.state.startSliced - 10,
            endSliced : this.state.endSliced - 10
        });
        this.getAllComments();
    } 
    lastPage = () => {
        this.setState({
            startSliced : this.state.dataLength - 10,
            endSliced : this.state.dataLength
        });
        this.getAllComments();
    } 
    firstPage = () => {
        this.setState({
            startSliced : 0,
            endSliced : 10
        });
        this.getAllComments();
    } 

    allComments = (comment) =>{
        return(
            <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name.substring(0, 20)}</td>
                <td>{comment.email}</td>
                <td>{comment.body.substring(0, 40)}</td>
                <td>
                    <NavLink to="/edit-comment" className="btn-edit">
                        Edit
                    </NavLink>
                    <NavLink to="/delete-comment">
                        <button className="btn-delete">Delete</button>
                    </NavLink>
                    <NavLink to="/show-comment">
                        <button className="btn-show">Show</button>
                    </NavLink>
                </td>
            </tr>
        ) 
    }  
    
    render() {
        const comments = this.state.comments.map(this.allComments);
        return (
            <div className="Comments">
                <div className="header">
                    <h1 className="title">Comments</h1>
                    <button className="btn-new">+ New Comment</button>
                </div>
                <div className="content">
                <div className="navigate">
                    <button onClick={this.firstPage}>Firsti</button>
                    <button onClick={this.previousPage}>Previ</button>
                    <button onClick={this.nextPage}>Nexti</button>
                    <button onClick={this.lastPage}>Lasti</button>
                </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Body</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {comments}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Comments;