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
import divide from '../utils/divide'
import multiply from '../utils/multiply'
import subtract from '../utils/subtract'
export default defineComponent({
  name: '',
  setup() {
    console.log('add', add([1, 2], '2'));
    // console.log(add([1, Symbol(11)], '2'));
    console.log('divide', divide(3, 2));

    console.log('multiply', multiply(2, 3));

    console.log('subtract', subtract(5, 3));
    
    
    
    return {
  
    }
  }
  
})
</script>
  
<style lang='scss'>
  
</style>