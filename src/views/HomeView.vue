<template>
  <NavBar />
  
  <LandingItem>
    <template #image>
      <img src="../assets/images/fotorico.png" alt="" class="foto-rico">
    </template>
    <template #title>
     <h1>Hi, I'm Rico!</h1>
    </template>
    <template #description>
      <p>I am a 3rd-year computer science student at Universitas Pembangunan Nasional "Veteran" Jawa Timur who have a big
      interest in software engineering. “Learning” is my middle name because I have a big enthusiasm to find new knowledge about everything especially a new 
      technologies. I like to spend my spare time doing self- improvement stuffs such as workout, reading, learning new
      skills, and exercising coding skills.</p>
    </template>
    <template #button>
      <a href="#portofolio" class="button">Click Me!</a>
    </template>
  </LandingItem>

  <ProjectView />
  <ContactView />
  <FooterView />
</template>

<script>
  import ProjectView from '../views/ProjectView.vue';
  import NavBar from '../components/NavBar.vue'
  import LandingItem from '../components/item/LandingItem.vue'
  import ContactView from './ContactView.vue';
  import FooterView from './FooterView.vue';

  export default {
    components:{
    ProjectView,
    NavBar,
    LandingItem,
    ContactView,
    FooterView
  },
  }
</script>

<style>
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 56px 30px 70px ;
  }

  .logo-nav{
    margin-left: 30px;
    width: 120px;
  }

  nav ul li{
    display: inline-block;
    margin: 0 35px 0 0px;
    font-size: 22px;
  }

  .foto-rico{
    width: 400px;
    margin-left: 30px;
  }

  .landing-page{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px 0 50px;
    text-align: justify;
  }

  .content{
    position: relative;
    width: 850px;
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

  .content h1{
    font-size: 100px;
  }

</style>
