import { Box, Flex, Text } from "@chakra-ui/react";
import { HiLocationMarker } from 'react-icons/hi'

export default function CopyRight() {
    return (
        <>
            <Box fontSize={{ base: '12px', md: '14px', lg: '16px' }}>
                <Text>Email : salonidhatrak123@gmail.com</Text>
                <Flex justifyContent='center' alignItems='center' gap='5px' mt='5px'>
                    <Text><HiLocationMarker /></Text>
                    <Text>Maharashtra, India</Text>
                </Flex>
                <Text mt='5px'>Copyright © 2022</Text>
            </Box>
        </>
    )
}