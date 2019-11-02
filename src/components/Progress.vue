<template>
    <section class="section">
        <h2>Quotes Added</h2>
        <b-progress type="is-success" size="is-medium" :max="maxQuotes" :value="count" show-value>
            <span class="has-text-black">{{ count }} / 10</span>
        </b-progress>
    </section>
</template>

<script>
export default {
    props: ['count', 'maxQuotes']
}
</script>