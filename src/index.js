import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faTrash,
  faEdit,
  faDoorOpen,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(faTimes, faTrash, faEdit, faDoorOpen, faSearch);

ReactDOM.render(<App />, document.getElementById('root'));
