<template>
  <img :src="image" alt="Background" />

  <div class="indecision-container">
    <input
      type="text"
      name="question"
      id="question"
      placeholder="Escribe tu pregunta..."
      v-model="question"
    />
    <p>Recuerda terminar con un signo de interrogación (?)</p>

    <div>
      <h2>{{ addSymbol }}</h2>
      <h1 v-if="isValidQuestion">{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
//Hash Table for Answers
import mapAnswer from "@/helpers/mapAnswer.js";

export default {
  name: "Indecision",
  data() {
    return {
      question: "",
      answer: null,
      image: "/shiba_inu.gif",
      isValidQuestion: false,
    };
  },
  watch: {
    question(value) {
      this.isValidQuestion = false;

      if (!value.includes("?")) return;

      this.isValidQuestion = true;

      this.getAnswer();
    },
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = "Pensado...";

        const { answer, image } = await fetch("https://yesno.wtf/api").then(
          (res) => res.json()
        );

        //Obtenemos un número random siendo el máximo el largo del array
        const position = this.getRandomNumber(mapAnswer[answer].length);

        this.answer = mapAnswer[answer][position];

        this.image = image;
      } catch (error) {
        this.image = "/error.gif";
        this.answer = "Ups... una pregunta muy existencial (Error API)";
      }
    },
    getRandomNumber(max) {
      return Math.floor(Math.random() * max + 1);
    },
  },
  computed: {
    addSymbol() {
      if (this.question.includes("¿")) return this.question;

      let arrayWords = this.question.split("");
      arrayWords.unshift("¿");
      return arrayWords.length > 1 ? arrayWords.join("") : "";
    },
  },
};
</script>

<style scoped>
img {
  height: 100%;
  left: 0;
  object-fit: cover;
  opacity: 0.2;
  position: fixed;
  top: 0;
  width: 100%;
}

input {
  border-radius: 0.5rem;
  border: none;
  font-family: inherit;
  font-size: 1.2rem;
  max-width: 650px;
  padding: 1rem 1.5rem;
  width: 100%;
}

input:focus {
  outline: none;
}

h1,
h2,
p {
  color: white;
}

h2 {
  font-size: 3rem;
  margin-top: 10rem;
}

p {
  font-size: 20px;
  margin: 0.5rem 0 0 0;
}

.indecision-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  text-align: center;
  z-index: 2;
}
</style>
