<template>
    <div>
        <BreadCrumb aria-label="Breadcrumb" class="breadcrumb">
            <ol>
                <CrumbItem v-for="(crumb, ci) in crumbs" :key="ci">
                    <a
                        :href="`/${crumb}`"
                        :aria-current="`${isCurrent(ci) ? 'page' : undefined}`"
                    >
                        {{ crumb }}
                    </a>
                </CrumbItem>
            </ol>
        </BreadCrumb>
    </div>
</template>

<script>
import styled from 'vue-styled-components';
const BreadCrumb = styled.nav`
    display: flex;
    flex-direction: row;
    & [aria-current='page'] {
        color: var(--grash-300);
        font-weight: 700;
        text-decoration: none;
    }

    & ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;
const CrumbItem = styled.li`
    display: inline;
    + li::before {
        content: '';
        display: inline-block;
        margin: 0 0.25em;
        transform: rotate(15deg);
        border-right: 0.1em solid currentColor;
        height: 0.8em;
    }
`;
export default {
    components: {
        BreadCrumb,
        CrumbItem,
    },
    props: {
        crumbs: {
            type: Array,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    methods: {
        isCurrent(index) {
            console.log(this.crumbs[index]);
            return this.currentPage == index;
        },
    },
};
</script>

<style lang="scss" scoped></style>
