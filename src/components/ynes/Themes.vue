<script>
import ThemesService from '@/services/ThemesService'

export default {
  name: 'themes',
  data () {
    return {
      themes: []
    }
  },
  mounted () {
    this.getThemes()
  },
  methods: {
    async getThemes () {
      const response = await ThemesService.fetchThemes()
      this.themes = response.data
    }
  }
}
</script>

<template lang="pug">
  v-container(fluid grid-list-md)
    h2 Themes
    v-layout(row wrap)
      v-flex(v-for="theme in themes" v-bind="{ [`xs${theme.flex}`]: true }" :key="theme.title")
        v-card.text-xs-center.pa-2(color="accent")
          v-icon(large) {{ theme.icon }}
          h1(v-text="theme.title")
</template>
