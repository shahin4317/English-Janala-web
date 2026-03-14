const loadLessons =() => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) =>{
        displayLessons(json.data)
    });
    
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        displayLavelWord(data.data)
        
    })
    
}

// {
//     "id": 88,
//     "level": 1,
//     "word": "Toy",
//     "meaning": "খেলনা",
//     "pronunciation": "টয়"
// }





const displayLavelWord = (words) =>{
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML="";
    words.forEach ((word) => {
        console.log(word);
        
        const card = document.createElement("div")
        card.innerHTML=`
            <div class="bg-white rounded-xl shadow-sm text-center p-10 px-5 space-y-4">

            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">${word.meaning} /${word.pronunciation}</p>
            <div class="text-2xl font-medium font-bangla">${word.pronunciation}</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90]"><i class="fa-solid fa-volume-high"></i></button>
            </div>


            
        </div>
        
        
        `
        wordContainer.append(card)
        
    })

    
}
loadLevelWord()



const displayLessons = (lessons)=> {
    //1. get the container & and empty
    const levelcontainer = document.getElementById("level-container");
    levelcontainer.innerHTML = "";
    // get into every lessons 
    // for(let lesson of lessons){
    //     console.log(lesson);
    lessons.forEach((lesson) =>{
        
        
    
        
        // create element
        const btndiv = document.createElement("div")
        btndiv.innerHTML = `

        <button onclick ="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i></i>Lesson -${lesson.level_no}</button>
        
        `
        levelcontainer.append(btndiv)
    }
)}
loadLessons()


