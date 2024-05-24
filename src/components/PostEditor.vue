<template>
  <div class="col-full">
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <textarea v-model="newPostText" cols="30" rows="10" class="form-input"/>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostEditor',

  data () {
    return {
      newPostText: ''
    }
  },

  methods: {
    submitPost () {
      this.$emit('submit-post', this.newPostText)
      this.newPostText = ''
    }
  }
}
</script>

<style scoped>

</style>
