<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

export default {
  name: 'PageHome',
  components: { ThreadList },

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
