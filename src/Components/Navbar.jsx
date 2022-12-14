import { useContext } from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AppContext } from '../Context/AppContext';

export default function Navbar({ProfileRef,AboutRef,SkillsRef,ProjectsRef,ContactRef}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {Theme,ToggleTheme} = useContext(AppContext)

  const light = {
    backgroundColor : 'white',
    color : 'black'
  }

  // const dark = {
  //   backgroundColor : 'black',
  //   color : 'white'
  // }
  return (
    <>
      <Box px={4} style={ light} className='ChackraNavBar' shadow='lg'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton style={light}
            size='lg'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex justifyContent={'space-between'} alignItems='center' w='90%' m={'auto'} color='#RGBA(0, 0, 0, 0.64)'>
            <Box p='5px'>
                {/* { Theme === 'light' ? <Image  width={{base : '30px', md : '40px'}} src="https://logodix.com/logo/2067253.png"/> : 
                <Image width={{base : '40px', md : '55px'}}  src="https://i.pinimg.com/originals/00/f7/8e/00f78e1fcdaecabd16c18818e7dcbfff.jpg"/>} */}
            </Box>
            <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '60%', lg : '40%'}} justifyContent='space-between' alignItems='center' color='#9f5afd' fontWeight='650'>
              <Text onClick={ProfileRef} cursor='pointer'>Home</Text>
              <Text onClick={AboutRef} cursor='pointer'>About</Text>
              <Text onClick={SkillsRef} cursor='pointer'>Skills</Text>
              <Text onClick={ProjectsRef} cursor='pointer'>Project</Text>
              <Text onClick={ContactRef} cursor='pointer'>Contact</Text>
              <a href="https://drive.google.com/file/d/1xo7qmLhycmLEtqQqXnpGUykDH-MhXwGq/view?usp=sharing" target='_blank'><Text>Resume</Text> </a>
            </Flex>
          </Flex>
            <Box width='5%' justifyContent={'center'} display='flex'>
            {/* <Text onClick={ToggleTheme} cursor='pointer'>{ Theme ='light' ? <BsFillMoonFill/> : <BsFillSunFill/>}</Text> */}
            </Box>
        </Flex> 
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} style={Theme ='light'}>
            <Stack as={'nav'} spacing={4} color='#805AD5' fontWeight='600'>
              <Text onClick={ProfileRef} cursor='pointer'>Home</Text>
              <Text onClick={AboutRef} cursor='pointer'>About</Text>
              <Text onClick={SkillsRef} cursor='pointer'>Skills</Text>
              <Text onClick={ProjectsRef} cursor='pointer'>Project</Text>
              <Text onClick={ContactRef} cursor='pointer'>Contact</Text>
              <a href="https://drive.google.com/file/d/1s6XzcoGAECjaWVGfMDdHro2ghFgweE-u/view?usp=sharing" target='_blank'><Text cursor='pointer'>Resume</Text></a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}