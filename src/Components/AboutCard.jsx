import {
    Box,
    Center,
    Text,
    Stack,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import LinkedinButton from './LinkedInFollowBtn';
  
  export default function SocialProfileSimple() {
    const {Theme} = useContext(AppContext);

    const light = {
      backgroundColor : '#E9D8FD',
      color : 'black'
    }
  
   
    return (
        <>
          <Text color='#9f5afd' fontSize={{base : '22px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}} textAlign='center'>About Me</Text>
          <Center  style={ light }>
              <Box style={light }
                maxW={{base : '400px', md : '500px', lg : '550px'}}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                rounded={'lg'}
                textAlign={'center'}>

                {/* <Text fontWeight={600} color={'gray.500'} mb={4}>@Saloni Dhatrak</Text>
                <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3} style={ light }>
                    An ambitious developer with the ability to write neat and understandable code, looking forward to join a team with whom
                    communication and teamwork are paramount. Certified in MERN Stack technologies. Seeking to further improve in building
                    the web applications as the future full stack developer at Atmospheric Solutions.
                </Text> */}

<p className="home-about-body">
               I'm  an aspiring and determined <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
              Skilled in the <span style={{color: "#0A81AB" , fontStyle:"italic"}}>MERN stack</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
              <br/>
              <br/>
              {/* I developed passion for coding a few years back when I printed my first <span style={{color: "#0A81AB" , fontStyle:"italic"}}> "Hello world"</span> 😃, that hello world just hits different 😌 . Since then aesthetically functional websites has just been my thing. */}
            </p>
              
                {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                  <Badge px={2} py={1}  bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>#WebDesign</Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #business
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #tech
                  </Badge>
                </Stack> */}
        
                <Stack mt={1} direction={'row'} spacing={4} >
                <a href="https://www.linkedin.com/in/saloni-dhatrak-34201b229/" target='_blank' style={{width : '90%', margin:'auto'}}><LinkedinButton/></a>
                </Stack>
              </Box>
            </Center>
      </>
    );
  }