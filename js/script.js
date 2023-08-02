let chooseBtn=document.getElementById('choose'),
    receiveBtn=document.getElementById('receive'),
    contactForm=document.getElementsByClassName('contactform_name') [0],
    text=document.getElementsByTagName('h2')[0],
    modal = document.querySelector('.modal'),
    btn = document.querySelectorAll('.main_tel_title'),
    closeBtn= document.querySelector('.close'),
    message =  document.getElementsByName('message')[0];




// first way(NO)
    function hover() {
        text.textContent = 'Hammasi zur'

    }
    //second way(no)

    // text.onmouseenter =  hover 



    //third way (more uses)


    text.addEventListener('mouseenter',hover)
    text.addEventListener('mouseleave', function () {
        text.textContent = 'Все включено'
    })

    
    receiveBtn.addEventListener('click', function(){
        modal.style.display = 'block'
    })

    closeBtn.addEventListener('click', function(){
        modal.style.display = 'none'
    })  
    contactForm.addEventListener('input',function(){
        message.value = `Mening ismim ${contactForm.value} dasturchi:`

    })
     