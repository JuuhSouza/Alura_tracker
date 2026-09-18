<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot> <!-- rederizar estrututra dentro desse componente -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      estilos: {
          backgroundColor: '#f0f8ff7c'
        }
      }
    }
})
</script>

<style scoped>
.box{
    color: black;
}
</style>