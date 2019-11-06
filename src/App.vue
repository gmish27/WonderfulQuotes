<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="content">
        <app-progress :count="quotes.length" :maxQuotes="maxQuotes"></app-progress>
        <app-add-quote @input-quote="addQuote"></app-add-quote>
        <div class="section">
          <transition-group name="frame" tag="div" class="columns is-multiline" appear>
            <app-frame
              v-for="(quote, index) in quotes"
              :key="quote.id"
              @remove-quote="removeFrame(index, quote.id)"
            >{{ quote.text }}</app-frame>
          </transition-group>
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

const bulmaNotify = function(vue, msg) {
  vue.$buefy.notification.open({
    message: msg,
    type: "is-danger",
    hasIcon: true,
    indefinite: true
  });
};

export default {
  data() {
    return {
      quotes: [],
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

      this.$http
        .post("/quotes.json", [text])
        .then(resp => {
          const data = resp.data;
          this.quotes.push({
            id: data.name,
            text: text
          });
        })
        .catch(err => bulmaNotify(this, err + " > Unable to add quote"));
    },
    removeFrame(quoteIdx, quoteKey) {
      this.quotes.splice(quoteIdx, 1);
      this.$http
        .delete(`/quotes/${quoteKey}.json`)
        .then(() => {
          this.$buefy.notification.open("Quote Removed");
        })
        .catch(err => bulmaNotify(this, err + " > Unable to remove quote"));
    }
  },
  created() {
    this.$http
      .get("/quotes.json")
      .then(resp => {
        const data = resp.data;
        for (let key in data) {
          this.quotes.push({
            id: key,
            text: data[key]["0"]
          });
        }
      })
      .catch(err => bulmaNotify(this, err + " > Unable to retrieve quotes"));
  }
};
</script>

<style lang="less" scoped>
.frame {
  &-enter {
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition-duration: 1s;
    transition-property: opacity;
  }
  &-leave-active {
    position: absolute;
  }
  &-leave-to {
    opacity: 0;
  }
  &-move {
    transition: transform 1s;
  }
}
</style>