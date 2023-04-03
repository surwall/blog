---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import { NAV_DATA } from './coding.ts'
</script>
<style src="./index.scss"></style>

# 编程导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />
