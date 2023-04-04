---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import jsonArr from './coding.json'
</script>
<style src="./index.scss"></style>

# 编程导航

<MNavLinks v-for="{title, items} in jsonArr" :title="title" :items="items"/>


<br />
