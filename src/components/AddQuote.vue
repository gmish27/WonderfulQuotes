<template>
    <section>
        <div class="columns">
            <div class="column is-6 is-offset-3">                
                <b-field label="Quote">
                    <b-input 
                        v-model="quote" 
                        maxlength="200" 
                        type="textarea"
                        required
                        validation-message="Quote content can't be blank"
                        >
                    </b-input>
                </b-field>
                <div class="columns">
                    <div class="column is-2 is-offset-5">
                        <b-button @click="inputQuote" type="is-primary">Add Quote</b-button>
                    </div>
                </div> 
            </div>
        </div>        
    </section>
</template>

<script>
export default {
    data() {
        return {
            quote: ''
        }
    },
    methods: {
        inputQuote() {
            if (this.quote !== '') {
                this.$emit('input-quote', this.quote);
                this.quote = '';
            }
        }
    }
}
</script>