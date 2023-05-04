import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillChrome, AiFillGithub } from 'react-icons/ai'

export default function Projects() {
    return (
        <>
            <Text textAlign='center' color='#9f5afd' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>Projects</Text>
            <SimpleGrid columns={[1, 1, 1, 2]} w={{ base: '85%', md: '80%', lg: '80%' }} m='auto' columnGap='80px' rowGap='25px' mt={{ base: '15px' }} p={{ base: '15px', md: '20px', lg: '25px' }}>

                <Box m='auto'>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} fontWeight='600'>Shooping Paradice.com</Text>
                    <Text fontSize={{ base: '13px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} lineHeight={{ base: '20px', md: '25px', lg: '30px' }}>Shopping Paradise is an E-Commerce Indian based web application which sells products related to Makeup, Skin Care, Hair, Mom & Baby Care, Fragrance, Appliances and much more.
                    </Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} >A Colaborative project built by a team of 4 members executed in 4 Days</Text>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} fontWeight='600'>Tech Stack</Text>
                    <Text fontSize={{ base: '10px', md: '14px' }} mt={{ base: '2px', md: '5px', lg: '2px' }} letterSpacing={{ base: '0.5', lg: '2px' }}> JAVASCRIPT | HTML:5 | CSS5 | REACT |REDUX | CHAKRA UI | ROUTER DOM | AXIOS | NPM</Text>
                    <Flex gap='20px' mt={{ base: '10px' }}>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://shopingparadise.vercel.app/" target='_blank' rel="noreferrer"><AiFillChrome /></a></Text>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://github.com/heyabrar/ShoppingParadise" target='_blank' rel="noreferrer"><AiFillGithub /></a></Text>
                    </Flex>
                </Box>

                <Box className="cardImg" m='auto'>
                    <Image m='auto' src="https://user-images.githubusercontent.com/103938174/201518169-68c77bdd-06c2-44cc-80d4-f4cf0a5981b7.png" alt="Front Img" borderRadius='8px' />
                </Box>


            </SimpleGrid>


            <Flex w={{ base: '85%', md: '80%', lg: '80%' }} m='auto' columnGap='80px' rowGap='25px' mt={{ base: '30px', lg: '6%' }} direction={{ base: 'column-reverse', lg: 'row' }} p={{ base: '15px', md: '20px', lg: '25px' }}>
                <Box m='auto'>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} fontWeight='600'>FabBag.com</Text>
                    <Text fontSize={{ base: '13px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} lineHeight={{ base: '20px', md: '25px', lg: '30px' }}>
                        India's largest beauty subscription service. Receive amazing sample/full-size products at least twice the price you pay in a delightful bag every month
                    </Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} >A Colaborative project built by a team of 5 members executed in 4 Days</Text>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} fontWeight='600'>Tech Stack</Text>
                    <Text fontSize={{ base: '10px', md: '14px' }} mt={{ base: '2px', md: '5px', lg: '2px' }} letterSpacing={{ base: '0px', lg: '2px' }}>HTML | CSS | JAVASCRIPT</Text>
                    <Flex gap='20px' mt={{ base: '10px' }}>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://silver-cat-1aeb55.netlify.app//" target='_blank' rel="noreferrer"><AiFillChrome /></a></Text>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://github.com/pravindnikam07/Fab-Bag-Clone" target='_blank' rel="noreferrer"><AiFillGithub /></a></Text>
                    </Flex>
                </Box>

                <Box className="cardImg" m='auto'>
                    <Image m='auto' src="https://user-images.githubusercontent.com/101383047/189795402-67ee15c5-95aa-4bc6-a343-cdca708489bf.png" alt="Front Img" borderRadius='8px' />
                </Box>
            </Flex>


            <SimpleGrid columns={[1, 1, 1, 2]} w={{ base: '85%', md: '80%', lg: '80%' }} m='auto' columnGap='80px' rowGap='25px' mt={{ base: '30px', lg: '6%' }} p={{ base: '15px', md: '20px', lg: '25px' }}>


                <Box m='auto'>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} fontWeight='600'>Skin Store.com</Text>
                    <Text fontSize={{ base: '13px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} lineHeight={{ base: '20px', md: '25px', lg: '30px' }}>
                        Skin Store is a web application for premium beauty, delivering the latest in innovative clinical skincare and luxury spa products.
                    </Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} >A Colaborative project built by a team of 4 members executed in 4 Days</Text>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} fontWeight='600'>Tech Stack</Text>
                    <Text fontSize={{ base: '10px', md: '14px' }} mt={{ base: '2px', md: '5px', lg: '2px' }} letterSpacing={{ base: '0.5', lg: '2px' }}>REACT | JAVASCRIPT | CSS:5 | NODE.JS | </Text>
                    <Flex gap='20px' mt={{ base: '10px' }}>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://regal-cucurucho-bea6ba.netlify.app/home_page.html" target='_blank' rel="noreferrer"><AiFillChrome /></a></Text>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://github.com/Ankur982/-profuse-yak-8322" target='_blank' rel="noreferrer"><AiFillGithub /></a></Text>
                    </Flex>
                </Box>

                <Box className="cardImg" m='auto'>
                    <Image m='auto' src="https://i.ibb.co/NVDvqfk/Screenshot-648.png" alt="Front Img" borderRadius='8px' />

                </Box>
            </SimpleGrid>




            <Flex w={{ base: '85%', md: '80%', lg: '80%' }} m='auto' columnGap='80px' rowGap='25px' mt={{ base: '30px', lg: '6%' }} direction={{ base: 'column-reverse', lg: 'row' }} p={{ base: '15px', md: '20px', lg: '25px' }}>
                <Box m='auto'>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} fontWeight='600'>911.com</Text>
                    <Text fontSize={{ base: '13px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} lineHeight={{ base: '20px', md: '25px', lg: '30px' }}>
                        911.com website is a healthcare platform. It provides services, such as an e-pharmacy,
                        where you can buy different kinds of medicine and healthcare products.
                    </Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} >A Colaborative project built by a team of 4 members executed in 4 Days</Text>
                    <Text fontSize={{ base: '14px', md: '18px', lg: '22px' }} mt={{ base: '5px', md: '10px', lg: '12px' }} fontWeight='600'>Tech Stack</Text>
                    <Text fontSize={{ base: '10px', md: '14px' }} mt={{ base: '2px', md: '5px', lg: '2px' }} letterSpacing={{ base: '0.5px', lg: '2px' }}>REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | REDUX | EXPRESS | MONGODB | NODEJS</Text>
                    <Flex gap='20px' mt={{ base: '10px' }}>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://911-com.vercel.app" target='_blank'><AiFillChrome /></a></Text>
                        <Text fontSize={{ base: '20px', md: '25px', lg: '30px' }} ><a href="https://github.com/Rohit1-1/phobic-turn-8444" target='_blank'><AiFillGithub /></a></Text>
                    </Flex>
                </Box>

                <Box className="cardImg" m='auto'>
                    <Image m='auto' src="https://user-images.githubusercontent.com/101381281/208606971-3a7c3a26-abcb-4428-9ee6-116159ebe8b9.png" alt="Front Img" borderRadius='8px' />
                </Box>
            </Flex>
        </>
    )
}