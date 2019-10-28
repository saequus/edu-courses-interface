<template lang='pug'>
  div(id="app-root")
    div(class='row')
      div(class='col-md-12')
        div(class='float-right')
          navigation-main
    div(class='container')
      div(class='row')
        div(class='col-md-12')
          router-view
</template>
<script>
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    'navigation-main': Navigation,
    'footer-main': Footer,
  },
};
</script>

<style>
/* #demo {
  background: green;
}
#router {
  background: red;
} */

</style>
