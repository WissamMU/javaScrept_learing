import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import './App.css';

function App() {

  const getAddNote = () => {
    return (
      <div>
        <h2>إضافة ملاحظة جديدة</h2>
        <div>
          <input
            type="text"
            name="title"
            className="form-input mb-30"
            placeholder="العنوان"
            value=""
          />

          <textarea
            rows="10"
            name="content"
            className="form-input"
            placeholder="النص"
          />

          <a href="#" className="button green">
            حفظ
          </a>
        </div>
      </div>
    );
  };

  const getPreview = () => {
    return (
      <div>
        <div className="note-operations">
          <a href="#">
            <i className="fa fa-pencil-alt" />
          </a>
          <a href="#">
            <i className="fa fa-trash" />
          </a>
        </div>
        <div>
          <h2 className='note-title'>عنوان ملاحظة تجريبية</h2>
          <p>نص ملاحظة تجريبية</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="notes-section col-md-2">
          <button className="btn add-btn">أضافة ملاحظة</button>
          <ul className="notes-list">
            <li className="note-item">ملاحظة رقم #1</li>
            <li className="note-item">ملاحظة رقم #2</li>
            <li className="note-item">ملاحظة رقم #3</li>
            <li className="note-item">ملاحظة رقم #4</li>
          </ul>
        </div>
        <div className="preview-section col-md-9">{getPreview()}</div>
      </div>
    </div>
  );
}

export default App;
