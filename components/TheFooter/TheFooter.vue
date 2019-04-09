<template>
<div class=" content">
    <div class="lab">
        <div class="row">
            <div class="col-md-4">
                <LabEdit >Reviews</LabEdit>
            </div>
            <div class="col-md-4">
                <LabEdit >Reviews</LabEdit>
            </div>
            <div class="col-md-4">
                <LabEdit >Reviews</LabEdit>
            </div>
        </div>    
    </div>
    <div class="link-content">  
        <TheFooterReview />
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
    position: fixed;
    width: 100%;
    background: #06456B;
    bottom: 0;
}
h3{
    color: white;   
}

</style>

