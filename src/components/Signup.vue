<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">

        <img class="w-32 h-32 object-contain mb-4" src="../assets/resto.png" alt="Restaurant Logo" />

        <h3 class="text-3xl font-bold mb-6 text-gray-800">
            Signup
        </h3>

        <div class="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4">

            <input type="text" v-model="name" placeholder="Enter name"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="text" v-model="email" placeholder="Enter email"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="password" v-model="password" placeholder="Enter password"
                class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <button v-on:click="signup" class="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Sign Up
            </button>

        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {

        async signup() {
            console.warn("signup", this.email, this.password, this.name);
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password: this.password
            });
            console.warn(result);
            if(result.status==201)
        
            {
                alert("Signup done");
            }
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'Home'});
        }
    }
};
</script>