<template>
<div>
    <div class="login-wrap">
        <div class="picture"  @click="home">  
            <img :src="imgUrl"
            contain   
            height="10%"
            width="10%"
           >
            <div class="return">
                | Search Result
            </div>
        </div>
        <div class="result">
            <el-card class="box-card" v-for="(item,index) in repos":key=index>
              <div slot="header" class="clearfix">
                <span>开源仓库 : ID {{index+1}}</span>
                <el-button style="float: right; padding: 3px 0; font-size:18px;" type="text"
                @click="goto(item)">查看该开源项目</el-button>
              </div>
              <div class="first-line">
                <el-row :gutter="24">
                  <el-col :span="6">
                    项目名称：{{item.name}}
                  </el-col>              
                  <el-col :span="6">
                    项目所属：{{item.owner}}
                   </el-col>              
                  <el-col :span="12">
                    项目地址：{{item.link}}
                  </el-col>   
                </el-row>
              </div>
              <div class="descip">
               项目介绍 : {{item.description}}
              </div>
              <div class="topicsList">
                <span class="tag-group__title">Topic :</span>
                  <el-tag class="topic_item"
                    v-for="(topic,index2) in item.topics"
                    :key="index2"
                    :type="labels[index2%5]"
                    effect="Topics: "
                    style="background-color:rgba(255,255,255,0.4)">
                    {{ topic }}
                  </el-tag>
              </div>
            </el-card>
        </div>       
        
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            message:'check',
            imgUrl:require("../../assets/img/logo3.png"),
            Len:20,
            labels:[
                '',
                'success',
                'info',
                'danger',
                'warning'
            ],
            repos:[
                {
                    'name':'frontend',
                    'owner':'quazkson',
                    'description':'homework for deep generation. Combine FastSpeech2 with different vocoders ⭐INFERENCE (modify origin repos): https://github.com/ming024/FastSpeech2 https://github.com/NVIDIA/waveglow https://github.com/mindslab-ai/univnet https://github.com/jik876/hifi-gan',
                    'link':'https://github.com/quackson/Arxiver',
                    'topics':[
                        'frontend',
                        'vue',
                        'django',
                        'describe',
                        'check',
                        'forwhat',
                        'message'
                    ]

                },
                {
                    'name':'frontend',
                    'owner':'quazkson',
                    'description':'a repo that describe the function of ...',
                    'link':'https://github.com/quackson/frontend',
                    'topics':[
                        'frontend',
                        'vue',
                        'django',
                        'describe',
                        'check',
                        'forwhat',
                        'message'
                    ]

                },
                {
                    'name':'frontend',
                    'owner':'quazkson',
                    'description':'a repo that describe the function of ...',
                    'link':'https://github.com/quackson/frontend',
                    'topics':[
                        'frontend',
                        'vue',
                        'django',
                        'describe',
                        'check',
                        'forwhat',
                        'message'
                    ]

                },
                {
                    'name':'frontend',
                    'owner':'quazkson',
                    'description':'a repo that describe the function of ...',
                    'link':'https://github.com/quackson/frontend',
                    'topics':[
                        'frontend',
                        'vue',
                        'django',
                        'describe',
                        'check',
                        'forwhat',
                        'message'
                    ]

                },
                {
                    'name':'frontend',
                    'owner':'quazkson',
                    'description':'a repo that describe the function of ...',
                    'link':'https://github.com/quackson/frontend',
                    'topics':[
                        'frontend',
                        'vue',
                        'django',
                        'describe',
                        'check',
                        'forwhat',
                        'message'
                    ]

                },
                {
                    'name':'frontend',
                    'owner':'quazkson',
                    'description':'a repo that describe the function of ...',
                    'link':'https://github.com/quackson/frontend',
                    'topics':[
                        'frontend',
                        'vue',
                        'django',
                        'describe',
                        'check',
                        'forwhat',
                        'message'
                    ]

                },

            ]
        };

    },
    methods: {
        goto (item) {
           window.open(item.link,'_blank');
         },
        searchto(){
            console.log(this.message);
            this.$router.push({
              name: 'result',
              params: {keyword:this.message}
              });
        },
        home(){
            this.$router.push('/search');
        },
        submitForm() {
            
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
    created(){
        this.message=this.$route.query.keyword;
    },   
};
</script>

<style scoped>
.topicsList{
    margin-top:0.5%;
    font-size:18px;

}
.topic_item{
    margin-left:0.5%;
    font-size:18px;
}
  .descip{
    margin-top:1%;
    font-size:18px;

  }
  .first-line{
    font-size:20px;
  }
  .item {
    margin-bottom: 18px;
  }
.clearfix{
    font-size:20px;
    font-weight:bold;
}
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top:3%;
    width:100%;
    background-color:rgba(210, 240, 244,0.5);
  }
.picture{   
    margin-top:1%;
    margin-left:1%;
    display: flex; 
}
.return{
    margin-top:1%;
    margin-left:1%;
    font-family: "PingFang SC";
    font-size:45px;
    font-weight: bold;

}
.result{
    margin-top:3%;
    width:90%;
    margin-left:5%;
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
    overflow:scroll;
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