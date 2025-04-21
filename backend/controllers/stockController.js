const axios=require('axios');
require('dotenv').config();

const fmp_api_key = process.env.FMP_API_KEY;

const fmp_base_url = "https://financialmodelingprep.com/api";



const getStocks = async (req,res)=>{

    try{
        const response = await axios.get(`${fmp_base_url}/v3/stock-screener?exchange=BSE&limit=50&apikey=${fmp_api_key}`);
        res.status(200).json(response.data);
    }
    catch(error){
        console.error('Error fetching stocks:', error.message);
    res.status(500).json({ error: 'Failed to fetch stock data' });
    }

};

module.exports= {getStocks};