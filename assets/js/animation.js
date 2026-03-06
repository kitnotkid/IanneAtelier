const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold:0.12
});

revealElements.forEach(el=>observer.observe(el));