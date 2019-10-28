<template lang='pug'>
  div
    div(class='row')
      div(class='col-md-12')
        h3(class='mb-3') All posts
        div(v-for="(course, index) in coursesList" :key='index' align='center'
        :per-page="perPage" :current-page="currentPage")
          div(class="card border-secondary mb-3" style="max-width: 50rem;")
            div(class="card-header") {{ course.sphere }}
            div(class="card-body")
              h4(class="card-title") {{ course.title }}
              p(value='`${index}`')
              div(class='row')
                div(class='col-md-6')
                  p(class="card-text text-left") {{ course.description }}
                div(class='col-md-6' align='center')
                  router-link(
                    class='btn btn-outline-success px-4 float-right'
                    v-bind:to="{ name: 'course', params: { id: course.id } }"
                    tag='button') Visit
    div(class='row')
      div(class='col-md-12')
        div(class="mt-3" align='center')
          b-pagination(v-model="currentPage" :total-rows="rows")
</template>

<script>

export default {
  name: 'AllCourses',
  data() {
    return {
      title: '',
      perPage: 5,
      rows: 25,
      currentPage: 1,
      description: '',
      courses: [],
    };
  },
  components: {
  },
  methods() {
  },
  computed: {
    coursesList() {
      return this.$store.state.courses;
    },
    doneCourses() {
      return this.$store.getters.doneCourses;
    },
  },
};
</script>

