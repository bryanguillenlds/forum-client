<template>
  <div
    v-for="thread in threads"
    :key="thread.id"
    class="col-large push-top"
  >
    <h1>{{thread.tittle }}</h1>

    <div class="post-list">
      <div
        v-for="postId in thread.posts"
        :key="postId"
        class="post"
      >
        <div class="user-info">
          <a href="#" class="user-name">{{ getUserById(getPostById(postId).userId).name }}</a>

          <a href="#">
            <img class="avatar-large" :src="getUserById(getPostById(postId).userId).avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ getPostById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ getPostById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageHome',

  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },

  methods: {
    /**
     * Gets post by id.
     *
     * @param {String} postId - The post ID.
     * @returns {Object} - The post object that was found.
     **/
    getPostById (postId) {
      return this.posts.find(post => post.id === postId)
    },

    /**
     * Gets user by id.
     *
     * @param {String} userId - The user ID.
     * @returns {Object} - The user object that was found.
     **/
    getUserById (userId) {
      return this.users.find(user => user.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
