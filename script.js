let enteredCode = "";
const correctCode = "0408"; 
let musicPlayed = false;

// Create floating paws
function createPaws() {
    const container = document.getElementById('paws-container');
    setInterval(() => {
        const paw = document.createElement('div');
        paw.classList.add('paw');
        paw.innerHTML = Math.random() > 0.5 ? '🐾' : '🐱'; 
        paw.style.left = Math.random() * 100 + 'vw';
        paw.style.animationDuration = Math.random() * 3 + 4 + 's';
        paw.style.fontSize = Math.random() * 20 + 15 + 'px';
        container.appendChild(paw);
        setTimeout(() => { paw.remove(); }, 6000);
    }, 500);
}
createPaws();

function pressKey(num) {
    if (enteredCode.length < 4) {
        enteredCode += num;
        document.getElementById("display").innerText = "🐾".repeat(enteredCode.length) + "_".repeat(4 - enteredCode.length);
    }
    
    if (enteredCode === correctCode) {
        setTimeout(() => {
            changeScreen("screen-passcode", "screen-gifts");
        }, 500);
    } else if (enteredCode.length === 4) {
        document.getElementById("error-msg").classList.remove("hidden");
        setTimeout(clearDisplay, 1000);
    }
}

function clearDisplay() {
    enteredCode = "";
    document.getElementById("display").innerText = "____";
    document.getElementById("error-msg").classList.add("hidden");
}

function changeScreen(hideId, showId) {
    document.getElementById(hideId).classList.add("hidden");
    document.getElementById(showId).classList.remove("hidden");
}

function revealGift(type) {
    // Music starts when she clicks her first gift
    if (!musicPlayed) {
        document.getElementById('bg-music').play();
        musicPlayed = true;
    }

    const title = document.getElementById("reveal-title");
    const content = document.getElementById("reveal-content");
    
    changeScreen("screen-gifts", "screen-reveal");
    
    if (type === 'message') {
        title.innerText = "To Chidku Cutie 🤭🥰";
        content.innerHTML = `
            <p>Hey chidku kese ho?? Ik me bhot pareshan krta hu aapko aapki care bhi nhi krta hu apne isme rehta hu due to which aapka dyan rakh nhi paata.</p>
            <p>But legit i really do care for u my cute little sister ha u don't like this thing but kya kru bada bhai hu raha nhi jaata h but dear i really really really want u in my life..</p>
            <p><i>"Kya khub khuda ne socha h kii hame apka bhai aur apko hamari bhen banaye, jo bhen billi ki tarh chan chal hol aur usse sambhalne ke liye uska shant bhai🤭🤭..."</i></p>
            <p>And Ha this is my last year in college iske baad me apne new life me bhale busy rahu but aapke liye I'm always there sister ☺ 😚</p>
        `;
    } else if (type === 'photo') {
        title.innerText = "Meri Cute Billi ✨";
        content.innerHTML = `<img src="Sister1.jpg" alt="Chidku" class="reveal-img">`;
    } else if (type === 'pets') {
        title.innerText = "Tera Doggo & Tu 🐶🐱";
        content.innerHTML = `
            <p style="text-align:center; font-size:14px;">Jaise tu meri cute billi hai, aur tujhe dogs pasand hain... yeh dono tere liye!</p>
            <div class="pets-container">
                <img src="cat.gif" alt="3D Cat" class="pet-gif">
                <img src="dog.gif" alt="3D Dog" class="pet-gif">
            </div>
        `;
    } else if (type === 'coupons') {
        title.innerText = "Brother's Promise Cards 🎟️";
        content.innerHTML = `
            <p style="text-align:center; font-size:13px;">Redeem these anytime with your big brother!</p>
            <div class="coupon">🍫 1 Free Chocolate</div>
            <div class="coupon">🐶 1 Dog Video Sharing Session</div>
            <div class="coupon">🤗 1 Big Tight Hug</div>
            <div class="coupon">🍕 Ek Free Treat Meri Taraf Se</div>
        `;
    } else if (type === 'poem') {
        title.innerText = "For My Little Sis 🌸";
        content.innerHTML = `
            <p style="text-align:center; font-style:italic;">
            "Phoolon si tu muskuraye,<br>
            Bhai ka dil khushi se bhar jaye.<br><br>
            Chahe main tujhe kitna bhi chidhaun,<br>
            Par tere bina main ek pal na reh paaun.<br><br>
            Duniya ki har khushi tujhe mil jaye,<br>
            Meri choti behan hamesha muskuraye!" 💖
            </p>
        `;
    }
}

function backToGifts() {
    changeScreen("screen-reveal", "screen-gifts");
}
