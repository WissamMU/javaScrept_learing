import React from "react";

const Note = (props) => {
    const { title, noteClicked, active } = props;

    const shortenedTitle = title.length > 10 ? title.substring(0, 10) + "..." : title;

    return (
        <li className={`note-item ${active && 'active'}`} onClick={noteClicked}>
            {shortenedTitle}
        </li>
    )
}

export default Note;