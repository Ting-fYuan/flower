<template>
  <div class="comments">
    <div class="commentHead">
      <com-head title="用户评价"></com-head>
    </div>
    <div class="content">
      <p>
        最近已有<span>{{ commentNum }}</span
        >人评价
      </p>
    </div>
    <div class="appraisalmain" v-for="(item, index) in commentArr" :key="index">
      <div class="appraisTop">
        <img src="@/assets/images/morenTou.png.webp" alt="图片" />
        <p>147****{{ phoneNum }}</p>
        <img src="@/assets/images/WechatIMG264 1.webp" alt="图片" />
      </div>
      <div class="appraisBottom">
        <p>{{ item }}</p>
        <img src="@/assets/images/202012251046531552.jpeg.webp" alt="图片" />
      </div>
    </div>
  </div>
</template>

<script>
import { generateComment } from "@/utils/comment";
export default {
  name: "CommentsView",
  data() {
    return {
      commentNum: "",
      // 评论数组
      commentArr: [],
      phoneNum: "",
    };
  },
  created() {
    let randomNumber = Math.floor(Math.random() * 10000);
    this.phoneNum = randomNumber.toString().padStart(4, "0");

    this.commentNum = localStorage.getItem("commentNum");

    // 评论生成
    for (let i = 0; i < this.commentNum; i++) {
      this.commentArr.push(generateComment());
    }
  },
};
</script>

<style lang="scss" scoped>
.comments {
  .content {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 5px;
    font-size: 14px;

    p {
      line-height: 50px;
      letter-spacing: 2px;
      span {
        color: #f60;
      }
    }
  }
  .appraisalmain {
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #884e22;
    .appraisTop {
      box-sizing: border-box;
      padding-top: 5px;
      display: flex;
      position: relative;
      flex-direction: row;
      align-items: center;
      padding-left: 5px;
      img {
        width: 20px;
        height: 20px;
        padding-right: 5px;
        &:nth-of-type(2) {
          position: absolute;
          right: 0;
          width: 14px;
          height: 14px;
          opacity: 1;
        }
      }
      p {
        width: 85px;
        height: 17px;
        opacity: 1;
        padding-left: 10px;
        color: #777;
        font-size: 20px;
        font-weight: 400;
        font-family: "Tahoma";
      }
    }
    .appraisBottom {
      box-sizing: border-box;
      padding-left: 5px;
      p {
        padding-top: 10px;
        font-size: 15px;
        text-indent: 2em;
        font-family: "Microsoft YaHei", "宋体", Tahoma, Arial, sans-serif;
        color: #555;
      }
      img {
        padding-top: 20px;
        width: 55.19px;
        height: 73.58px;
      }
    }
  }
}
</style>
