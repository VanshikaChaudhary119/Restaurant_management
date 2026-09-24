<template>
    <div class="bg-gray-800 p-4 flex justify-center gap-8">
        <router-link to="/" class="text-white hover:text-green-400 text-lg">
            Home
        </router-link>

        <router-link to="add" class="text-white hover:text-green-400 text-lg">
            Add Restaurant
        </router-link>

        <a
            v-on:click="logout"
            href="#"
            class="text-white hover:text-red-400 text-lg"
        >
            Logout
        </a>
    </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>