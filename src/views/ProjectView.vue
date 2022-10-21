<script>
    import ProjectItem from '../components/item/ProjectItem.vue'
    import { useCounterStore } from '../stores/counter'
    import { mapState } from 'pinia';
    import { RouterLink } from 'vue-router'

    export default {
        name: 'ProjectView',
        components:{
            ProjectItem,
            RouterLink
        },
        computed:{
            ...mapState(useCounterStore,['getData'])
        }
    }
</script>
<template>
    <div class="portofolio-page" id="portofolio">
        <h1>PORTOFOLIO</h1>
        <ProjectItem v-for="(project,index) in getData" :key="index">
            <template #image>
                <img src="../assets/images/bg5.png" alt="">
            </template>
            <template #card-title>
                <h5 class="card-title">{{ project.title }}</h5>
            </template>
            <template #card-text>
                <p class="card-text">{{ project.deskripsi }}</p>
            </template>
            <template #link>
                <RouterLink :to="{name:'detailproject',params:{id:project.slug}}" class="btn-primary">Detail Project</RouterLink>
            </template>
        </ProjectItem>
    
    </div>
</template>

<style>

.portofolio-page{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
}

.portofolio-page h1{
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-style: italic;
}

.card{
    border-radius: 5px;
    background-color: white;
    height: 400px;
    width: 300px;
}

.card-body{
    padding: 12px 20px 25px 25px;
    position: relative;
}

.card-title{
    color: black;
    font-weight: bold;
    font-size: 20px;
}

.btn-primary{
    position: absolute;
    background-color: orangered;
    text-decoration: none;
    padding: 10px 30px 10px 30px;
    color: black;
    border-radius: 10px;
    top: 86%;
    left: 5%;
}

.card-text{
    color: black;
}

.card img{
    border-radius: 5px 5px 0 0;
    width: 300px;
}

</style>