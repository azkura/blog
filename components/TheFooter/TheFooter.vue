<template>
<div class=" content">  
        <div class="row">
            <div class="col-md-4">
                <h5>Reviews</h5>
            </div>
            <div class="col-md-4">
                <h5>Reviews</h5>
            </div>
            <div class="col-md-4">
                <h5>Reviews</h5>
            </div>
        </div> 
        <div class="row">
            <div class="col-md-4">
                 <TheFooterReview class="link" />
            </div>
            <div class="col-md-4">
                 <TheFooterReview class="link"  />
            </div>
            <div class="col-md-4">
                 <TheFooterReview class="link"  />
            </div>
        </div>   
</div>
</template>

<script>

import LabEdit from '~/components/LabEdit/LabEdit'
import TheFooterReview from '~/components/TheFooterReview/TheFooterReview'

export default {
    components:{
        TheFooterReview,
        LabEdit
    }
}
</script>

<style>

.content{
    width: 100%;
    /*  background: #06456B; */
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
   
}
h5{
    color: white;   
    text-align: center;
    font-weight: bolder;
}
.link{
    text-align: center;
    
    

}

</style>

