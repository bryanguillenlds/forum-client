<template>
  <div>Page Home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ getUserById(getPostById(postId).userId).name }}</p>
      <p>{{ getPostById(postId).text }}</p>
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
    getPostById (postId) {
      return this.posts.find(post => post.id === postId)
    },

    getUserById (userId) {
      return this.users.find(user => user.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
