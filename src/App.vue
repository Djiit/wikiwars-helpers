<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img src="./assets/logo.png" alt="Wikiwars">
      </div>
      <div class="navbar-menu">
        <router-link to="/" class="navbar-item">Dashboard</router-link>
        <router-link to="/preview" class="navbar-item">Preview</router-link>
      </div>
    </nav>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  @import "~bulma/css/bulma.css"
</style>
