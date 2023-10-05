import * as toolkit from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm'
import reducer from './reducer.js'

const store = toolkit.configureStore({
  reducer: reducer
})

export default store
