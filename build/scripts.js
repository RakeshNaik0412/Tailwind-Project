open = document.getElementById('book');
function openbook() {
    open.classList.remove('hidden')
    open.classList.add('flex')
    setTimeout(() => {
        open.classList.add('opacity-100')
    }, 20)
}

function closebook() {
    open.classList.add('opacity-0')
    open.classList.remove('opacity-100')
    setTimeout(() => {
        open.classList.add('hidden')
        open.classList.remove('flex')
    }, 300)

}

carry = document.getElementById('curriculum')
function opencurriculum() {
    carry.classList.remove('hidden')
    setTimeout(() => {
        carry.classList.add('opacity-100')
    }, 20)
}

function closecurriculum() {
    carry.classList.add('opacity-0')
    carry.classList.remove('opacity-100')
    setTimeout(() => {
        carry.classList.add('hidden')
    }, 300)
}

schol = document.getElementById('scholarship')
function openScholarship() {
    schol.classList.remove('hidden')
    setTimeout(() => {
        schol.classList.add('opacity-100')
    }, 20)
}

function closeScholarship() {
    schol.classList.add('opacity-0')
    schol.classList.remove('opacity-100')
    setTimeout(() => {
        schol.classList.add('hidden')
    }, 300)
}


enroll = document.getElementById('Enroll')
function openEnroll() {
    enroll.classList.remove('hidden')
    setTimeout(() => {
        enroll.classList.add('opacity-100')
    }, 20)
}

function closeEnroll() {
    enroll.classList.add('opacity-0')
    enroll.classList.remove('opacity-100')
    setTimeout(() => {
        enroll.classList.add('hidden')
    }, 300)
}


whatsapp = document.getElementById('Whatsapp')
function openWhatsapp() {
    whatsapp.classList.remove('hidden')
    setTimeout(() => {
        whatsapp.classList.add('opacity-100')
    }, 20)
}

function closeWhatsapp() {
    whatsapp.classList.add('opacity-0')
    whatsapp.classList.remove('opacity-100')
    setTimeout(() => {
        whatsapp.classList.add('hidden')
    }, 300)
}