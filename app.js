const app = Vue.createApp({
    data(){
        return{
            courseGoal: "Finish the course",
            courseGoalA: "Finish the course",
            courseGoalB: "Help Sara with development",
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
