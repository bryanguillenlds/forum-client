<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts"/>

    <PostEditor @submitPost="save"/>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

export default {
  name: 'ThreadShow',

  components: {
    PostEditor,
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
      posts: sourceData.posts
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
    save (postText) {
      const postId = 'ggqq' + Math.random()

      const post = {
        id: postId,
        text: postText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
      }

      this.posts.push(post) // Add entire post to arr of posts
      this.thread.posts.push(postId) // Add post id to array of posts pertaining to the specific thread
    }
  }
}
</script>

<style scoped>

</style>
