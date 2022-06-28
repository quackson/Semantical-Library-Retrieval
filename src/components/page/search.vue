<template>
<div>
    <div class="login-wrap">  
        <div class="picture">  
            <img :src="imgUrl"
            contain   
            height="50%"
            width="45%">
        </div>
        <div class="searchBar">
            <div class="search-box">            
            <input type="text" v-model="message" class="search-left" placeholder="请输入要搜索的内容" @keyup.enter.native="searchto">
            <input type="button" class="search-right" value="search" icon="el-icon-search" @click="searchto">
            </div>
        </div>
        <div class="information">
            <el-row :gutter="10">
              <el-col :span="3">
                <el-button type="info" icon="el-icon-view" circle @click="openHelp"></el-button>

              </el-col>              
              <el-col :span="3">
                <el-button type="info" icon="el-icon-user" circle @click="contact"></el-button>
              </el-col>              
              <el-col :span="3">
                <el-button type="info" icon="el-icon-star-off" circle @click="GitHub"></el-button>
              </el-col>   
            </el-row>
        </div>
        <div class="info">
            <el-row :gutter="9">
              <el-col :span="3">
                查看说明...
              </el-col>              
              <el-col :span="3">
                联系我们...
               </el-col>              
              <el-col :span="3">
                开源代码...
              </el-col>   
            </el-row>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            message:'',
            imgUrl:require("../../assets/img/logo3.png")
        };
    },
    methods: {
        searchto(){
            console.log(this.message);
            this.$router.push({
              name: 'result',
              params: {keyword:this.message}
            });
        },
        openHelp(){
            this.$alert('输入查询关键词,如“a library to import baidu map interface”\
            点击Search按钮,\
            搜索结果将会为您推荐符合要求的JS开源库', '使用方法', {
            confirmButtonText: '确定'
            });
        },
        contact(){
            this.$alert('zhangjq17@pku.edu.cn,', '联系方式', {
            confirmButtonText: '确定'
            });
        },
        GitHub(){
            this.$alert('https://github.com/Vremold/DLS', 'GitHub', {
            confirmButtonText: '确定'
            });
        },
    },
};
</script>

<style scoped>
.picture{   
    margin-top:10%;
    margin-left:37%; 
}
 .search-box{
     margin:0 auto; 
     width: 750px;
 }
.search-left{
    text-indent: 20px;
    font-size:18px;
     width:80%;
    height:50px;
    border:rgb(137, 233, 217) 1px solid;
    margin-top:20px;
    border-bottom-left-radius:25px;
    border-top-left-radius:25px;
    outline:none;
}
.search-right{
    width:19%;
    height:50px;
    font-size:18px;
    background:rgb(0, 204, 204);
    color: #fff;
    border:none;
    margin-top:20px;
    border-bottom-right-radius:25px;
    border-top-right-radius:25px;
    outline:none;
}
.login-wrap {
    position: fixed;
    width:100%;
    height: 100%;
    background-size: 100%;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-image: url(../../assets/img/login6.jpg);
}
.head {
    width: 100%;
    height: 70px;
    background-color: #324157;
}
.head button {
    float: right;
    height: 36px;
    margin-left: 10px;
    margin-top: 15px;
}
.searchBar{
    margin-top:1%;
    width:34%;
    margin-left:32%;
}
.information{
    margin-top:10%;
    margin-left:42%;
}

.info{
    margin-top:1%;
    margin-left:41%;
}
</style>