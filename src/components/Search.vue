<template>
  <main>
    <div class="main">
      <header class="main-content">
        <div class="box-search">
          <h1>Github mini search</h1>
 
            <input class="search" @change="getData" v-model="term" type="text" placeholder="Buscar por nome de usuário"
              required />
    
        </div>
      </header>
    </div>

    <div id="main-content" class="content">
      <div class="img-search">
      </div>
    </div>
    <div class="content">
      <div class="result">
        <div class="card" v-for="result in results" :key="result.name">
          <h4><b>{{ result.login }}</b></h4>
          <div class="img"><img :src="`${result.avatar_url}`" alt="avatar"></div>
          <div class="info"><a target="_blank" href="https://github.com/arnojunio">Profile</a><span>Score: 1</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      term: "",
      results: []
    }
  },
  methods: {
    async getData() {
      this.$axios.get(`https://api.github.com/search/users`, { params: { q: this.term, per_page: 20 } })
        .then((response) => {
          this.results = response.data.items;
        })
        .catch(function (error) {
          console.error(error);
        });

    }
  }
}
</script>

<style>
.main {
  width: 100%;
  background-color: #eaeaea;
}

.main-content {
  max-width: calc(1300px - 40px);
  padding: 40px;
  margin: 0 auto;
}

.main-content h1 {
  font-size: 4em;
  font-family: "Ubuntu";
  text-align: center;
  padding: 20px 0;
  font-weight: 400;
  margin-bottom: 20px;
}

.search[type=text] {
  width: calc(100% - 80px);
  margin: 0 40px;
  padding: 10px 10px !important;
  font-size: 1.4em;



}

.search[type=text]:focus {
  border-color: #9dbbcf;
  box-shadow: 0 0 0 0.2rem rgba(40, 139, 206, 0.25);
  border-color: -internal-light-dark(rgb(211, 32, 32), rgb(214, 2, 2));
}

.content {
  max-width: calc(1300px - 80px);
  margin: 0 auto;
  border: 1px solid #eaeaea;
  padding: 10px 10px !important;
}
.result {
    max-width: calc(1300px - 40px);
    /* padding: 0 20px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    flex-basis: calc(25% - 10px);
    margin-bottom: 10px;
}
.card h4 {
    background-color: #2980b9;
    margin: 0;
    font-size: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    color: #fff;
    font-weight: 500;
}
.img {
    padding: 10px;
}
.result img, .result-flw img {
    width: 100%;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    padding: 3px;
    background-color: #2980b9;
    margin: 0 auto;
}
</style>