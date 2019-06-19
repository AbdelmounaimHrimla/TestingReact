import React, { Component } from 'react';
import './css/DeleteComment.css';

class DeleteComment extends Component {
    render() {
        return (
            <div className="deleteComment">
                <div className="popUp">
                    <p>Do You Want Really Delete This Comment</p>
                    <button className="btn-delete">Delete</button>
                    <button className="btn-cancel">Cancel</button>

                </div>
            </div>
        );
    }
}

export default DeleteComment;