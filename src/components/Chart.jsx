// import { useEffect, useState } from "react"

// const Chart = () => {

//     const [chart, setChart] = useState(null) 
    
//     const getChart = () => {
        
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
//                 'X-RapidAPI-Key': '42cfbbe970mshe09340e30976f2fp124707jsnf286177392db'
//             }
//         };
        
//         fetch('https://yh-finance.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=AMRN&range=1d&region=US', options)
//         .then(response => response.json())
//         .then(response => console.log(response.chart.result[0]))
//         .then(response => setChart(response.chart.result[0]))
//         .catch(err => console.error(err));
//     }
    
//     useEffect(() => {
//         getChart()
//     }, [])
    
//     return (
//         <>
//         {chart}
//         </>
//     )
// }

// export default Chart