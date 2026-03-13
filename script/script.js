// const loadLessons =() => {
//     fetch("https://openapi.programming-hero.com/api/levels/all")
//     .then((res) => res.json())
//     .then((json) =>{
//         displayLessons(json.data)
//     });
    
// }
// const displayLessons = (lessons)=> {
//     //1. get the container & and empty
//     const levelcontainer = document.getElementById("level-container");
//     levelcontainer.innerHTML = "";
//     // get into every lessons 
//     // for(let lesson of lessons){
//     //     console.log(lesson);
//     lessons.forEach((lesson) =>{
//         console.log(lesson);
        
    
        
//         // create element
//         const btndiv = document.createElement("div")
//         btndiv.innerHTML = `

//         <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i></i>Lesson - ${lesson.level_no}</button>
        
//         `
//         levelcontainer.append(btndiv)
//     }
// )}
// loadLessons()


const loadLessons =() => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => {
        displayLessons(json.data)
        
    })
}

const displayLessons = (lessons) => {
    // get the container & empty
    const levelcontainer = document.getElementById("lavel-container")
    levelcontainer.innerHTML = ""

    // get evre lesson 
    for(let lesson of lessons){
        // created elemnt 
        const btndiv = document.createElement("div")
        btndiv.innerHTML=`
        <button class="btn btn-primary btn-outline"><i class="fa-solid fa-book-open"></i></i>Lesson -${lesson.level_no}</button>

        
        
        `
        // append
        levelcontainer.append(btndiv)

    }

}

loadLessons()

