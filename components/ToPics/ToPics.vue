<template>
   <nav class="nav-menu">
       <ul class="topic-nav">
           <nuxt-link class="topic-links" tag="li" to="/about"><a>burgers</a></nuxt-link>
           <nuxt-link class="topic-links" tag="li" to="/blog"><a>sandwichs</a></nuxt-link>
           <nuxt-link class="topic-links" tag="li" to="/about"><a>desserts</a></nuxt-link>
           <nuxt-link class="topic-links" tag="li" to="/blog"><a>boissons</a></nuxt-link>
       </ul>
   </nav>
</template>

<style scoped>
.nav-menu{
    width: 100%;
    height: 4.6rem;
}

.topic-nav{
    display:flex;
    justify-content: center; 
    align-items: center;  
    margin: 4rem;
    padding: 1rem;
    height: 100%;
}

.topic-links{
    list-style: none;
    margin: 20px;
    padding: 0;
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100%;
}

.topic-links a{
    text-decoration: none;
    color: darkgrey;
}

.topic-links.nuxt-link-active a{
    border-bottom: 3px solid tomato;
}
.topic-links.nuxt-link-active,
.topic-links a:active,
.topic-links a:hover{
    color: tomato;
}
</style>

