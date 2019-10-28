import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import AllCourses from '@/components/AllCourses';
import Course from '@/components/Course';
import Profile from '@/components/Profile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/all-courses',
      name: 'allcourses',
      component: AllCourses,
    },
    {
      path: '/course/:id',
      name: 'course',
      component: Course,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ],
});
