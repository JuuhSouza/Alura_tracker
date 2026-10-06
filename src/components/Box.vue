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
          backgroundColor: '#FFF4D4'
        }
      }
    }
})
</script>