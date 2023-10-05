import store from './redux/store.js'
import { addCurrentTime, clearTimes } from './redux/actionCreators.js'

const btn = document.querySelector('#btn2')
const removeBtn = document.querySelector('#removeBtn2')
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
