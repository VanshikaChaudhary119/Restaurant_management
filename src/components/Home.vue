<template>
    <Header />

    <div class="p-6">
        <h1 class="text-3xl font-bold mb-6">
            Hello {{ name }}, Welcome on Home Page
        </h1>

        <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border border-gray-300 px-4 py-2">Id</th>
                        <th class="border border-gray-300 px-4 py-2">Name</th>
                        <th class="border border-gray-300 px-4 py-2">Address</th>
                        <th class="border border-gray-300 px-4 py-2">Contact</th>
                        <th class="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="item in restaurant"
                        :key="item.id"
                        class="hover:bg-gray-100"
                    >
                        <td class="border border-gray-300 px-4 py-2">
                            {{ item.id }}
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                            {{ item.name }}
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                            {{ item.address }}
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                            {{ item.contact }}
                        </td>
                      <td class="border border-gray-300 px-4 py-2"><router-link :to="'/update/'+item.id" >Update</router-link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    components: {
        Header
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'Signup' });
        }
        let result = await axios.get("http://localhost:3000/restaurant");
        console.warn(result);
        this.restaurant = result.data;
    }
}
</script>