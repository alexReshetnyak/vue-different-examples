<template>
    <div>
        <header>
            <div class="logo">Myweb.com</div>
            <nav>
                <span> <router-link to="/">Home</router-link></span>
                <span> <router-link to="/user">User</router-link></span>
                <span> <router-link to="/about_us">About us</router-link></span>
            </nav>
        </header>
    </div>
</template>


<script>
</script>

<style scoped>

a {
    text-decoration: none;
    color: inherit;
}

.logo {
  float: left;
}
nav {
  float: right;
}
nav span {
  background: #3aa8ff;
  font-size: 20px;
  padding: 5px 10px;
}

header {
  background: #2196f3;
  border-bottom: 4px solid #607d8b;
  box-sizing: border-box;
  padding: 30px;
  color: #ffffff;
  font-size: 30px;
}

header:after {
  content: ".";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
</style>
