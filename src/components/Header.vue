<template>
    <SiteHeader>
        <nav>
            <ul>
                <li>This will be the nav</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    </SiteHeader>
</template>

<script>
import styled from 'vue-styled-components';


const SiteHeader = styled.header`
    background: papayawhip;
    padding: 20px;
    color: var(--grash-100);
`;

export default {
    components: {
        SiteHeader,
    },
};
</script>
