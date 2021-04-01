<template>
  <div>
    <div class="container-fluid" id="head">
      <h2 class="text-center">Welcome to my Blog!</h2>
    </div>
    <h3 class="text-center">Last Articles</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mt-3 left">
          <div class="card mb-4" style="width: 50rem;" v-for="article in last_articles" :key="article.id">
            <div class="card-body">
              <h5 class="card-title">{{ article.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ article.date_created }}</h6>
              <p class="card-text">{{ article.description | slice}}</p>
              <a href="" class="btn btn-primary">Read More &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>


</template>


<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import slice from "@/filters/slice";


Vue.use(VueAxios, axios)
export default {
  name: "Home",
  data() {
    return {
      limit: 20,
      last_articles: null
    }
  },
  filters:{
    slice
  },
  mounted() {
    Vue.axios.get('http://127.0.0.1:8000/main')
        .then(response => this.last_articles = response.data)
  },

}
</script>

<style scoped>
#head {
  background-color: #599cff;
  height: 150px;
}

h2 {
  padding-top: 50px;
  color: white;
}

.card {
  margin-left: 35%;
  margin-top: 50px;
  width: 150px;
  box-shadow: 0 16px 48px #E3E7EB;
  justify-content: space-around;
}

h3 {
  padding-top: 50px;
}
</style>