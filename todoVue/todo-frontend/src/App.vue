<template>
  <div class="container">
    <h2>TODOS</h2>
    <div>
      <div v-for="i in todo" :key="i.data" class="task"> 
            {{i.name}}
      </div>
    </div>


  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      todo:[]
    }
  },
  mounted(){
    this.getTodo()
  },
  methods:{
    getTodo(){
      axios.get('http://127.0.0.1:3000/todos')
      .then(response => {
        this.todo=response.data
        console.log(this.todo)
        })
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  height: max-content;
}
.task{
  width: 18rem;
  height: 2rem;
  background-color: #2496aa;
  margin: 1rem;
  padding: 1rem;
}
</style>
