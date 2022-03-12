<template>
  <h2>{{ customTitle }}</h2>
  <p data-testid="counter">{{ counter }}</p>
  <p>
    {{ counter }} <sup>2</sup> = <span>{{ squareValue }}</span>
  </p>

  <div class="buttons">
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    title: String,
    start: {
      default: 1, //: Not required because set default value
      type: Number,
      validator(value) {
        return value >= 0;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  computed: {
    squareValue() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title ? this.title : "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: #41b883;
  border-radius: 0.5rem;
  border: none;
  color: #35495e;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: 0.3s background-color ease, 0.3s color ease;
}

button:first-child {
  margin-right: 1rem;
}

button:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
