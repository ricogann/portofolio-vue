<script>
    import BaseInput from '../components/BaseInput.vue';
    
    const dummyData = [
        {
            name: 'User A',
            email: 'a@mail.com',
            subject: 'Your friend',
            message: 'Ya!'
        },
        {
            name: 'User B',
            email: 'b@mail.com',
            subject: 'Your friends',
            message: 'Yai!'
        },
    ];

    export default{
        name: 'ContactView',
        data: () => ({
            title: 'test',
            data:[],
            input:{
                name:'',
                email:'',
                subject:'',
                message:'',
            }
        }),

        components:{
            BaseInput,
        },

        methods: {
            submit(){
                this.data.push({ ...this.input});
                console.log(this.data);
            },  
        },
        watch:{
            'input.name'(val){
                console.log('input name has changed to',val);
            },
        },
        created(){
            dummyData.forEach((obj) => this.data.push(obj));
        }
    };
</script>

<template>
    <div class="container-contact" id="contact">
        <h1 class="contact-title">Contact Me!</h1>
    <form @submit.prevent="submit">

    <BaseInput v-model="input.name" type="text" name="firstname" label="Name"/>
    <BaseInput v-model="input.email" name="email" label="Email" type="text"/>
    <BaseInput v-model="input.subject" name="Subject" label="Subject" type="text" class="ainput"/>
    <label for="subject">Message</label>
    <textarea v-model="input.message" name="message" label="Message" type="text" style="height:200px;" placeholder="Write Something..."></textarea>

    <button type="submit">Submit</button>
  </form>
</div>
</template>

<style>

    .contact-title{
        text-align: center;
        letter-spacing: 10px;
        font-size: 50px;
        margin-top: 50px;
        font-style: italic;
    }

    .container-contact{
        padding: 0 20% 0 20%;
    }

    input[type=text], select, textarea {
    width: 100%; 
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px; 
    resize: vertical 
    }

  
    button[type=submit] {
    background-color: orangered;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }


    button[type=submit]:hover {
    background-color: orange;
    }

    .container {
    border-radius: 5px;
    padding: 20px;
    }
</style>