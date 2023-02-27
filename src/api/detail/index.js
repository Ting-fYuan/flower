/* eslint-disable prettier/prettier */
import http from "@/utils/http.js";
console.log(http);
export const consondend=(id)=>{
    return http({
    url: `goods/${id}`,
    method: "GET",
    
   })
}
