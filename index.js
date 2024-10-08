const words = ["Database SQL,MYSQL,MongoDB", "Datastructures JAVA,DSA,ARRAY,LL", "Allgorithms Stacks,Queues,Trees","Frontend HTML,CSS,JS,React", "Backend NodeJS,ExpressJS"];
let index = 0;
setInterval(() => {
    index = (index + 1) % words.length;
    document.getElementById("subject").textContent = words[index];
}, 5000);