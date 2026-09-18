<template>
<header>
    <h1> 
        <img src="../assets/iconeBook-removebg-preview.png" alt="">
    </h1>
    <button 
    @click="alterarTema"
    class="button">
      {{ textobotao }}
    </button>
</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textobotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
    methods: {
      alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
          this.$emit('aoTemaAlterado', this.modoEscuroAtivo) 
        }
    }
})
</script>

<style>
header {
  padding: 1rem;
  background: rgb(15, 0, 29);
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>