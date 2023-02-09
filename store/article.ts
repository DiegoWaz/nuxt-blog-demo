import { defineStore } from 'pinia'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    post: "",
    posts: [],
    loading: false,
    error: null
  }),
  getters: {
    // posts: state => state.posts
  },
  actions: {
    async fetchPosts() {
      this.loading = true
      try {
        this.posts = await fetch('https://www.gambettesbox.fr/fr/fr/blog/wp-json/wp/v2/posts/?status=publish&per_page=6')
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id: number) {
      this.loading = true
      try {
        this.post = await fetch('https://www.gambettesbox.fr/fr/fr/blog/wp-json/wp/v2/posts/' + id)
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    addArticle(title:string, description:string = "lorem ipsum", image:string = "https://source.unsplash.com/collection/494263/800x600") {
        let post = {
            yoast_head_json: {
                og_image: [{
                    url: image
                }]
            },
            title: {
                rendered: title
            },
            excerpt: {
                rendered: description
            }
        };

        this.posts.push(post);
        let inputValue = document.getElementById('input-article');
        inputValue.value = "";
    }
  }
})
