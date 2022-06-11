<template>
  <footer class="page-footer">
    <div class="page-footer-content">
      <p>Made by arnojunio. See source code on <a href="https://github.com/arnojunio/github-mini-search" target="_blank">Github</a></p>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.page-footer{
    position: relative;
    top: 112px;
    width: 100%;
    background-color: #eaeaea;
}
.page-footer-content{
    max-width: calc(1300px - 80px);
    margin: 0 auto;
    padding: 20px 40px;
  
}
.page-footer-content p{
   text-align: center;
   font-weight: 500;
   padding: 20px 0;
}
</style>