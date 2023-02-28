// 获取随机图片接口
import axios from "axios";

// let data = [];

export function getImgs() {
  axios
    .get("https://picsum.photos/200/300?grayscale")
    .then((response) => {
      // 将每次请求的数据存储到数组中
      return response.url;
    })
    .catch((error) => {
      console.log(error);
    });
}

// let intervalId = setInterval(() => {
//   getImgs();
//   if (data.length >= 10) {
//     clearInterval(intervalId);
//     return data;
//   }
// }, 1000);
