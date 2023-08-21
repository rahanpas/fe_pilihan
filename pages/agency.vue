<template>
  <!-- <div
    class="block max-w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
  > -->
  <!-- <div class="min-h-screen p-6 bg-gray-100 flex justify-center"> -->
  <div class="max-w-fit mx-auto">
    <div>
      <div class="bg-slate-50 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Pendaftaran Agen Marketing</p>
            <!-- <p>Please fill out all the fields.</p> -->
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">NIK</span>
                    <!-- <span class="label-text-alt">Top Right label</span> -->
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="h-10 border mt-1 input-md rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  />
                  <label class="label">
                    <!-- <span class="label-text-alt">Bottom Left label</span> -->
                    <!-- <span class="label-text-alt">Bottom Right label</span> -->
                  </label>
                </div>
                <!-- <label for="full_name">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                  /> -->
              </div>
              <div class="md:col-span-5">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Nama Lengkap</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="h-10 border mt-1 input-md rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  />
                </div>
              </div>

              <div class="md:col-span-3">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    class="h-10 border mt-1 input-md rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  />
                </div>
              </div>
              <div class="md:col-span-2">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Nomor Telepon</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="h-10 border mt-1 input-md rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  />
                  <!-- <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    class="input input-bordered input-primary h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                  /> -->
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="photo"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Photo</label
                >
                <div class="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    class="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    ganti
                  </button>
                </div>
              </div>
              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  value=""
                  placeholder=""
                />
              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div class="md:col-span-2">
                <label for="country">Country / region</label>
                <div
                  class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                >
                  <input
                    name="country"
                    id="country"
                    placeholder="Country"
                    class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    value=""
                  />
                  <button
                    tabindex="-1"
                    class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                  >
                    <svg
                      class="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button
                    tabindex="-1"
                    for="show_more"
                    class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                  >
                    <svg
                      class="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">State / province</label>
                <div
                  class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                >
                  <input
                    name="state"
                    id="state"
                    placeholder="State"
                    class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    value=""
                  />
                  <button
                    tabindex="-1"
                    class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                  >
                    <svg
                      class="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button
                    tabindex="-1"
                    for="show_more"
                    class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                  >
                    <svg
                      class="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder=""
                  value=""
                />
              </div>
              <div class="md:col-span-5">
                <div class="divider"></div>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 
      <a
        href="https://www.buymeacoffee.com/dgauderman"
        target="_blank"
        class="md:absolute bottom-0 right-0 p-4 float-right"
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
          alt="Buy Me A Coffee"
          class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
        />
      </a> -->
  </div>
  <!-- </div> -->
  <!-- </div> -->
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