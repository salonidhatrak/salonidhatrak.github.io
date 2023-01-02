import { Box, Flex, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import CopyRight from "./CopyRight";

export default function Contact() {
    return (
        <>
            <Text textAlign='center' color='#9f5afd' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>Contact</Text>
            <Box pb={{ base: '20px', md: '30px' }}>
                <Flex w={{ base: '60%', md: '35%', lg: '25%' }} m='auto' justifyContent='space-around' fontSize={{ base: '22px', md: '26px', lg: '30px' }} mt='20px'>
                    <Box>
                        <a href="https://www.linkedin.com/in/saloni-dhatrak-34201b229/" target='_blank' rel="noreferrer"> <Text><BsLinkedin /></Text></a>
                    </Box>

                    <Box>
                        <a href="https://github.com/salonidhatrak" target='_blank' rel="noreferrer"><Text><BsGithub /></Text></a>
                    </Box>

                    <Box>
                        <a href="tel:+917350490240" ><Text><AiOutlinePhone /></Text></a>
                    </Box>

                    <Box>
                        <a href="mailto:salonidhatrak123@email.com"><Text><GrMail /></Text></a>
                    </Box>
                </Flex>
            </Box>

            <Box width={{ base: '50%', md: '35%', lg: '25%' }} m='auto' textAlign='center' paddingBottom={{ base: '30px', lg: '50px' }}>
                <CopyRight />
            </Box>
        </>
    )

}