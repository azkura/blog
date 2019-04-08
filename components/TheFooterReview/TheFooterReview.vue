<template>
<nav  class="main-review">
    <h1>{{ title}}</h1>
     <ul class="review-link-tags">
        <nuxt-link tag="li" to="/blog" class="review-link"><a>> Blog</a></nuxt-link>
        <nuxt-link tag="li" to="/blog" class="review-link"><a>> All post</a></nuxt-link>
        <nuxt-link tag="li" to="/about" class="review-link"><a>> About</a></nuxt-link>
    </ul>
</nav>
</template>

<script scoped>
export default {
    props:{
         title: {
        type: String,
        required: true
        }
    }
}

</script>

<style>
.main-review, h1{
    font-weight: bolder;
    position: relative;
    display: list-item;
    list-style-position: inside;
}


.review-link{
    margin: 1rem;
    text-decoration: none;
    color: white;
}

</style>


