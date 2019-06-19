import React, { Component } from 'react';
import './css/NewComment.css';

class NewComment extends Component {
    render() {
        return (
            <div className="NewComment">
                <div className="header">
                    <h1 className="title">Add Comment</h1>
                    <button className="btn-new">Save</button>
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

export default NewComment;