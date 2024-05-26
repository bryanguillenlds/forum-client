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

      <div class="post-date text-faded" :title="humanFriendlyDate(post.publishedAt)">
        {{ diffForHumans(post.publishedAt) }}
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

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
    },

    diffForHumans (timestamp) {
      return dayjs.unix(timestamp).fromNow()
    },

    humanFriendlyDate (timestamp) {
      return dayjs.unix(timestamp).format('llll')
    }
  }
}

</script>

<style>

</style>
