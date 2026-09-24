<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }" >
    <div class="column is-one-quarter ">
      <BarraLateral
      @aoTemaAlterado="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo" >
      <router-view></router-view>
      </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  components: {
    BarraLateral,
  },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema(modoescuroAtivo: boolean) {
      this.modoEscuroAtivo = modoescuroAtivo
    }
  }
})
</script>

<style scoped>
.lista-tarefas{
  padding: 1.25rem;
}

/* DARK MODE */
main{
  --bg-primario: rgb(202, 202, 202);
  --texto-primario: #28004e;
}

main.modo-escuro{
  --bg-primario: #28004e;
  --texto-primario: rgb(235, 235, 235);
}

.conteudo{
  background: var(--bg-primario);
}
</style>

