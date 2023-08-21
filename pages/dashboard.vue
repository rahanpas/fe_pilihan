<template>
  <!-- <div class="container mx-auto"> -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
    <div class="stat border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
      <div class="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div class="stat-title">Downloads</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    <div class="stat border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
      <div class="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </div>
      <div class="stat-title">Page Views</div>
      <div class="stat-value text-secondary">2.6M</div>
      <div class="stat-desc">21% more than last month</div>
    </div>
    <div class="stat border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
      <div class="stat-title">New Users</div>
      <div class="stat-value">4,200</div>
      <div class="stat-desc">↗︎ 400 (22%)</div>
    </div>

    <div class="stat border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
      <div class="stat-title">New Registers</div>
      <div class="stat-value">1,200</div>
      <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>
  </div>
  <!-- </div>/ -->
</template>



<script setup>
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
definePageMeta({
  layout: "custom",
  // middleware: "guest",
});
</script>

<style>
</style>