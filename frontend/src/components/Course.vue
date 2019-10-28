<template lang='pug'>
  div(class='')
    h4 id
    h4(class='') {{ getCoursesById.id }}
    h4(class='') {{ getCoursesById.title }}
</template>
<script>
export default {
  name: 'AllCourses',
  data() {
    return {
      id: 2,
      course: {},
      title: '',
      description: '',
      courses: [],
    };
  },
  methods() {
  },
  computed: {
    getCoursesById(id) {
      return this.$store.state.getters.getCourseById(id);
    },
  },
};
</script>

