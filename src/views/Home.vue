<template>
    <div class="wrapper">
        <Header />
        <main class="">
            <ArtListings />
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import ArtListings from '@/components/ArtListings.vue';


export default {
    name: 'Home',
    components: {
        Header,
        ArtListings,
    },
    data() {
        return {};
    },
    watch: {},
};
</script>
