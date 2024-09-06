import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

function AddPostForm() {
    const dispatch = useDispatch();

    // States
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    // onChange Handling
    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    const onAuthorChange = e => setUserId(e.target.value);
    // console.log(userId);

    const onSavePostClicked = (event) => {
        event.preventDefault();

        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            );

            setTitle('');
            setContent('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>A New Post</h2>
            <form action="" style={{ margin: '', padding: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                    <label htmlFor="title">Post Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={onTitleChange}
                        style={{ width: '300px' }}
                    />
                </div>

                <div>
                    <label htmlFor="author">Post Author:</label>
                    <select
                        name="author"
                        id="author"
                        value={userId}
                        onChange={onAuthorChange}
                    >
                        <option value=""></option>
                        {userOptions}
                    </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                    <label htmlFor="content">Post Content:</label>
                    <textarea
                        type="text"
                        name="content"
                        id="content"
                        value={content}
                        onChange={onContentChange}
                        style={{ width: '300px' }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: '16px', width: '300px' }}>
                    <input onClick={onSavePostClicked} type="submit" value={"Save Post"} disabled={!canSave} />
                </div>
            </form>
        </section>
    )
}

export default AddPostForm
