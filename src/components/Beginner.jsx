import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Beginner = () => {



  const cardData = [
    {
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Introduction to Stock Markets",
      description:"The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it."
    },
    {
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Technical Analysis",
      description: "Technical Analysis (TA) helps in developing a point of view. In this module, we will discover the complex attributes, various patterns, indicators, and theories of TA that will help you as a trader to find upright trading opportunities in the market."
    },
    {
      image: "https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Fundamental Analysis",
      description: "The Fundamental Analysis (FA) module explores Equity research by reading financial statements and annual reports, calculating and analyzing Financial Ratios, and evaluating the intrinsic value of a stock to find long-term investing opportunities."
    },
    {
      image: "https://media.istockphoto.com/id/1357019846/photo/currency-and-exchange-stock-chart-for-finance-and-economy-display.jpg?s=612x612&w=0&k=20&c=JVcg_NDX9vx4AqWZBvsDMwvm8ENPenemYS1VM1ue9dA=",
      title: "Futures Trading",
      description: "Futures Trading is a segment of the derivatives market. This module covers the various intricacies involved in undergoing a futures trade, including margins, leverages, pricing, etc. It also discusses the use of derivatives for hedging purposes."
    },
    {
      image: "https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Options Theory for Professional Trading",
      description: "Options Trading is a segment of the derivatives segment. Options contracts grant the buyer the right to buy/sell the underlying without a compulsory obligation. This module discusses options contracts, pricing, and their profit and loss payoffs."
    },
    {
      image: "https://images.pexels.com/photos/6770611/pexels-photo-6770611.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Option Strategies",
      description: "A trader can use options strategies to monetize their views on volatility, sentiment, and timing. This module explores various options strategies that can be built with a multi-dimensional approach involving Option Greeks, Risk-Return, etc."
    }
  ];

  return (
    <div className='living'>

    <div className="projects-container">
      <div className="cards-container">
        {cardData.map((card, index) => (
                <Card
                key={index}
                className="card"
                sx={{
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    width: '30%',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
                >
                <CardMedia
                  sx={{ height: 180 }}
                  image={card.image}
                  title={card.title}
                  
                  />
                <CardContent>
                  <Typography fontFamily={'serif'} variant='h5'>{card.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                 
                </CardActions>
                <div className='leo'>
        
                 <Link to="/stock-module" >
               <Button  >
                 <b style={{color:"#9b59b6",fontSize:"15px"}} >
                  <a href="https://zerodha.com/varsity/modules/"></a>
                  view Module
                  </b>
               </Button>
                 </Link>
               &emsp;&emsp;&emsp;&emsp;
               <Link to="/stock-videos">
               <Button   >
        
                 <b style={{color:"#9b59b6",fontSize:"15px"}}>View Videos</b>
               </Button>
               </Link>
                
                </div>
        
              </Card>
        ))}
      </div>

   


    </div>
              </div>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Beginner;