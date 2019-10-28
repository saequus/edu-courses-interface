<template lang='pug'>
  div(id='app')
    div(id='layout')
      layout
    div(id='footer-app')
      div(class="page-footer font-small")
        div(class="row")
          div(class="col-md-12")
            p(class="text-muted text-center") 2019
</template>

<script>
import Layout from '@/components/Layout';

export default {
  name: 'App',
  components: {
    layout: Layout,
  },
};
</script>

<style>
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 10px;
}
#layout {
  min-height: 100vh;
}
#footer-app {
  bottom: 0;
  min-height: 8vh;
  margin-top: 3vh;
}
</style>
