<template>
    <div class="wrapper">
        <SiteHeader />
        <main class="">
            <ArtListings />
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/Header.vue';
import ArtListings from '@/components/ArtListings.vue';

export default {
    name: 'Home',
    components: {
        SiteHeader,
        ArtListings,
    },
    data() {
        return {};
    },
    watch: {},
};
</script>
