<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
            <Cronometro
            :tempoEmSegundos="tempoEmSegundos"/>
        <button 
        :disabled="cronometroRodando"
        @click="iniciar"
                        class="button">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
        <span>play</span>
        </button>
        <button 
        @click="finalizar"
        :disabled="!cronometroRodando" 
        class="button">
                <span class="icon">
                     <i class="fas fa-stop"></i>
                </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({
        components: {
        Cronometro
    },
    emits: ['aoTemporizadorFinalizado'],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false, /* travar opção stop quando o cronometro n estiver rodando */
    }  
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000 ) /* funcionanmento do cronometro */
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro) /* pausar cronomretro */
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        },
    },
})
</script>

<style>

</style>
