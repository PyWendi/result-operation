import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
	
	// All stores
	const count = ref(0)
	const doubleCount = computed(() => count.value * 2)
	const demande = reactive({
		matricule: "",
		nom: "",
		prenom: "",
		mention: "",
		Annee: "",
	})
	
	// All functions
	function increment() {
		count.value++
	}


	return { count, doubleCount, increment }
})
