<template>
  <div class="relative flex min-h-screen">
    <!-- sidebar -->
    <div
      class="bg-info w-80 space-y-6 px-2 py-4 absolute inset-y-0 left-0 lg:relative lg:-translate-x-0 transition duration-200 ease-in-out"
      :class="{
        'relative -translate-x-0': showSidebar.isside,
        'transform -translate-x-full': !showSidebar.isside,
      }"
    >
      <a
        href=""
        class="flex items-center space-x-2 px-20 py-6 text-success-content"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          /></svg
        ><span class="text-2xl font-extrabold"> HCIS </span>
      </a>
      <nav>
        <a
          href="/"
          class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 text-success-content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            /></svg
          ><span class="group-hover:text-cyan-300 text-success-content">
            Dashboard
          </span>
        </a>
        <a
          href="/"
          class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 text-success-content"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <span class="group-hover:text-cyan-300 text-success-content">
            Team
          </span>
        </a>
      </nav>
    </div>
    <div class="flex-1">
      <div class="shadow">
        <nav-bar :showSidebar="showSidebar"></nav-bar>
      </div>

      <div class="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <!-- <h1 class="text-3xl font-bold tracking-tight text-gray-900"> -->
        <slot />
        <!-- </h1> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      showSidebar: {
        isside: false,
      },
    };
  },
};
</script>