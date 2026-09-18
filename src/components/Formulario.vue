<template>
    <div class="box formulario">
        <div class="columns">
            <div 
            class="column is-8" 
            role="form" 
            aria-label="Formulário para criação de nova tarefa">
                <input 
                type="text" 
                class="input" 
                v-model="descricao"
                placeholder="Qual tarefa vc deseja iniciar?">
            </div>
            <div class="column">
                <Temporizador
                @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    emits: ['aoSalvarTarefa'],
        components: {
        Temporizador
    },
    data() {
        return {
        descricao: ''
      }  
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) : void{
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''/* zerar form assim q finalizar */
        }
    }
})
</script>

<style>
.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>