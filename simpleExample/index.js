import store from './redux/store.js'
import { addCurrentTime, clearTimes } from './redux/actionCreators.js'

const btn = document.querySelector('#btn')
const removeBtn = document.querySelector('#removeBtn')
const wrapper = document.querySelector('p')

btn.addEventListener('click', () => {
  store.dispatch(addCurrentTime())
})
removeBtn.addEventListener('click', () => {
  store.dispatch(clearTimes())
})

const unsubscribe = store.subscribe(() => {
  wrapper.innerHTML = ''
  const times = store.getState()
  times.forEach(time => {
    wrapper.append(time + ' | ')
  })
})

// const action1 = store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '12:00:00'
// })
// console.log(action1.payload)
// // unsubscribe()
// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '12:12:00'
// })
// store.dispatch({
//   type: 'CLEAR_ALL_TIMES'
// })

// // const arr = ['bogdan', 'alice', 'valik']

// const initialState = []

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_NAME':
//       return [...state, action.payload]
//     case 'DELETE_NAME':
//       return state.filter(personName => personName !== action.payload)
//     case 'CLEAR_NAMES':
//       return []
//     default:
//       return state
//   }
//   // if (action.type === 'ADD_NAME') {
//   //     return [...state, action.payload]
//   // }
//   // if (action.type === 'DELETE_NAME') {
//   //     return state.filter(personName => personName !== action.payload)
//   // }
//   // if (action.type === 'CLEAR_NAMES') {
//   //     return []
//   // }

//   //   return state
// }

// let newState = reducer(initialState, {
//   type: 'ADD_NAME',
//   payload: 'alice'
// })

// newState = reducer(newState, {
//   type: 'ADD_NAME',
//   payload: 'bogdan'
// })
// newState = reducer(newState, {
//   type: 'ADD_NAME',
//   payload: 'valik'
// })
// console.log(newState)
// newState = reducer(newState, {
//   type: 'CLEAR_NAMES'
// })
// newState = reducer(newState, {
//   type: 'ADD_NAME',
//   payload: 'bob'
// })
// console.log(newState)
// // newState = reducer(newState, {
// //   type: 'DELETE_NAME',
// //   payload: 'bogdan'
// // })
