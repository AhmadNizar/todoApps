import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: `http://54.202.2.245:80`
})

export default new Vuex.Store({
  state: {
    todolist: [],
    editTask: {}
  },
  mutations: {
    setTodoList (state, payload) {
      state.todolist = payload
    },
    deleteTaskById (state, payload) {
      let deleteIdx = state.todolist.findIndex(element => {
        return element._id === payload
      })

      state.todolist.splice(deleteIdx, 1)
    },
    addnewTask (state, payload) {
      state.todolist.push(payload)
      console.log(state.todolist)
    },
    populateEditModal (state, payload) {
      let editIdx = state.todolist.findIndex(element => {
        return element._id === payload
      })

      state.editTask = state.todolist[editIdx]
    },
    updateTaskData (state, payload) {

    }
  },
  actions: {
    getAllTodoList ({ commit }) {
      http.get('/api/tasks', {
        headers: {
          token: localStorage.getItem('tokenTodo')
        }
      })
      .then(({data}) => {
        commit('setTodoList', data)
      })
      .catch(err => console.error(err))
    },
    deleteTodolist ({ commit }, payload) {
      http.delete(`/api/tasks/${payload}`)
      .then(({data}) => {
        commit('deleteTaskById', payload)
      })
      .catch(err => console.error(err))
    },
    addnewTask ({ commit }, payload) {
      console.log(payload)
      http.post(`/api/tasks/createtask`, {
        task_name: payload.task_name,
        tag_type: [payload.task_tag]
      }, {
        headers: {
          token: localStorage.getItem('tokenTodo')
        }
      })
      .then(({data}) => {
        console.log(data)
        //
      })
      .catch(err => console.error(err))
    },
    updateTaskData ({ commit }, payload) {
      http.put(`/api/tasks/${payload.taskId}`, {
        task_name: payload.task_name,
        tag_type: payload.tag_type
      }, {
        headers: {
          token: localStorage.getItem('tokenTodo')
        }
      })
      .then(({data}) => {
        commit('updateTaskData', data)
      })
      .catch(err => console.error(err))
    }
  }
})
