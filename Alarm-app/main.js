function showDate() {

    setInterval(() => {
        let Currentdate = new Date;
        console.log(Currentdate);
        let date = document.querySelector(".date");
        let month = document.querySelector(".month");
        let year = document.querySelector(".year");

        month.textContent = ((Currentdate.getMonth() + 1) < 10 ? "0" + (Currentdate.getMonth() + 1) : (Currentdate.getMonth() + 1));  // Month is zero-indexed (January is 0)
        date.textContent = ((Currentdate.getDate()) < 10 ? "0" + (Currentdate.getDate()) : (Currentdate.getDate()));
        year.textContent = Currentdate.getFullYear();
    }, 1000)
}

function showTime() {
    setInterval(() => {
        let Currentime = new Date;

        let hrs = document.querySelector(".hrs");
        let mins = document.querySelector(".mins");
        let sec = document.querySelector(".sec");

        hrs.textContent = ((Currentime.getHours()) < 10 ? "0" + (Currentime.getHours()) : (Currentime.getHours()));
        mins.textContent = ((Currentime.getMinutes()) < 10 ? "0" + (Currentime.getMinutes()) : (Currentime.getMinutes()));
        sec.textContent = ((Currentime.getSeconds()) < 10 ? "0" + (Currentime.getSeconds()) : (Currentime.getSeconds()));

    }, 1000)
}



showDate();
showTime();




