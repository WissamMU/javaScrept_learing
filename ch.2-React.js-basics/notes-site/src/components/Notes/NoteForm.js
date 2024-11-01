import React from 'react';

const NoteForm = (props) => {
    const {formTitle, title, content, titleChanged, contentChanged, submitClicked, submitText ,icon} = props;
    return (
        <div>
            <h2 className='line-under mb-5'>{formTitle}</h2>
            <div>
                <input
                    type="text"
                    name="title"
                    className="form-input mb-5"
                    placeholder="العنوان"
                    value={title}
                    onChange={titleChanged}
                />

                <textarea
                    rows="10"
                    name="content"
                    className="form-input"
                    placeholder="النص"
                    onChange={contentChanged}
                    value={content}
                />

                <a href="#" className="btn button" onClick={submitClicked}>{submitText}
                <i class={icon}></i>
                </a>
            </div>

        </div>
    );
}

export default NoteForm;