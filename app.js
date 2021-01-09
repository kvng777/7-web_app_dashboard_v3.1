console.log("JS at work!");

const alertBanner = document.getElementById("alert");
alertBanner.innerHTML =
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`;

//Date to new members
// document.write(new Date().toLocaleDateString());
// const datet = document.getElementById('date');
// datet.innerHTML = 
// `
// <script>document.write(new Date().toLocaleDateString());</script>
// `;

//create the html for the banner with template literal

alertBanner.addEventListener('click', (e) =>{
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});


//line graph
const trafficNav = document.getElementById('traffic-nav');
const trafficCanvas = document.getElementById('traffic-chart');
let trafficHourlyData = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
    "07:00", "08:00", "09:00", "10:00", "11:00"],
    datasets: [{
        data: [120, 250, 375, 480, 525, 660, 760, 920, 1025, 1250,
        1100, 1032],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficHourlyOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficHourlyChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficHourlyData,
    options: trafficHourlyOptions
});

trafficNav.addEventListener('click', (e)=>{
         if(e.target.textContent ==="Daily"){
        //Traffic-Daily
        let trafficDailyData = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                data: [75, 115, 175, 125, 225, 200, 100],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };

        let trafficDailyOptions = {
            aspectRatio: 2.5,
            animation: {
                duration: 0
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            }
        };

        let trafficDailyChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficDailyData,
            options: trafficDailyOptions
        });

        } else if(e.target.textContent ==="Weekly"){
            //Traffic-Weekly
            let trafficWeeklyData = {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
            datasets: [{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
                }]
            };

            let trafficWeeklyOptions = {
                aspectRatio: 2.5,
                animation: {
                    duration: 0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: false
                }
            };

            let trafficWeeklyChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficWeeklyData,
                options: trafficWeeklyOptions
            });

        } else if(e.target.textContent ==="Monthly"){
            //Traffic-Monthly
        let trafficMonthlyData = {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL",
            "AUG", "SEP", "OCT", "NOV", "DEC"],
            datasets: [{
                data: [1750, 3250, 4020, 5232, 4231, 7123, 6424, 8123, 9892, 8434,
                10232, 12414],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };

        let trafficMonthlyOptions = {
            aspectRatio: 2.5,
            animation: {
                duration: 0
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            }
        };

        let trafficMonthlyChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficMonthlyData,
            options: trafficMonthlyOptions
        });

        }else if(e.target.textContent === "Hourly"){
            let trafficHourlyData = {
                labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
                "07:00", "08:00", "09:00", "10:00", "11:00"],
                datasets: [{
                    data: [120, 250, 375, 480, 525, 660, 760, 920, 1025, 1250,
                    1100, 1032],
                    backgroundColor: 'rgba(116, 119, 191, .3)',
                    borderWidth: 1,
                }]
            };
            
            let trafficHourlyOptions = {
                aspectRatio: 2.5,
                animation: {
                    duration: 0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: false
                }
            };
            
            let trafficHourlyChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficHourlyData,
                options: trafficHourlyOptions
            });
           
        }
});


//Daily Traffic Chart
const dailyCanvas = document.getElementById('daily-chart');
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
            beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


//Mobile Users Chart
const mobileCanvas = document.getElementById('mobile-users');
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', ()=>{
    if( user.value ==="" && message.value ==="" ){
        alert("Sorry, User and Message fields cannot be blank.");
    } else if (user.value===""){
        alert("Sorry, the User field cannot be blank.");
    } else if (message.value===""){
        alert("Sorry, the Message field cannot be blank.");
    } else {
        alert(`The message has been successfully sent to: ${user.value}`);
        user.value ="";
        message.value="";
    }
});