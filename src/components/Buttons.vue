<script>
import styled from 'vue-styled-components';

const styles = {
    small: {
        '--fontSize': 0.8 + 'rem',
        '--borderRadius': 2 + 'px',
    },
};

// medium
const ButtonElem = styled('button')`
    font-size: 1.4rem;
    padding: 12px 24px;
    border-radius:${(props) => props.styles[props.size]};
    background-color: var(--grash-200);
    color: #fff;
    cursor: pointer;
`;



export default ButtonElem;
</script>

<style lang="scss" scoped></style>
