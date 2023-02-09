
<template>
    <!--Container-->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <div class="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
        <!--Lead Card-->
        <div v-if="loading">
            Loading ...
          </div>
          <div class="flex h-full bg-white rounded overflow-hidden shadow-lg" v-else>
            <div
              class="flex flex-wrap no-underline hover:no-underline"
            >
              <div class="w-full md:w-2/3 rounded-t">
                  <nuxt-img preload class="h-full w-full shadow lazy" :src="post.yoast_head_json.og_image[0].url" />
              </div>

              <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <div
                  class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
                >
                  <p class="w-full font-bold text-xl text-gray-900 px-6 mt-5 mb-5" v-html="post.title.rendered"></p>
                  <p class="text-gray-800 font-serif text-base px-6 mb-5" v-html="post.excerpt.rendered"></p>
                </div>

              </div>
            </div>
          </div>
          <!--/Lead Card-->

          <!--Posts Container-->
          <div class="flex flex-wrap justify-between pt-12 -mx-6">
            <!--1/3 col -->
            <div v-if="loading">
            Loading ...
          </div>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3" v-else>
            <div v-for="post in posts" :key="post.id" class="w-full p-6">
              <div
                class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
              <NuxtLink class="flex flex-wrap no-underline" :to="`/blog/${post.id}`">
                  <nuxt-img preload class="h-64 w-full rounded-t pb-6 object-cover lazy" :src="post.yoast_head_json.og_image[0].url" />
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


<script lang="ts" setup>
  import { usePostStore } from '~/store/article'
  import { storeToRefs } from 'pinia'
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const { post, posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPost, fetchPosts, fetch } = usePostStore()
  fetchPost(route.params.id);
  fetchPosts();
</script>
