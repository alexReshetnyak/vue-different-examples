<template>
    <div>
        <header>
            <div class="logo">Myweb.com</div>
            <nav>
                <span>Home</span>
                <span>User</span>
                <span>About us</span>
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
