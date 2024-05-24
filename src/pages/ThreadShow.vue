<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts"/>

    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPostText" cols="30" rows="10" class="form-input"/>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'

export default {
  name: 'ThreadShow',

  components: {
    PostList
  },

  props: {
    id: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: ''
    }
  },

  computed: {
    /**
     * Computes thread based on id passed as route parameter
     *
     * @return {Object} - Thread object with all its properties.
     */
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },

    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },

  methods: {
    addPost () {
      const postId = 'ggqq' + Math.random()

      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
      }

      this.posts.push(post) // Add entire post to arr of posts
      this.thread.posts.push(postId) // Add post id to array of posts pertaining to the specific thread

      this.newPostText = ''
    }
  }
}
</script>

<style scoped>

</style>
