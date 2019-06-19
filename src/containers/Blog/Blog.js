import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import './css/Blog.css'; 
import Comments from '../../components/Comments/Comments';
import DeleteComment from '../../components/DeleteComment/DeleteComment';
import Comment from '../../components/Comment/Comment';
import NewComment from '../../components/NewComment/NewComment';
import EditComment from '../../components/EditComment/EditComment';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <Switch>
                <Route>
                    <Comments />
                </Route>
                <Route path="/edit-comment" >
                    <EditComment />
                </Route>
                <Route path="/show-comment" >
                    <Comment />
                </Route>
                <Route path="/new-comment" >
                    <NewComment />
                </Route>
                <Route path="/delete-comment" >
                    <DeleteComment />
                </Route>
                
                </Switch>
            </div>
        );
    }
}

export default Blog;