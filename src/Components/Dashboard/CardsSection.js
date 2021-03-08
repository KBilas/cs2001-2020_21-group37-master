import React, { useState } from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './styles/CardsSection.css';
import { useMediaPredicate } from "react-media-hook";
import { CenterFocusStrong } from '@material-ui/icons';
import './styles/CardsSection.css';
const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '5vh 0',
    paddingBottom: 20,
};


const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4'
}

const styles = {
    cardStyles: {
        root: {
            background: 'white',
            paddingBottom: 35,
            borderTop: '7px solid #0078d4',
            width: '100%',
            maxWidth: '90%',
            display: 'block',
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
        }
    },
    amount: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
            justifyContent: 'center',
        }
    },
    link: {
        root: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#0078d4',
            textDecoration: 'underline',
            margin: 'auto',
            paddingBottom: 10,
            
        }
    }
};

//for the things below you can make them about anything you feel like is fine i just made examples if you want to follow them



const CardsSection = () => {
    const [count, setCount] = useState(0)
    const [countex, setCount1] = useState(0)
    const [countrep, setCount2] = useState(0)

initializeIcons();
return (
    <div style={container}>
            <div className="s-Grid-col ms-sm3 ms-xl3">
                <Card styles={styles.cardStyles}>
                    <Card.Section>
                        <Card.Item>
                            <i style={icon} className={'ms-Icon ms-Icon--${card.icon}'} aria-hidden="true"></i>
                            <Text styles={styles.header}>Calories Count

                            </Text>
                        </Card.Item>
                        <Card.Item>
                            <Text styles={styles.amount}>{count}

                            </Text>
                        </Card.Item>
                        <Card.Item>
                            <Text styles={styles.link}><button onClick={() => setCount(0)}>Reset</button>

                            </Text>
                            <button onClick={() => setCount((e)=>e + 100)}>+</button>
                        </Card.Item>
                    </Card.Section>
                </Card>
            </div>
            <div className="s-Grid-col ms-sm3 ms-xl3">
                <Card styles={styles.cardStyles}>
                    <Card.Section>
                        <Card.Item>
                            <i style={icon} className={'ms-Icon ms-Icon--${card.icon}'} aria-hidden="true"></i>
                            <Text styles={styles.header}>Exercises Visited

                            </Text>
                        </Card.Item>
                        <Card.Item>
                            <Text styles={styles.amount}>{countex}

                            </Text>
                        </Card.Item>
                        <Card.Item>
                        <Text styles={styles.link}><button onClick={() => setCount1(0)}>Reset</button>
                        <button onClick={() => setCount1((e)=>e + 1)}>+</button>
                        </Text>
                        {'\n'}
                        
                            <Text styles={styles.link}><a href="./Exercises">Exercises</a>

                            </Text>
                        </Card.Item>
                    </Card.Section>
                </Card>
            </div>
            <div className="s-Grid-col ms-sm3 ms-xl3">
                <Card styles={styles.cardStyles}>
                    <Card.Section>
                        <Card.Item>
                            <i style={icon} className={'ms-Icon ms-Icon--${card.icon}'} aria-hidden="true"></i>
                            <Text styles={styles.header}>Reps Achieved

                            </Text>
                        </Card.Item>
                        <Card.Item>
                            <Text styles={styles.amount}>{countrep}

                            </Text>
                        </Card.Item>
                        <Card.Item>
                        <Text styles={styles.link}><button onClick={() => setCount2(0)}>Reset</button>
                        <button onClick={() => setCount2((e)=>e + 20)}>+</button>
                        </Text>
                        {'\n'}

                            <Text styles={styles.link}><a href="./RepCounter">Try and Beat It!</a>

                            </Text>
                        </Card.Item>
                    </Card.Section>
                </Card>
            </div>
    </div>
);
        }

export default CardsSection;
