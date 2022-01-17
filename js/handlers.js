const enableEventHandlers = coasters => {

    document.querySelector('#featuresOptions').onchange = e => {

        const { value: property, text: label } = e.target.selectedOptions[0]

        const newData = coasters.map(coaster => coaster[property])

        updateChartData('featuresChart', newData, label)
    }
}