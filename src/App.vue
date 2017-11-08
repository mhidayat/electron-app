<template>
  <div id="app">
    <div class="white"><span @click="close" style="-webkit-app-region: no-drag;"><i class="fa fa-times fa-2" aria-hidden="true"></i></span>
    </div>
    <div class="columns is-gapless">
      <div class="column is-one-quarter">
        <sidebar></sidebar>
      </div>
      <div class="column">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
    
    methods:{
        close(){
            window.close()
        }
    }
}
</script>

<style scoped>
.white {
    background-color: white;
    -webkit-user-select: none;
    -webkit-app-region: drag;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*
  text-align: center;
  color: #2c3e50;
*/
}
</style>
