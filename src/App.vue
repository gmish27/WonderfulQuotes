<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="content">
        <app-progress :count="quotes.length" :maxQuotes="maxQuotes"></app-progress>
        <app-add-quote @input-quote="addQuote"></app-add-quote>
        <div class="section">
          <div class="columns is-multiline">
            <app-frame
              v-for="quote in quotes"
              :key="quote.id"
              :quoteId="quote.id"
              @remove-quote="removeFrame"
            >{{ quote.text }}</app-frame>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Progress from "./components/Progress";
import AddQuote from "./components/AddQuote";
import Frame from "./components/Frame";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  data() {
    return {
      quotes: [
        {
          id: 0,
          text:
            "Adapt what is useful, reject what is useless, and add what is specifically your own."
        },
        {
          id: 1,
          text:
            "Knowing is not enough, we must apply. Willing is not enough, we must do."
        }
      ],
      maxQuotes: 10
    };
  },
  components: {
    appProgress: Progress,
    appAddQuote: AddQuote,
    appFrame: Frame,
    appHeader: Header,
    appFooter: Footer
  },
  methods: {
    addQuote(text) {
      if (this.quotes.length === 10) {
        this.$buefy.toast.open({
          message: "Delete any existing quote to add a new one!",
          type: "is-danger"
        });
        return;
      }

      let id = 0;
      if (this.quotes.length > 0) {
        id = this.quotes[this.quotes.length - 1].id + 1;
      }
      this.quotes.push({ id, text });
    },
    removeFrame(id) {
      const index = this.quotes.findIndex(quote => quote.id === id);
      this.quotes.splice(index, 1);
    }
  }
};
</script>