import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import GitCalenderOffical from "./GitHubCalender";
import GitStats from "./GitStats";

export default function Skills() {
    return (
        <>
            <Box w={{ base: '95%', md: '90%', lg: '80%' }} m='auto' mt='5%'>
                <Text textAlign='center' color='#9f5afd' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>Skills</Text>

                <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '10px', md: '20px', lg: '35px' }} letterSpacing={{ base: '3px' }}>FRONT END </Text>
                <SimpleGrid columns={[4, 4, 4, 4]} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' rowGap='30px' mt={{ base: '5px', md: '10px' }}>

                    <GridItem m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://cdn-icons-png.flaticon.com/512/732/732212.png' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>HTML5</Text>
                    </GridItem>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>CSS3</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>JavaScript</Text>
                    </Box>

                    <GridItem m='auto' mt={{ base: '20px', md: '30px', lg: '6' }}>
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>React.Js</Text>
                    </GridItem>

                    <GridItem m='auto' mt={{ base: '20px', md: '30px', lg: '6' }}>
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Redux</Text>
                    </GridItem>

                    <GridItem m='auto' mt={{ base: '20px', md: '30px', lg: '6' }}>
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-plain.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>TypeScript</Text>
                    </GridItem>


                    <GridItem m='auto' mt={{ base: '20px', md: '30px', lg: '6' }}>
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://www.coffeeclass.io/logos/chakra-ui.png' shadow='lg' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Chakra UI</Text>
                    </GridItem>
                </SimpleGrid>

                <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '50px', md: '80px', lg: '55px' }} letterSpacing={{ base: '3px' }}>BACK END </Text>
                <SimpleGrid columns={[4, 4, 4, 4]} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' rowGap='15px'>
                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Node.Js</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Mongodb</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Express</Text>
                    </Box>


                    <GridItem m='auto' mt={{ base: '20px', md: '30px', lg: '6' }}>
                        <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg' shadow='lg' borderRadius='5px' />
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>NPM</Text>
                    </GridItem>
                </SimpleGrid>

                <SimpleGrid columns={[2, 2, 2, 2]} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' rowGap='15px' w={{ base: '45%' }} m='auto' mt={{ base: '5px', md: '10px' }}>

                </SimpleGrid>
            </Box>

            <Box>
                <GitStats />
            </Box>

            <Box>
                <GitCalenderOffical />
            </Box>
        </>
    )
}