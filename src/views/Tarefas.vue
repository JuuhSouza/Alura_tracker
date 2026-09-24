<template>
      <Formulario
      @aoSalvarTarefa="salvarTarefa"/>
        <div class="lista-tarefas">
            <Tarefa
            v-for="(tarefa, index) in tarefas" 
            :key="index"
            :tarefa="tarefa"/> <!-- v-for (tarefa, index) esse index é a chave -->
                <Box
                v-if="listaVazia">
                Você não esta produzindo pq ein??
                </Box>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue'
import Tarefa from '../components/Tarefa.vue';
import type ITarefa from '../interface/ITarefa.ts';
import Box from '../components/Box.vue';

export default defineComponent({
    components: {
        Formulario, Tarefa, Box
  },
  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  computed: {
    listaVazia() : boolean{
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
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

