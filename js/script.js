const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 60%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
            ],
            hoverBackgroundColor: [
                "hsla(10, 79%, 65%, 0.8)",
                "hsla(10, 79%, 65%, 0.8)",
                "hsla(186, 34%, 60%, 0.8)",
                "hsla(10, 79%, 65%, 0.8)",
                "hsla(10, 79%, 65%, 0.8)",
                "hsla(10, 79%, 65%, 0.8)",
                "hsla(10, 79%, 65%, 0.8)",
            ],
            borderRadius: 3,
            borderSkipped: false,
        },
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false,
            },

            x: {
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    font: {
                        family: "DM Sans",
                        size: 14,
                    },
                },
                color: "hsl(28, 10%, 53%)",
            },
        },
        layout: {
            padding: 0,
        },
        animation: {
            duration: 2000,
            easing: "easeInSine",
        },
        plugins: {
            legend: {
                display: false,
            },
            chartAreaBorder: {
                display: false,
            },
            tooltip: {
                backgroundColor: "hsl(25, 47%, 15%)",
                displayColors: false,
                padding: 8,
                xAlign: "center",
                yAlign: "center",
                bodyAlign: "center",
                callbacks: {
                    title: () => null,
                    label: function (context) {
                        let label = context.dataset.label || "";

                        if (label) {
                            label += ": ";
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(context.parsed.y);
                        }
                        return label;
                    },
                },
            },
        },
    },
};

const myChart = new Chart(
    document.getElementById("myChart").getContext("2d"),
    config
);
