<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Formulir Profil Calon Legislatif
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600 text-justify">
          Silakan lengkapi informasi di dalam tabel di bawah dengan lengkap yang
          akan digunakan dalam proses pembuatan media promosi kampanye kreatif.
        </p>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
          <div class="md:col-span-6">
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
          <div class="md:col-span-3">
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
                <span class="label-text">Nama Panggung</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="h-10 border mt-1 input-md rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
          </div>

          <div class="md:col-span-2">
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
          <div class="md:col-span-1">
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
          <div class="md:col-span-1">
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
          <div class="md:col-span-2">
            <label
              for="photo"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Tempat, Tanggal Lahir</label
            >
            <div class="mt-2 flex items-center gap-x-3">
              <input
                type="text"
                placeholder="Type here"
                class="h-10 border mt-1 input-md rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
              <input
                type="text"
                placeholder="Type here"
                class="h-10 border mt-1 input-md rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
          </div>
          <div class="md:col-span-6">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Alamat Lengkap</span>
              </label>
              <textarea             
                placeholder="Type here"
                class="textarea-lg  h-4/5 border mt-1 rounded px-4 w-full bg-gray-50 peer block min-h-[auto] bg-transparent py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              />
            </div>
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
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Notifications
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">
              By Email
            </legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900"
                    >Comments</label
                  >
                  <p class="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-gray-900"
                    >Candidates</label
                  >
                  <p class="text-gray-500">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-gray-900"
                    >Offers</label
                  >
                  <p class="text-gray-500">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">
              Push Notifications
            </legend>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              These are delivered via SMS to your mobile phone.
            </p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-everything"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Everything</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Same as email</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="push-nothing"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >No push notifications</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
</script>

<style>
</style>