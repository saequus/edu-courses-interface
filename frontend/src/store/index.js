import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [
      {
        id: 1,
        sphere: 'Web Development',
        title: 'Data Bases',
        description: 'Basic course on data bases',
        done: false,
      },
      {
        id: 2,
        sphere: 'Web Development',
        title: 'Vue.js',
        description: 'Learning advanced Vue.js',
        done: true,
      },
      {
        id: 3,
        sphere: 'Web Development',
        title: 'Basic HTML & CSS course',
        description: 'Basic course description for beginners',
        done: false,
      },
      {
        id: 4,
        sphere: 'Web Development',
        title: 'Basic course',
        description: 'Basic course description',
        done: true,
      },
      {
        id: 5,
        sphere: 'Web Development',
        title: 'Basic course',
        description: 'Basic course description',
        done: false,
      },
      {
        id: 6,
        sphere: 'Web Development',
        title: 'Basic course',
        description: 'Basic course description',
        done: true,
      },
      {
        id: 7,
        sphere: 'Web Development',
        title: 'Basic course',
        description: 'Basic course description',
        done: false,
      },
      {
        id: 8,
        sphere: 'Web Development',
        title: 'Basic course',
        description: 'Basic course description',
        done: true,
      },
    ],
  },

  getters: {
    doneCourses: state => state.courses.filter(course => course.done),
    getCourseById: state => (id) => {
      state.courses.find(course => course.id === id);
    },
  },
  mutations: {
    // SET_COURSE: (state, payload) => {
    //   state.todos = payload;
    // },
    //
    // ADD_COURSE: (state, payload) => {
    //   state.todos.push(payload);
    // },
  },

  // actions: {
  //   GET_COURSE: async (context, payload) => {
  //     const { data } = await axios.get('http://yourwebsite.com/api/todo');
  //     context.commit('SET_COURSE', data);
  //   },
  //
  //   SAVE_COURSE: async (context, payload) => {
  //     const { data } = await axios.post('http://yourwebsite.com/api/todo');
  //     context.commit('ADD_COURSE', payload);
  //   },
  // },
});
