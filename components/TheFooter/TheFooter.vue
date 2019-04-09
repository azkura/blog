<template>
<div class=" container">
    <div class="link-content">
        <h3>Reviews</h3>
        <TheFooterReview />
    </div>    
</div>
</template>

<script>

import TheFooterReview from '~/components/TheFooterReview/TheFooterReview'

export default {
    components:{
        TheFooterReview
    }
    
}
</script>

<style>
.container{
    position: fixed;
    width: 100%;
    height: auto;
    background: #06456B;
    bottom: 0;
}


</style>

