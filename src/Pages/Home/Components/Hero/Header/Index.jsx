import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { SwipeableViews } from 'react-swipeable-views-v18';
import { autoPlay } from 'react-swipeable-views-utils';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { IMAGES } from 'Constant/content';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = IMAGES.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1, position: "relative", top: 0 }}>
            <Box position={'relative'}>
                < img
                    src={IMAGES[activeStep]?.img}
                    width={'100%'}
                    alt='carousel-img'
                    height={'700vh'}
                    style={{objectFit:'cover',filter:'brightness(60%)'}}
                />
                <Box position={'absolute'} height={200} top={100} left={70} mt={5}>
                    <Button
                        variant='contained'
                        color='error'
                        sx={{
                            p: 1,
                            width: '150%',
                            fontWeight: 'bold',
                            transform: 'rotate(-30deg)',
                            display:{md:'block',sm:'block',xs:'none'}
                        }}>BEST SELLER</Button>
                </Box>
                <Box position={'absolute'} top={"70%"} left={{md:'40%',sm:'40%',xs:'20%'}}>
                    <Typography
                        variant='body1'
                        fontSize={'23px'}
                        p={1}
                        bgcolor={'rgba(0,0,0,.6)'}
                        borderRadius={'90%'}
                        color={'white'}
                        width={'55%'}
                        textAlign={'center'}
                        mx={5}
                        fontWeight={'bold'}
                    >{IMAGES[activeStep]?.label}</Typography>
                    <Typography
                        variant='body2'
                        fontSize={'17px'}
                        p={2}
                        bgcolor={'rgba(0,0,0,.6)'}
                        color={'white'}
                        fontStyle={'italic'}
                        m={1}
                    >Stylish and Elegent</Typography>
                    <Button variant='contained' color='secondary' sx={{ background: 'white', p: 2, px: 5, color: 'black', mx: 4, fontWeight: 'bold' }}>Buy Now</Button>

                </Box>
            </Box>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
            >
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep === maxSteps ? setActiveStep(0) : setActiveStep}
                variant='none'
                sx={{ display: 'flex', m: "auto", justifyContent: 'center' }}
            />
            <Box position={'absolute'} top={200} right={20}>
                <KeyboardArrowRight fontSize='large' onClick={activeStep === maxSteps - 1 ? () => setActiveStep(0) : handleNext}
                    variant='contained'
                    sx={{ borderRadius: '50%', height: 400, fontSize: '60px', color: 'white', p: 1, cursor: 'pointer' }} />
            </Box>
            <Box position={'absolute'} top={200} left={20}>
                <KeyboardArrowLeft fontSize='large' onClick={activeStep === 0 ? () => setActiveStep(maxSteps - 1) : handleBack}
                    variant='contained'
                    sx={{ borderRadius: '50%', height: 400, fontSize: '60px', color: 'white', p: 1, cursor: 'pointer' }} />
            </Box>
        </Box>

    );
}

export default SwipeableTextMobileStepper;
