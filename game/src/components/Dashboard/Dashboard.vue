<template>
  <div class="container dashboard_container">
    <dir class="admin_nav">
      <ul>
        <li><router-link to="/dashboard/add_posts">Add Posts</router-link></li>
        <li>
          <router-link to="/dashboard/post_list">Manage Posts</router-link>
        </li>
      </ul>
    </dir>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
