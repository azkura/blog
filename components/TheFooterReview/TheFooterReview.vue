<template>
<footer>
    <nav  class="main-review">
        <ul class="review-link-tags">
            <nuxt-link tag="li" to="/blog" class="review-link"><a> > Blog </a></nuxt-link>
            <nuxt-link tag="li" to="/blog" class="review-link"><a> > All post </a></nuxt-link>
            <nuxt-link tag="li" to="/about" class="review-link"><a> > About </a></nuxt-link>
        </ul>
    </nav>
</footer>
</template>

<script>
export default {
}

</script>

<style scoped>

.main-review{
    font-weight: bolder;
}

.review-link{
    margin: 0.5rem;
    list-style: none; 
}

.review-link a{
     color: white;
}

.review-link a:hover,
.review-link.nuxt-link-active a{
    color:tomato;
}

</style>


