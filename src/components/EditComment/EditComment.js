import React, { Component } from 'react';
import './css/EditComment.css';

class EditComment extends Component {
    render() {
        return (
            <div className="EditCommnt">
            <div className="header">
            <h1 className="title">Edit Comment</h1>
            <button className="btn-new">Edit</button>
        </div>
        <div className="content">
            <div className="input-group">
                <label className="label">Name :</label>
                <input className="input" type="text" />
            </div>
            <div className="input-group">
                <label className="label">Email :</label>
                <input className="input" type="email" />
            </div>
            <div className="input-group">
                <label className="label">Body :</label>
                <textarea className="input"></textarea>
            </div>
        </div>
            </div>
        );
    }
}

export default EditComment;