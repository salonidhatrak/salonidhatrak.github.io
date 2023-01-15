import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar({ ProfileRef, AboutRef, SkillsRef, ProjectsRef, ContactRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDownload = () => {
    return window.open('https://drive.google.com/file/d/1G7V74P6bZ3VYUyk7W10QRLk8ikD3jh7z/view?usp=sharing')
  }

  const light = {
    backgroundColor: 'white',
    color: 'black'
  }

  return (
    <>
      <Box px={4} style={light} className='ChackraNavBar' shadow='lg'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton style={light}
            size='lg'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex justifyContent={'space-between'} alignItems='center' w='90%' m={'auto'} color='#RGBA(0, 0, 0, 0.64)'>
            <Box p='5px'>

            </Box>
            <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{ base: '', md: '60%', lg: '40%' }} justifyContent='space-between' alignItems='center' color='#9f5afd' fontWeight='650'>
              <Text onClick={ProfileRef} cursor='pointer'>Home</Text>
              <Text onClick={AboutRef} cursor='pointer'>About</Text>
              <Text onClick={SkillsRef} cursor='pointer'>Skills</Text>
              <Text onClick={ProjectsRef} cursor='pointer'>Project</Text>
              <Text onClick={ContactRef} cursor='pointer'>Contact</Text>
              <Text as={Link} _hover={{ textDecoration: 'none' }} download={true} href='/saloni_resume.pdf' onClick={handleDownload} target='_blank'>Resume</Text>
            </Flex>
          </Flex>
          <Box width='5%' justifyContent={'center'} display='flex'>

          </Box>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} style={light}>
            <Stack as={'nav'} spacing={4} color='#805AD5' fontWeight='600'>
              <Text onClick={ProfileRef} cursor='pointer'>Home</Text>
              <Text onClick={AboutRef} cursor='pointer'>About</Text>
              <Text onClick={SkillsRef} cursor='pointer'>Skills</Text>
              <Text onClick={ProjectsRef} cursor='pointer'>Project</Text>
              <Text onClick={ContactRef} cursor='pointer'>Contact</Text>
              <a as={Link} _hover={{ textDecoration: 'none' }} download={true} href='/Saloni_Dhatrak_Resume.pdf' onClick={handleDownload} target='_blank'><Text cursor='pointer'>Resume</Text></a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}