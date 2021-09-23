<template>
    <div class="wrapper">
        <Header />
        <main>
            <article class="single__art">
                <div class="single__art-img">
                    <img
                        :src="objectUrl"
                        :alt="objectDetails.title"
                        loading="lazy"
                    />
                </div>
                <div class="single__art-details flow">
                    <h1>{{ objectDetails.longTitle }}</h1>
                    <div>
                        <h2>Description</h2>
                        <p>{{ objectDescription }}</p>
                    </div>
                    <div>
                        <h2>Principal Makers</h2>
                        <ol>
                            <li
                                v-for="(
                                    item, key
                                ) in objectDetails.principalMakers"
                                :key="key"
                            >
                                <span>{{ item.name }}</span>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h2>Materials</h2>
                        <ol>
                            <li
                                v-for="(item, key) in objectDetails.materials"
                                :key="key"
                            >
                                <span>{{ item }}</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </article>
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'ArtDetails',
    components: {
        Header,
    },
    data() {
        return {
            objectDetails: '',
            objectUrl: '',
            objectDescription: '',
        };
    },
    created() {},
    computed: {},
    mounted() {
        // call the store function
        this.processDetails();
    },
    methods: {
        processDetails() {
            this.$store
                .dispatch('getArtDetails', this.$route.query.id)
                .then((response) => {
                    this.objectDetails = response.artObject;
                    this.objectUrl = response.artObject.webImage.url;
                    this.objectDesc = response.artObject.label.description;
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
