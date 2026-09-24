<template>
    <Header />

    <div class="min-h-screen flex justify-center items-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold text-center mb-6">
                Welcome to Update Restaurant Page
            </h1>

            <form class="flex flex-col gap-4">
                <input type="text" placeholder="Enter restaurant name" v-model="restaurant.name" name="name"
                    class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="text" placeholder="Enter address" v-model="restaurant.address" name="address"
                    class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact"
                    class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <button type="button" @click="addRestaurant"
                    class="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                    Update Restaurant
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';

export default{
    components:{
Header
    },
    data()
    {
          return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
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