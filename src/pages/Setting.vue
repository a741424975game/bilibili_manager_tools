<template>
  <div class="setting-contain">
    <div class="setting-button-group">
      <mt-button v-if="!loginStatus" class="setting-button" size="large" @click.native="navigaLogin">用户登录</mt-button>
      <mt-button v-else class="setting-button" size="large" @click.native="navigauserCenter">个人中心</mt-button>
      <mt-button class="setting-button" size="large" @click.native="navigaBaseSetting">基础设置</mt-button>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mint-ui'

  export default {
    components: {
      'mt-button': Button
    },
    name: 'Setting',
    data() {
      return {}
    },
    computed: {
      loginStatus() {
        if (this.$store.state.userService) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      navigaLogin: function (event) {
        this.$router.push('/Login')
      },
      navigaBaseSetting: function (event) {
        this.$router.push('/BaseSetting')
      },
      navigauserCenter: function (event) {
        this.$router.push('/UserCenter')
      }
    }
  }
</script>

<style scoped>
  .mint-header {
    background-color: #fb7299
  }

  .setting-contain {
    height: 100%;
    position: relative;
  }

  .setting-button-group {
    width: 100%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .setting-button {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #fb7299;
    background-color: transparent;
    color: #fb7299;
  }
</style>
