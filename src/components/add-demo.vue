<!--
 * @Date: 2024-01-09 10:35:29
 * @LastEditors: phil_litian
-->
<template>
  <div></div>
</template>
  
<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';
import add from '../utils/add'
export default defineComponent({
  name: '',
  setup() {
    console.log(add([1, 2], '2'));
    console.log(add([1, Symbol(11)], '2'));
    
    return {
  
    }
  }
  
})
</script>
  
<style lang='scss'>
  
</style>