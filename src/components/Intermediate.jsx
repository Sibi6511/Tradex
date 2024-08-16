import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Intermediate = () => {



  const cardData = [
    {
      image: "https://media.istockphoto.com/id/1334323176/photo/creative-forex-chart-and-graph-backdrop.jpg?s=612x612&w=0&k=20&c=85DODtgMJBfmmES26l7HqAtUCg6RO4qTgifrnE1sW0c=",
      title: "Futures Trading",
      description:"Futures Trading is a segment of the derivatives market. This module covers the various intricacies involved in undergoing a futures trade, including margins, leverages, pricing, etc. It also discusses the use of derivatives for hedging purposes."
    },
    {
      image: "https://media.istockphoto.com/id/1357019846/photo/currency-and-exchange-stock-chart-for-finance-and-economy-display.jpg?s=612x612&w=0&k=20&c=JVcg_NDX9vx4AqWZBvsDMwvm8ENPenemYS1VM1ue9dA=",
      title: "Options Theory for Professional Trading",
      description: "Options Trading is a segment of the derivatives segment. Options contracts grant the buyer the right to buy/sell the underlying without a compulsory obligation. This module discusses options contracts, pricing, and their profit and loss payoffs."
    },
    {
      image: "https://media.istockphoto.com/id/1473494926/photo/close-up-of-laptop-on-office-desktop-with-glowing-digital-interface-business-charts-and.jpg?s=612x612&w=0&k=20&c=ywKRCE_brCc2LXUp1_yLYYhZg9Y5nnCbJWR6iGMnSu0=",
      title: "Option Strategies",
      description: "A trader can use options strategies to monetize their views on volatility, sentiment, and timing. This module explores various options strategies that can be built with a multi-dimensional approach involving Option Greeks, Risk-Return, etc."
    },
    {
      image: "https://media.istockphoto.com/id/1357019846/photo/currency-and-exchange-stock-chart-for-finance-and-economy-display.jpg?s=612x612&w=0&k=20&c=JVcg_NDX9vx4AqWZBvsDMwvm8ENPenemYS1VM1ue9dA=",
      title: "Markets and Taxation",
      description: "As a trader in India, you should be informed of the taxes applicable to your investments and trades. This module outlines essential topics like calculating your turnover, preparing balance sheet and P&L statements, and filing your Income Tax Returns."
    },
    {
      image: "https://media.istockphoto.com/id/1163643801/photo/technical-financial-graph-on-technology-abstract-background.jpg?s=612x612&w=0&k=20&c=R_Nl6zG1-eExIVGT346CwLn5g9Mz4_Ad7LxHPANrG68=",
      title: "Currency, Commodity, and Government Securities",
      description: "Interest rates, forex rates, and inflation impact each other and commodity prices. Commodity prices impact each other, too. This module discusses trading in currency and commodity derivatives and Government Securities (GSec) in the Indian markets."
    },
    {
      image: "https://media.istockphoto.com/id/1224545751/vector/big-data-abstract-background-with-color-infographic-data-visualization-with-lens-effects.jpg?s=612x612&w=0&k=20&c=lMnsLG2oqARWunYcfqBNn_O1n5lqRlPSVlVOoYD7tVQ=",
      title: "Risk Management and Trading Psychology",
      description: "Trading and investing are subject to risks. Our emotions also influence our choices in the market and could aggravate risks. This module discusses risk and risk management tools along with the psychology required for sustaining in the markets."
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

export default Intermediate;