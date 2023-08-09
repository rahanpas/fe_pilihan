<template>
  <div
    class="navbar bg-base-100 max-w-screen-2xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1x</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">
        <img src="/img/logo/pilihunt.png" class="w-28 xl:w-40" alt="Nefa Logo"
      /></a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Beranda</a></li>
        <li tabindex="0">
          <details>
            <summary>Produk</summary>
            <ul
              class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            >
              <li><a>Konten Kreator</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>FAQ</a></li>
      </ul>
    </div>

    <div class="navbar-end">
      <div class="flex-none">
        <!-- <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> -->
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div
      class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"
    >
      <div
        class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"
      >
        <div class="w-full flex flex-row items-center justify-between py-6">
          <div>
            <img
              src="/img/logo/pilihunt.png"
              class="w-28 xl:w-40"
              alt="Nefa Logo"
            />
          </div>
          <button
            class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:  -center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <li class="mr-6">
            <NuxtLink
              to="#"
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
            >
              Cryptocurrency
            </NuxtLink>
          </li>
          <li class="mr-6">
            <NuxtLink
              to="#"
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
            >
              Exchanges
            </NuxtLink>
          </li>
          <li class="mr-6">
            <NuxtLink
              to="#"
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
            >
              Watchlist
            </NuxtLink>
          </li>
          <li class="mr-6">
            <NuxtLink
              to="#"
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
            >
              NFT
            </NuxtLink>
          </li>
          <li class="mr-6">
            <NuxtLink
              to="#"
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
            >
              Portfolio
            </NuxtLink>
          </li>

          <li class="relative group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownToggler"
              @blur="dropdownToggler"
            >
              <span>Products</span>
              <ChevronUpIcon v-if="dropdownNavbar" :size="16" />
              <ChevronDownIcon v-else :size="16" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownNavbar"
                class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Exchange</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Wallet</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Explorer</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >Charts</a
                  >
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <base-button
          class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"
        >
          Masuk
        </base-button>
        <base-button
          class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white"
        >
          Daftar Agen
        </base-button>
      </div>
    </div>
  </nav> -->
</template>
<script>
export default {
  name: "BaseNavbar",
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    };
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar;
    },
  },
};
</script>
