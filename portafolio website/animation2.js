const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('visto');
        } 
    });
});




const hiddenElements = document.querySelectorAll('.oculto');
console.log(hiddenElements );
hiddenElements.forEach((el)=>observer.observe(el));