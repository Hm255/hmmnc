import { getCommentsPerReview } from "../api";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function CommentsList () {
    const [comments, setComments] = useState([])
    const {review_id} = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{ 
        getCommentsPerReview(review_id)
        .then((commentFromApi) => {
            setComments(commentFromApi.comment); 
            console.log(commentFromApi);
            setLoading(false);

        
        })
    }, [review_id]);
    if(loading) return <h2>loading...</h2>//loading message
else{
    return <ul>{<li className="comments" key={comments['review_id']}>
        <br></br>
        <p className="commentID">ID:</p>{comments.comment_id}
        <br></br>
        <p className="CommentsBody">Comment:</p>{comments.body}
         <br></br>
        <p className="userID">User ID:</p>{comments.review_id}
        <br></br>
        <p className="username">Username:</p>{comments.author}
        <br></br>
        <p className="commentVotes">Votes:</p>{comments.votes}
        <br></br>
        <p className="commentCreated">Uploaded:</p>{comments.created_at}
        </li>}

    </ul>

}
}