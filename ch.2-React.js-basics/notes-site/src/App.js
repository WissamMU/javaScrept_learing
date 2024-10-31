import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState, useEffect } from 'react';
import './App.css';
import Preview from './components/Preview';
import Message from './components/Message';

function App() {
  // theme selector
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selectedTheme') || 'light');
  const toggleTheme = () => {
    setSelectedTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  }, [selectedTheme]);


  // adding note state
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);

  // changing title
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  }

  // changing content
  const changeContentHandler = (event) => {
    setContent(event.target.value);
  }

  // saving note
  const saveNoteHandler = () => {
    const note = {
      id: new Date(),
      title: title,
      content: content,
    }

    const updatedNotes = [...notes, note];

    setNotes(updatedNotes);
    setCreating(false);
    setSelectedNote(note.id);
    setTitle('');
    setContent('');
  }

  const getAddNote = () => {
    return (
      <div>
        <h2 className='line-under mb-5'>إضافة ملاحظة جديدة</h2>
        <div>
          <input
            type="text"
            name="title"
            className="form-input mb-5"
            placeholder="العنوان"
            value={title}
            onChange={changeTitleHandler}
          />

          <textarea
            rows="10"
            name="content"
            className="form-input"
            placeholder="النص"
            value={content}
            onChange={changeContentHandler}
          />

          <a href="#" className="btn button" onClick={saveNoteHandler}>
            حفظ 
            <i class="fas fa-save"></i>
          </a>
        </div>
      </div>
    );
  };

  const getPreview = () => {
    if(notes.length === 0) {
      return <Message message='لا توجد ملاحظة'/>;
    }
    if(!selectedNote){
      return <Message message='لم تحدد ملاحظة'/>;
    }
    const note = notes.find(note =>{
      return note.id === selectedNote;
    })

    return (
      <div>
        <div className='line-under'>
          <div className="note-operations">
            <h2 className='note-title'>{note.title}</h2>
            <div>
              <a href="#">
                <i className="fa fa-pencil-alt" />
              </a>
              <a href="#">
                <i className="fa fa-trash" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>{note.content}</p>
        </div>
      </div>
    );
  };

  const addNoteHandler = () => {
    setCreating(true);
  }

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="notes-section col-md-2">
          {/* adding note */}
          <button className="btn add-btn" onClick={addNoteHandler}>أضافة ملاحظة</button>
          {/* theme select */}
          <label className="add-btn">
            <input
              className='btn add-btn'
              id='darkModeToggle'
              onChange={toggleTheme}
              type='checkbox'
              defaultChecked={selectedTheme === 'dark'}
            />
            <span className='change-theme'>
              تغيير المظهر
              {selectedTheme === 'light' ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </span>
          </label>
          {/* note title */}
          <ul className="notes-list">
            <li className="note-item">ملاحظة رقم #1</li>
            <li className="note-item">ملاحظة رقم #2</li>
            <li className="note-item">ملاحظة رقم #3</li>
            <li className="note-item">ملاحظة رقم #4</li>
          </ul>
        </div>
        {/* preview section */}
        <Preview>
          {creating ? getAddNote() : getPreview()}
        </Preview>
      </div>
    </div >
  );
}

export default App;
