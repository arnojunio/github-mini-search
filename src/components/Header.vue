<template>
  <header class="main-header">
    <div class="main-header-content">
      <h1>
        <router-link to="/">Github | User Search</router-link>
      </h1>
      <nav class="navbar">
        <ul class>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      fixed: false
    }
  },
  methods: {
    handleScroll: function() {
     this.fixed = window.scrollY > 95
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,700&display=swap');

body {
  margin: 0;
  display: block;
  background-color: #eeeeee;
}
.fixed{
  position: fixed;
}
.main-header {
  width: 100%;
  position: fixed;
  background-color: #2980b9;
  z-index: 999;
  margin-bottom: 20px;
}

.main-header-content {
  max-width: calc(1300px - 40px);
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
}

.main-header-content h1 {
  flex-basis: 330px;
  font-size: 1.6em;
  padding: 20px;
  width: 290px;
}

.main-header-content h1 a {
  font-weight: 400;
  color: #FFF;
}

.navbar {
  flex-basis: calc(100% - 330px);
  display: flex;
  justify-content: flex-end;
}

.navbar ul {
  display: flex;
  align-items: stretch;
}

.navbar ul li {
  list-style: none;
  display: flex;
  align-items: center;
}

.navbar ul li a {
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 400;
  font-size: 1.2em;
  color: #FFF;
}

.navbar ul li a:hover {
  color: #2980b9;
  background-color: #f5efec;
}

@media (max-width: 30em) {
  .main-header-content {
    padding: 0;
  }

  .user-info {
    flex-basis: 100%;
    padding: 0 10px;
    margin-top: 10px;
    max-width: 375px;
  }
}
</style>