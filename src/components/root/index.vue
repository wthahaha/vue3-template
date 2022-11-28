<script setup lang="ts">
  import { defineComponent } from 'vue'
</script>

<template>
  <dv-full-screen-container>
    <nav class="flex items-center text-white px-6 h-20 text-sm">
      <div class="flex items-center h-full">
        <div>🪢流分析</div>
        <ul class="flex ml-10 items-stretch h-full w-40">
          <li class="w-full">
            <a href="" class="h-full block flex items-center px-4 justify-center">镜像</a>
            <ul class="absolute">
              <li>
                <a href="" class="block justify-center">北京</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <main class="flex items-center h-[calc(100%-3rem)] grid grid-cols-24 text-teal-50">
      <!--将页面分成24列; h-[calc(100%-3rem)]: 100%-nav的高度-->
      <div class="border-solid border-1 border-cool-gray-700 h-full col-span-7 grid grid-rows-5">
        <!--本div占总页面的7列，同时将本div分成5行-->
        <div class="border-solid border-1 border-cool-gray-700 row-span-3 grid grid-cols-2">
          <!--本div占父div的3行,同时将本div分成两列-->
          <div class="border-solid border-1 border-cool-gray-700 h-full col-span-1">
            <!--本div占父div的1列-->
            各省访问流量排名
          </div>
          <div class="border-solid border-1 border-cool-gray-700 h-full col-span-1">
            <!--本div占父div的1列-->
            各运营商访问流量排名
          </div>
        </div>
        <div class="border-solid border-1 border-cool-gray-700 row-span-2 grid grid-cols-2">
          <!--本div占父div的2行-->
          <div class="border-solid border-1 border-cool-gray-700 h-full col-span-1">
            <!--本div占父div的1列-->
            查询类型统计
          </div>
          <div class="border-solid border-1 border-cool-gray-700 h-full col-span-1">
            <!--本div占父div的1列-->
            响应状态统计
          </div>
        </div>
      </div>
      <div class="border-solid border-1 border-cool-gray-700 h-full col-span-9 grid grid-rows-7">
        <div class="border-solid border-1 border-cool-gray-700 row-span-5">访问地图</div>
        <div class="border-solid border-1 border-cool-gray-700 row-span-2">折线</div>
      </div>
      <div class="border-solid border-1 border-cool-gray-700 h-full col-span-8 grid grid-rows-2">
        <div class="border-solid border-1 border-cool-gray-700 row-span-1 grid grid-cols-2">
          <div class="border-solid border-1 border-cool-gray-700 h-full col-span-1">TOP10</div>
          <div class="border-solid border-1 border-cool-gray-700 h-full col-span-1">TOP10</div>
        </div>
        <div class="border-solid border-1 border-cool-gray-700 row-span-1 grid grid-cols-2">
          <div class="border-solid border-1 border-cool-gray-700 h-full col-span-1">
            客户端TOP10
          </div>
          <div
            class="border-solid border-1 border-cool-gray-700 h-full col-span-1 grid grid-rows-7"
          >
            <div class="border-solid border-1 border-cool-gray-700 row-span-2">客户端空间总量</div>
            <div class="border-solid border-1 border-cool-gray-700 row-span-5">客户端类型</div>
          </div>
        </div>
      </div>
    </main>
  </dv-full-screen-container>
</template>

<style scoped>
  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 15px;
  }
  nav li:hover {
    color: white;
    background-color: #044b99;
  }
  nav a:hover {
    color: white;
    background-color: #0657ae;
  }
  nav li > ul {
    background-color: #044b99;
    height: 0;
    position: absolute;
    overflow: hidden;
    min-width: 10rem;
  }
  nav li > ul a {
    line-height: 40px;
  }
  nav li:hover > ul {
    height: auto;
  }
</style>
