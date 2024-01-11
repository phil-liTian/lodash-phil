<!--
 * @Date: 2024-01-09 10:35:29
 * @LastEditors: phil_litian
-->
<template>
  <div></div>
</template>
  
<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';
import add from '../utils/math/add'
import divide from '../utils/math/divide'
import multiply from '../utils/math/multiply'
import subtract from '../utils/math/subtract'
import sum from '../utils/math/sum'
import sumBy from '../utils/math/sumBy'
import ceil from '../utils/math/ceil'
import floor from '../utils/math/floor'
import round from '../utils/math/round'
import mean from '../utils/math/mean'
import meanBy from '@/utils/math/meanBy';
import min from '../utils/math/min'
import minBy from '../utils/math/minBy'
import max from '../utils/math/max'
import maxBy from '../utils/math/maxBy'
export default defineComponent({
  name: '',
  setup() {
    // console.log('add', add([1, 2], '2'));
    // // console.log(add([1, Symbol(11)], '2'));
    // console.log('divide', divide(3, 2));

    // console.log('multiply', multiply(2, 3));

    // console.log('subtract', subtract(5, 3));
    
    // console.log('sum', sum([undefined, null]));

    // console.log('sumBy', sumBy([{ n: 1, d: 3 }, { n: 2, d: 99 }], obj => obj.d));

    // console.log('ceil', ceil(1.222, 2));
    // console.log('floor', floor(1.222, 2));
    // console.log('round', round(1.225, 2));
    
    // console.log('mean', mean([1, 2, 3, 6, 1]));
    // console.log('meanBy', meanBy([{ o: 1 }, { o: 5 }], obj => obj.o));
    
    console.log('min', min([1, 2, -1]));

    console.log('minBy', minBy([{ o: 1 }, { o: 2 }, { o: 0 }], obj => obj.o ));

    console.log('max', max([1, 2, -1]));

    console.log('maxBy', maxBy([{ o: 1 }, { o: 2 }, { o: 0 }], obj => obj.o ));
    
    
    return {
  
    }
  }
  
})
</script>
  
<style lang='scss'>
  
</style>