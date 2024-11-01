import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState, useEffect } from 'react';
import './App.css';
import Preview from './components/Preview';
import Message from './components/Message';
import NotesContainer from './components/Notes/notesContainer';
import NotesList from './components/Notes/notesList';
import Note from './components/Notes/Note';
import NoteForm from './components/Notes/NoteForm';
import Alert from './components/Alert';

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
  const [validationErrors, setValidationErrors] = useState([]);



  // saving to local storage
  useEffect(() => {
    if (localStorage.getItem('notes')) {
      setNotes(JSON.parse(localStorage.getItem('notes')));
    } else {
      localStorage.setItem('notes', JSON.stringify([]));
    }
  }, []);

  // alert time
  useEffect(() => {
    if (validationErrors.length !== 0) {
      setTimeout(() => {
        setValidationErrors([]);
      },3000)
    }
  }, [validationErrors])

  const savingToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // validate content
  const validate = () => {
    const validationErrors = [];
    let passed = true;
    if (!title) {
      validationErrors.push('الرجاء ادخال عنوان الملاحظة');
      passed = false;
    }

    if (title.length > 25){
      validationErrors.push('العنوان اطول من 25 احرف');
      passed = false;
    }

    if (!content) {
      validationErrors.push('الرجاء ادخال محتوى الملاحظة');
      passed = false;
    }

    setValidationErrors(validationErrors);
    return passed;
  }

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
    if (!validate()) return;

    const note = {
      id: new Date(),
      title: title,
      content: content,
    }

    const updatedNotes = [...notes, note];

    savingToLocalStorage('notes', updatedNotes);
    setNotes(updatedNotes);
    setCreating(false);
    setSelectedNote(note.id);
    setTitle('');
    setContent('');
  }

  //adding notes
  const addNoteHandler = () => {
    setCreating(true);
    setEditing(false);
    setTitle('');
    setContent('');
  }

  // selecting notes
  const selectedNoteHandler = (noteId) => {
    setSelectedNote(noteId);
    setCreating(false);
    setEditing(false);
  }

  // editing notes
  const editNoteHandler = () => {
    const note = notes.find(note => note.id === selectedNote);

    setEditing(true);
    setTitle(note.title);
    setContent(note.content);
  }

  // deleting notes
  const deleteNoteHander = () => {
    const updatedNotes = [...notes];
    const noteIndex = updatedNotes.findIndex(note => note.id === selectedNote);
    notes.splice(noteIndex, 1);
    setNotes(notes);
    savingToLocalStorage('notes', notes);
    setSelectedNote(null);
  }

  // updating notes
  const updaterNoteHandler = () => {
    if (!validate()) return;


    const updatedNotes = [...notes];
    const noteIndex = notes.findIndex(note => note.id === selectedNote);
    updatedNotes[noteIndex] = {
      id: selectedNote,
      title: title,
      content: content,
    };

    savingToLocalStorage('notes', updatedNotes);
    setNotes(updatedNotes);
    setEditing(false);
    setTitle('');
    setContent('');
  }


  const getAddNote = () => {
    return (
      <NoteForm
        formTitle="ملاحظة جديدة"
        title={title}
        content={content}
        titleChanged={changeTitleHandler}
        contentChanged={changeContentHandler}
        submitText='حفظ'
        submitClicked={saveNoteHandler}
        icon='fas fa-save'
      />
    );
  };

  const getPreview = () => {
    if (notes.length === 0) {
      return <Message message='لا توجد ملاحظة' />;
    }
    if (!selectedNote) {
      return <Message message='لم تحدد ملاحظة' />;
    }
    const note = notes.find(note => {
      return note.id === selectedNote;
    })

    let noteDisplay = (
      <div>
        <div>
          <p className='note-content'>{note.content}</p>
        </div>
      </div>
    )
    if (editing) {
      noteDisplay = (
        <NoteForm
          formTitle="تعديل الملاحظة"
          title={title}
          content={content}
          titleChanged={changeTitleHandler}
          contentChanged={changeContentHandler}
          submitText='تعديل'
          submitClicked={updaterNoteHandler}
          icon='fas fa-edit'
        />
      )
    }

    return (
      <div>
        {!editing &&
          <div className='line-under'>
            <div className="note-operations">
              <h2 className='note-title'>{note.title}</h2>
              <div>
                <a href="#" onClick={editNoteHandler}>
                  <i className="fa fa-pencil-alt" />
                </a>
                <a href="#" onClick={deleteNoteHander}>
                  <i className="fa fa-trash" />
                </a>
              </div>
            </div>
          </div>
        }
        {noteDisplay}
      </div>
    );
  };


  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="notes-section col-lg-2 col-sm-3">
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
          <NotesContainer >
            <NotesList>
              {notes.map(note => <Note
                key={note.id}
                title={note.title}
                noteClicked={() => selectedNoteHandler(note.id)}
                active={selectedNote === note.id}
              />)}
            </NotesList>
          </NotesContainer>

        </div>
        {/* preview section */}
        <Preview>
          {creating ? getAddNote() : getPreview()}
        </Preview>
        {validationErrors.length !== 0 && <Alert validationMessages={validationErrors} />}
      </div>
    </div >
  );
}

export default App;
