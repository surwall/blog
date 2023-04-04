---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import jsonArr from './generic.json'
</script>
<style src="./index.scss"></style>

# 通用导航

<MNavLinks v-for="{title, items} in jsonArr" :title="title" :items="items"/>


<br />
