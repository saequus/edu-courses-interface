<template lang='pug'>
  div(class='row' )
    div(class='col-md-12')
      div(class="mt-3" align='center')
        b-pagination(
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="rows")
</template>
<script>
export default {
  data() {
    return {
      rows: 10,
      perPage: 5,
      currentPage: 1,
    };
  },
};
</script>
