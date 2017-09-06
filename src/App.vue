<template xmlns="http://www.w3.org/1999/html">
  <div id="app">
    <div draggable="true" class="advertisment_area">Werbung</div>
    <input title="paste sequence.. pronto!!!" placeholder="Enter sequence" :key='input_msg' @input="updateSequence" class="input_area"/>
    <div class="link_group_area">
      <router-link to="/statistic">Link to graphical and statistical results from this sequence....!!!</router-link>
    </div>
    <div class="content_area">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

/* eslint-disable no-console */
  export default {
    name: 'app',
    data() {
      return {
        input_msg: null,
      };
    },
    computed: {
      is_protein() {
        return this.$store.getters.getSequence;
      },
    },
    methods: {
      updateSequence(ev) {
        this.$store.commit('updateSequence', ev.target.value);
      },
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 90vw;
    margin :auto;
    height :100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-rows: 50px 50px 15% auto;
    grid-template-areas:
      "advertisment advertisment advertisment"
      "input input input"
      "link_group link_group link_group"
      "content content content";
  }

  .advertisment_area {
    grid-area: advertisment;
    background : tomato;
    text-align: center;
    font-weight :bold;
    font-size: 2rem;
  }

  .input_area {
    grid-area: input;
    background : lightblue;
    text-align: center;
    font-size: 1.5rem;
  }

  .link_group_area {
    grid-area: link_group;
    background : lightgreen;
  }

  .content_area {
    grid-area: content;
    background : lightsteelblue;
  }
</style>
