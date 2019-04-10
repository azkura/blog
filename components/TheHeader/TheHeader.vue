<template>
<header class="main-header">
    <nav class="nav-menu">
        <div class="row">
            <div class="col-md-2">
                <nuxt-link to="/blog" class="nav-link"><a>Home</a></nuxt-link>
            </div>
            <div class="col-md-2">
                <nuxt-link to="/blog" class="nav-link"><a>About</a></nuxt-link>
            </div>
            <div class="col-md-2">
                <nuxt-link to="/about" class="nav-link"><a>Contact</a></nuxt-link> 
            </div>
            <div class="col-md-3">
                <nuxt-link to="/about" class="nav-link"><a>Contact</a></nuxt-link>  
            </div>
            <div class="col-md-3">
                <form class="search-container">
                    <input type="text" placeholder="Search.." name="search">
                </form>
            </div>
        </div>
    </nav>
</header>
    
</template>

<style scoped>

.main-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /*  background: #06456B;*/
    background-color: rgba(0, 0, 0, 0.4);
    height: 3rem;
}

.nav-menu{
    height: 100%;
}

.nav-links{
    margin: 0;
    padding: 0;
    height: 100%;
    justify-content: center; 
}

.nav-link a{
    color: white;
    font-weight: bolder;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-active a{
    color:tomato;
}

.search-container{
    padding: 6px;
    font-size: 17px;
    border: none;
    height: 100%;
    float: right;
    justify-content: center;
}

.search-container input[type=text]{
    padding: 5px; 
    width: 200px;
    font-size: 14px;
    border-radius:7px;
    border: none;
}

</style>




