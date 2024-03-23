import Reveal from 'reveal.js';
import HighLight from 'reveal.js/plugin/highlight/highlight.esm'

const deck = new Reveal()
deck.initialize({
   hash: true,
   plugins: [HighLight],
   controlsTutorial: false,
   controls: false
})