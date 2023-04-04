---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

// import { NAV_DATA } from './front-end.ts'
import jsonArr from './front-end.json'
</script>
<style src="./index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in jsonArr" :title="title" :items="items"/>


<br />
