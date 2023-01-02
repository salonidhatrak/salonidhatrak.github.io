import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Profile() {
    const handleDownload = () => {
        return window.open('https://drive.google.com/file/d/1xo7qmLhycmLEtqQqXnpGUykDH-MhXwGq/view')
    }
    return (
        <>
            <Box height={{ base: '50px', md: '80px' }}></Box>
            <Flex w={{ base: '100%', md: '80%' }} m='auto' alignItems='center' justifyContent={{ base: 'center', md: 'space-around' }} flexDirection={{ base: 'column-reverse', lg: 'row' }} rowGap={{ base: '10px', md: '10px' }} mt={{ base: '20px', md: '10px', lg: '40px' }} >
                <Box fontSize={{ base: '18px', md: '35px', lg: '55px' }} width={{ base: '90%', md: '100%', lg: '45%' }} m={{ base: 'auto', lg: '0' }} fontWeight='600' textAlign={{ base: 'center', lg: 'left' }} lineHeight={{ base: '28px', md: '50px', lg: '80px' }}>
                    <Flex justifyContent='center' gap='5px' direction={{ base: 'row', lg: 'column' }}>

                        <Flex>
                            <Text color='#RGBA(0, 0, 0, 0.64)'><b>Hello World </b></Text>
                        </Flex>

                        <Text color='#RGBA(128,128,128)'> <b>Myself</b> <b style={{ color: '#9f5afd' }}>Saloni Dhatrak</b></Text>
                    </Flex>
                    <Text color='#RGBA(0, 0, 0, 0.64)   '><b>Full Stack Developer</b></Text>
                    <Text as={Link} _hover={{ textDecoration: 'none' }} download={true} href='/Saloni_Dhatrak_Resume.pdf' onClick={handleDownload} target='_blank'><Button size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} colorScheme='purple'>Resume</Button> </Text>
                </Box>

                <Box>
                    <Image src='https://i.ibb.co/tqK5YHN/20220907-193547.jpg' shadow='lg' mt={{ base: '10px', md: '0px' }} w={{ base: '150px', md: '200px', lg: '350px' }} borderRadius='50%' alt="Saloni Dhatrak" />
                </Box>
            </Flex>
        </>
    )
}

