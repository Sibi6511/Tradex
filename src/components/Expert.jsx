import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Expert = () => {



    const cardData = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQG2H12n_wWbSS4ougsVyx-YX_9jA76pDvQ&s",
            title: "Personal Finance - Mutual Funds",
            description: "Managing personal finances can help you achieve your short-term and long-term financial goals. This module encompasses the various aspects of personal finance, such as retirement planning, mutual funds, ETFs, bonds, and goal-oriented investments."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAeZqIYmE4vNhKvjTVFAj8twRR6COTyb9hMyq9HW9yEPg4QZPPnJ27KHCjVEBs3DvSpI&usqp=CAU",
            title: "Integrated Financial Modelling",
            description: "An integrated financial model of a company breaks down the financials of a company to give you granular insights. A financial model includes assets, reserves, debt schedules, cashflows, and valuation models. Learn all that and more in this module."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49chwKZTGI2_hbuoofwS7Yp_Sn09u97-wiA&s",
            title: "Personal Finance - Insurance",
            description: "If you have been working on your financial plan and continuously saving and investing, it is crucial to be prepared to tackle any unforeseen eventualities. The short chapters in this module elucidate the importance of insurance in one's life."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTPNRyTPmNNIBS8wSOH9d0r3Ke5OiCRu9yQ&s",
            title: "Sector Analysis",
            description: "Sector analysis is an extension of fundamental analysis. Each sector exhibits unique features and reacts differently to the same market forces. This module helps you understand what to look for in each sector as a stock picker or an equity investor."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQaFPcbF5rQkcgweGcjUl9-1ReatuybH2tA&s",
            title: "Social Stock Exchanges (SSEs)",
            description: "Social Stock Exchange is a new segment on stock exchanges meant to enable investors to donate/invest in social enterprises. SSEs will act as a bridge between the less-informed but willing donors and legitimate organizations doing real social work."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0ajEvvZPFjl7zRJGxK2O_D3piW262ljlDg&s",
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
                                        <b style={{ color: "#9b59b6", fontSize: "15px" }} >
                                            <a href="https://zerodha.com/varsity/modules/"></a>
                                            view Module
                                        </b>
                                    </Button>
                                </Link>
                                &emsp;&emsp;&emsp;&emsp;
                                <Link to="/stock-videos">
                                    <Button   >

                                        <b style={{ color: "#9b59b6", fontSize: "15px" }}>View Videos</b>
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
    position:'absolute',
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

export default Expert;