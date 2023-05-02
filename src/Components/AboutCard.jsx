import {
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import LinkedinButton from './LinkedInFollowBtn';

export default function SocialProfileSimple() {
  const light = {
    backgroundColor: '#E9D8FD',
    color: 'black'
  }


  return (
    <>
      <Text color='#9f5afd' fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center'>About Me</Text>
      <Center style={light}>
        <Box style={light}
          maxW={{ base: '400px', md: '500px', lg: '550px' }}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          textAlign={'center'}>



          <p className="home-about-body">
            I'm  an aspiring and determined <span style={{ color: "#0A81AB", fontStyle: "italic" }}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
            Skilled in the <span style={{ color: "#0A81AB", fontStyle: "italic" }}>MERN stack</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
            <br />
            <br />

          </p>



          <Stack mt={1} direction={'row'} spacing={4}   id="resume-link-2">
            <a href="https://www.linkedin.com/in/saloni-dhatrak-34201b229/" target='_blank' style={{ width: '90%', margin: 'auto' }} rel="noreferrer"><LinkedinButton /></a>
          </Stack>
        </Box>
      </Center>
    </>
  );
}