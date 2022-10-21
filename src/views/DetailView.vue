<script>
    import { mapState } from 'pinia';
    import { useCounterStore } from '../stores/counter'

    export default {
        name: 'DetailView',
        components:{

        },
        computed:{
            ...mapState(useCounterStore,['getDetail']),
            
            test(){
                return this.getDetail(this.$route.params.id);
            }
        }
    }
</script>

<template>
    <div class="container">
        <img src="../assets/images/bg5.png" alt="" class="project-img">
        <div class="description-project">
            <h1 class="detail-title">{{test.title}}</h1>
            <p class="detail-date">{{test.tanggal}}</p>
            <p class="detail-description">{{test.deskripsi}}</p>
            <a :href="test.link" class="button">See Repo</a>
        </div>
    </div>
</template>

<style>
    .container{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .description-project{
        width: 500px;
    }

    .detail-title{
        font-size: 45px;
        margin-bottom: 20px;
    }

    .detail-date{
        font-size: 20px;
        margin-bottom: 20px;
    }

    .detail-description{
        font-size: 20px;
        margin-bottom: 10px;
    }

    .project-img{
        width: 800px;
        border-radius: 10px;
    }

    .button{
    position: absolute;
    top: 110%;
    right: 45%;
    background-color: orangered;
    text-decoration: none;
    padding: 10px 30px 10px 30px;
    color: black;
    border-radius: 10px;
    }

</style>