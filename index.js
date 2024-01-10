function setFridayStatus() {
    const friday_status = document.getElementById('friday_status')
    const grodan_boll = document.getElementById('grodan_boll')

    const isFriday = new Date().getDay() === 5

    if(isFriday) {
        friday_status.innerHTML = 'DET ÄR FREDAG MINA BEKANTA!'
        friday_status.classList.add('rainbow_text')
        grodan_boll.src = 'images/glad_grodan_boll.png'
        document.title = 'DET ÄR FREDAG MINA BEKANTA!'
    } else {
        friday_status.innerHTML = 'DET ÄR <u>INTE</u> FREDAG MINA BEKANTA!'
        grodan_boll.src = 'images/arg_grodan_boll.png'
        document.title = 'DET ÄR INTE FREDAG MINA BEKANTA!'
    }
    
    let scale = 1
    grodan_boll.onclick = () => {scale += 0.1; grodan_boll.style.transform = `scale(${scale})`} 
}