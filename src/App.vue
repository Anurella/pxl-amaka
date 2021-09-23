<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        this.$store.dispatch('getCollection');
    },
};
</script>
<style lang="scss">
@media (prefers-color-scheme: dark) {
    body {
        background-color: var(--grash-100);
        color: var(--grash-500);
    }
}
</style>
