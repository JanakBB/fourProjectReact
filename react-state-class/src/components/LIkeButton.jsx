import { useState } from "react";

const LikeButton = () => {
    let [isLiked, setIsLiked] =useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);
    }
    return(
        <div onClick={toggleLike}>
            {isLiked ? <i className="fa-solid fa-heart red"></i> : <i className="fa-solid fa-heart white"></i>}

        </div>
    )
}

export default LikeButton;