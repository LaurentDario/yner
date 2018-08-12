<template lang="pug">
  v-app(dark)
    v-toolbar
      v-btn(icon href="/")
        v-icon home
      v-toolbar-title Yner
    v-btn(fixed fab bottom right elevation-8 color="secondary" to="/create")
      v-icon create
    router-view
</template>
