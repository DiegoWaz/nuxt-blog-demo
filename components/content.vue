<template>
  <!--Container-->
  <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
    <div class="mx-0 sm:mx-6">
      <div class="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
        <!--Lead Card-->
        <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
          <a
            href="post.html"
            class="flex flex-wrap no-underline hover:no-underline"
          >
            <div class="w-full md:w-2/3 rounded-t">
              <nuxt-img class="h-full w-full shadow lazy" src="https://source.unsplash.com/collection/494263/800x600" />
            </div>

            <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
              <div
                class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-900 px-6">
                  👋 Welcome fellow Tailwind CSS and Ghost fan
                </div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5">
                  This starter template is an attempt to replicate the default
                  Ghost theme "Casper" using Tailwind CSS and vanilla
                  Javascript.
                </p>
              </div>

              <div
                class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
              >
                <div class="flex items-center justify-between">
                  <nuxt-img
                    class="w-8 h-8 rounded-full mr-4 avatar lazy"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <!--/Lead Card-->

              <!--Subscribe-->
      <div
        class="container font-sans bg-green-100 rounded mb-8 mt-8 p-4 md:p-24 text-center"
      >
        <h2 class="font-bold break-normal text-2xl md:text-4xl">
         Create new article
        </h2>
        <div class="w-full text-center pt-4">
          <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
            <input
              type="text"
              v-model="inputVal"
              placeholder="value"
              id="input-article"
              class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
            />
            <button
              @click="addArticle(inputVal, description, image)"
              class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
            >Add
            </button>
          </div>
        </div>
      </div>
      <!-- /Subscribe-->

        <!--Posts Container-->
        <div class="flex flex-wrap justify-between pt-12 -mx-6">
          <!--1/3 col -->
          <div v-if="loading">
          Loading ...
        </div>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-2" v-else>
          <div v-for="post in posts" :key="post.id" class="w-full p-6">
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
            >
            <NuxtLink class="flex flex-wrap no-underline" :to="`/blog/${post.id}`">
                <nuxt-img class="h-64 w-full rounded-t pb-6 object-cover lazy" :src="post.yoast_head_json.og_image[0].url" />
                <div class="w-full font-bold text-xl text-gray-900 px-6">
                  {{ post.title.rendered }}
                </div>
                <p class="text-gray-800 font-serif text-base px-6 mb-5" v-html="post.excerpt.rendered"></p>
              </NuxtLink>
            </div>
          </div>
        </div>

        </div>
        <!--/ Post Content-->
      </div>
    </div>
  </div>
</template>

<script setup>
  import { usePostStore } from '~/store/article'
  import { storeToRefs } from 'pinia'

  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts, addArticle } = usePostStore()
  fetchPosts()
</script>

