<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    
    <img
      class="w-32 h-32 object-contain mb-4"
      src="../assets/resto.png"
      alt="Restaurant Logo"
    />

    <h3 class="text-3xl font-bold mb-6 text-gray-800">
      Signup
    </h3>

    <div class="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4">
      
      <input
        type="text"
        placeholder="Enter name"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Enter email"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Enter password"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        class="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign Up
      </button>

    </div>

  </div>
</template>

<script>
export default {
};
</script>