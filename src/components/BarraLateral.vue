<template>
<header>
    <h1> 
        <img src="../assets/iconeBook-removebg-preview.png" alt="">
    </h1>
    <div class="has-text-centered">
    <button 
    @click="alterarTema"
    class="button">
      {{ textobotao }}
    </button>
    </div>
    
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link"> 
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"> </i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
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

<style scoped>
h1 {
  text-align: center;
}

header {
  background: var(--bg-menu-lateral);
  width: 100%;
  height: 100vh;
  padding: 2rem;
}
@media only screen and (max-width: 768px) {
  header {
    height: auto;
  }
}

.panel{
  padding: 0.5rem 0;
}

.panel li {
  margin: 8px;
}

.link {
  color:white;
  transition: all .2s ease;
}

.link:hover {
  opacity: .7;
}

.link.router-link-active {
  color: #00a2ff;
}
</style>