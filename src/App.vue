<template>
  <div id="app">
    <HeadDiv></HeadDiv>
    <router-view/>
   <FootDiv></FootDiv>
  </div>
</template>

<script>
import HeadDiv from './components/HeadDiv.vue'
import FootDiv from './components/FootDiv.vue'
export default {
  name: 'App',
  components:{FootDiv , HeadDiv},
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
</style>
