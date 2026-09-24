<template>
<h1>Hello,Welcome on Home Page</h1>
</template>

<script>
export default{
mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
    {
         this.$router.push({name:'Signup'});
    }
    }
}
</script>