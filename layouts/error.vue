<template>
  <div>
    <main>
      <div>
        <h4>頁面不存在或伺服器出現錯誤，請稍後再試</h4>
        <p>重新登錄或回首頁</p>
        <ul>
          <li><a href="javascript: void()" @click.prevent="$router.push({ path: '/' })">首頁</a></li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      required: false,
      type: Object,
      default() {
        return {
          statusCode: '',
          message: '',
        };
      },
    },
  },
};
</script>

<style lang="scss"></style>
