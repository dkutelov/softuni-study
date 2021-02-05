<template>
  <div id="app">
    <div class="counter">
      <h1>
        {{ timeElapsed }}
      </h1>
    </div>
    <section class="memory-game">
      <div
        v-for="(card, i) in cards"
        :key="`${card.type}-${i}`"
        class="memory-card"
        :class="{ flip: card.flipped, 'disable-card': card.disabled }"
        :data-framework="card.type"
        @click="onCardClick(i, $event)"
      >
        <img class="front-face" :src="card.image" alt="Aurelia" />
        <img class="back-face" :src="jsBadge" alt="JS Badge" />
      </div>
    </section>
  </div>
</template>

<script>
import jsBadge from "./assets/js-badge.svg";
import vueCard from "./assets/vue.svg";
import reactCard from "./assets/react.svg";
import angularCard from "./assets/angular.svg";
import backboneCard from "./assets/backbone.svg";
import emberCard from "./assets/ember.svg";
import aureliaCard from "./assets/aurelia.svg";

const cardsSource = [
  {
    type: "vue",
    disabled: false,
    flipped: false,
    image: vueCard,
  },
  {
    type: "vue",
    disabled: false,
    flipped: false,
    image: vueCard,
  },
  {
    type: "react",
    disabled: false,
    flipped: false,
    image: reactCard,
  },
  {
    type: "react",
    disabled: false,
    flipped: false,
    image: reactCard,
  },
];

export default {
  name: "App",
  data() {
    return {
      cards: [],
      flippedCards: [],
      jsBadge,
      timeElapsed: 0,
    };
  },
  computed: {
    disabledCount() {
      return this.cards.filter((c) => c.disabled).length;
    },
  },
  methods: {
    onCardClick(i, event) {
      //TODO disabled cards class

      this.cards[i].flipped = !this.cards[i].flipped;

      if (this.flippedCards.length < 2) {
        this.flippedCards.push({ type: this.cards[i].type, i });
      }
    },
    shuffleCards() {
      const shuffledCards = [...cardsSource];
      for (var i = shuffledCards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffledCards[i];
        shuffledCards[i] = shuffledCards[j];
        shuffledCards[j] = temp;
      }
      this.cards = shuffledCards;
    },
  },
  created() {
    this.shuffleCards();
  },
  mounted() {
    //TODO move to function reset game
    setInterval(() => {
      this.timeElapsed += 1;
    }, 1000);
  },
  watch: {
    //TODO watcher if all cards are disabled
    //TODO watcher if elapsed time === 60;
    flippedCards: function(newValue, oldValue) {
      if (newValue.length === 2) {
        const card1 = this.cards[this.flippedCards[0].i];
        const card2 = this.cards[this.flippedCards[1].i];
        if (this.flippedCards[0].type === this.flippedCards[1].type) {
          card1.disabled = true;
          card2.disabled = true;
        } else {
          setTimeout(() => {
            card1.flipped = false;
            card2.flipped = false;
          }, 1000);
        }
        this.flippedCards = [];
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}

#app {
  width: 100%;
  padding: 7%;
}
.memory-game {
  width: 640px;
  height: 640px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
}

.memory-card {
  width: calc(25% - 10px);
  height: calc(33.333% - 10px);
  margin: 5px;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.disable-card {
  pointer-events: none;
}

.memory-card:active {
  transform: scale(0.97);
  transition: transform 0.2s;
}

.memory-card.flip {
  transform: rotateY(180deg);
}

.front-face,
.back-face {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  background: #fff29e;
  backface-visibility: hidden;
}

.front-face {
  transform: rotateY(180deg);
}

.counter {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
