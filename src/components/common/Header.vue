<template>
<div>
  <el-row :gutter="20">
  <el-col :span="24">
    <div class="header">
      <div class="home-btn" @click="homeScreenChange">
        <i class="el-icon-s-home"></i>
      </div>    
    </div>
  </el-col>
  </el-row>
</div>
</template>
<script>
import bus from "../common/bus";
export default {
  data() {
    return {
    };
  },
  computed: {
   
  },
  created() {
    
  },
  methods: {
    
    //主页
    homeScreenChange() {
      this.$router.push("/search");
    },
  },
  mounted() {
  }
};
</script>
<style scoped>

.header {
  background-color: #ffe4c4;
  box-sizing: border-box;
  height: 70px;
  position: fixed;
  top: 0px;
  width: 100%;
  font-size: 22px;
  color: #fff;
  z-index: 50;
}
.home-btn {
  margin-left:15px;
  padding: 0 5px;
  cursor: pointer;
  line-height: 70px;
  font-size: 30px;
}
.header .logo {
  float: left;
  padding: 0 5px;
  width: 250px;
  cursor: pointer;
  line-height: 70px;
}
</style>
