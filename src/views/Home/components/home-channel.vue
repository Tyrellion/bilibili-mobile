<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab><!-- 上一个博客是直接在标签内的小标签用所有没有用上冒号 -->
  </van-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
interface INavItem{
    id:string;
    text:string;
}//这里定义了一个接口，用来规定list数组中的元素的类型，这样就可以在list数组中存放符合INavItem接口规定的对象了。
const active = ref(0);
const list = ref<INavItem[]>([]);//<INavItem[]>：这是对 list 所包含元素类型的限定，表示它应该是一个INavItem类型的数组。这里的INavItem是一个自定义的接口或类型。

axios({
  url: "/navList",
  method: "get",
}).then((res) => {
  console.log(res.data);
  list.value = res.data.result;
});
</script>
<style></style>
