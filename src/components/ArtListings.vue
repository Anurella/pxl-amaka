<template>
    <article class="art__listings">
        <div class="main">
            <section class="side">
                <form action="" method="get">
                    <label for="">
                        <span> Order By </span>
                        <div class="select">
                            <select
                                aria-label="Order results by"
                                data-input="select"
                                v-model="sortCriteria"
                            >
                                <option selected="" value="relevance">
                                    Relevance
                                </option>
                                <option value="longTitle">
                                    Title A &gt; Z
                                </option>
                                <option value="principalOrFirstMaker">
                                    Principal Maker A &gt; Z
                                </option>
                            </select>
                        </div>
                    </label>
                </form>
            </section>
            <section>
                <h1>Art Collections</h1>
                <div class="art__items">
                    <router-link
                        v-for="(item, art) in artCollection"
                        :key="art"
                        :to="{
                            name: 'ArtDetails',
                            query: { id: item.objectNumber },
                        }"
                        class="art__item"
                    >
                        <figure class="">
                            <img
                                :src="item.headerImage.url"
                                :alt="item.title"
                                class="art__item-img"
                                loading="lazy"
                            />
                            <div class="art__item-details">
                                <div class="art__item-num">
                                    {{ item.objectNumber }}
                                </div>
                                <h2 class="art__item-title">
                                    {{ item.longTitle }}
                                </h2>
                                <span class="art__item-author">
                                    {{ item.principalOrFirstMaker }}
                                </span>
                            </div>
                        </figure>
                    </router-link>
                </div>
            </section>
        </div>
    </article>
</template>

<script>
import _sortBy from 'lodash/sortBy';
// import _pluck from 'lodash';

export default {
    name: 'ArtListings',
    components: {},
    data() {
        return {
            sortCriteria: 'longTitle',
        };
    },
    computed: {
        artCollection: {
            get: function () {
                let filteredCollection = this.$store.getters.curCollection;
                console.log(
                    _sortBy(filteredCollection.artObjects, this.sortCriteria)
                );
                return _sortBy(
                    filteredCollection.artObjects,
                    this.sortCriteria
                );
            },
            set: function (newVal) {
                _sortBy(newVal.artObjects, this.sortCriteria);
            },
        },
    },
    created() {},
    watch: {
        sortCriteria() {
            // console.log(_sortBy(self.artObjects, this.sortCriteria));
        },
    },
    mounted() {
        this.checkList();
    },
    methods: {
        checkList() {
            if (this.$store.state.artCollection.length === 0) {
                console.log(this.artCollection);
                this.listEmpty = false;
            } else {
                this.listEmpty = true;
                this.$store.dispatch('getCollection');
            }
        },
    },
};
</script>

<style scoped lang="scss">
.listings {
    content-visibility: auto;
    padding-bottom: var(--spacing-20);

    h2 {
        text-align: center;
    }
    &__item {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        min-width: 0;
        gap: var(--spacing-10);
        justify-content: center;
        @media screen and (min-width: 600px) {
            gap: var(--spacing-20);
            grid-template-columns: repeat(4, minmax(min-content, 250px));
        }
        a {
            height: 100px;
            width: 100%;
            transition: transform 0.2s ease-out;
            .loaded {
                height: 100%;
            }
            .loader {
                height: 100px;
            }
            &:hover {
                transform: scale(0.9);
                transition: transform 0.2s 0.05s
                    cubic-bezier(0.075, 0.82, 0.165, 1);
            }
            @media screen and (min-width: 600px) {
                .loader {
                    height: 300px;
                }
                height: 300px;
            }
            img {
                border-radius: 10px;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
