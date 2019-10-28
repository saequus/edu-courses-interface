<template lang='pug'>
  nav(class='nav')
    router-link(class='nav-link text-green' v-for='route in links'
    v-bind:key="route.id" :to='`${route.page}`') {{ route.text}}
</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Main',
          page: '/',
        },
        {
          id: 1,
          text: 'All Courses',
          page: '/all-courses',
        },
        {
          id: 2,
          text: 'Profile',
          page: '/profile',
        },
      ],
    };
  },
};
</script>

