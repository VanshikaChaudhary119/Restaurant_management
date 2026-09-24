<template>
    <div>
        <a href="home">Home</a>
        <a href="home">Add Restaurant</a>
        <a href="home">Update Restaurant</a>
        <a v-on:click="logout" href="#" >Logout</a>
    </div>
</template>

<script>
export default {
  methods:{
    logout()
    {
       localStorage.clear();
       this.$router.push({name:'Login'})
    }
  }
}
</script>