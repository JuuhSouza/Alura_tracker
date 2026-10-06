<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }" >
    <div class="column is-one-quarter ">
      <BarraLateral
      @aoTemaAlterado="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo" >
      <Notificacoes/>
      <router-view></router-view>
      </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue';

export default defineComponent({
  components: {
    BarraLateral, Notificacoes
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
  --bg-primario: #F0F2F0;
  --bg-menu-lateral: #1F2C3D;
  --texto-primario: #28004e;
  --cronometro-color: #28004e;
  --input-color: #f8f8f8;
  --input-background: #2E3444;
  --descricao-color: #2E3444;
}

main.modo-escuro{
  --bg-primario: #333333;
  --bg-menu-lateral: #1F2C3D;
  --texto-primario: #f8f7f8;
  --cronometro-color: #E3AC1B;
  --input-color: #f8f8f8;
  --input-background: #3f465a;
  --descricao-color: #030303;
}

.conteudo{
  background: var(--bg-primario);
}
</style>

