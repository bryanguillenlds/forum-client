<template>
  <div class="post-list">
    <div
      v-for="post in posts"
      :key="post.id"
      class="post"
    >
      <div class="user-info">
        <a href="#" class="user-name">{{ getUserById(post.userId).name }}</a>

        <a href="#">
          <img class="avatar-large" :src="getUserById(post.userId).avatar" alt="">
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <AppDate class="post-date text-faded" :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PostList',

  props: {
    posts: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      users: sourceData.users
    }
  },

  methods: {
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

<style>

</style>
