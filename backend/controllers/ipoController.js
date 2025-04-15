const axios=require('axios');
require('dotenv').config();

const finhub_api_key = process.env.FINHUB_API_KEY;
const finhub_base_url = 'https://finnhub.io/api/v1';

const getIPOs = async (req,res)=>{

    try{
        const response = await axios.get(`${finhub_base_url}/calendar/ipo?token=${finhub_api_key}`);
        res.status(200).json(response.data);
    }
    catch(error){
        console.error('Error fetching IPOs:', error.message);
    res.status(500).json({ error: 'Failed to fetch IPO data' });
    }

};

module.exports={getIPOs};