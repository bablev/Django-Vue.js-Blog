<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top" style="background-color: #fdfdfd">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Articles</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <a class="btn btn-outline-secondary"  id="reg" role="button"  @click="$router.push('/auth/signup')">Sign Up</a>
        <a class="btn btn-outline-secondary"  id="log" role="button"  @click="$router.push('/auth/signin')">Sign In</a>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Nav"
}
</script>

<style scoped>
body {
  background-color: #fdfdfd
}

nav {
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
}

#reg {
  margin-right: 250px;
}
.navbar{
  margin-top: 0;
  display: flex;

}
#log{
  margin-right: 250px;
}

</style>