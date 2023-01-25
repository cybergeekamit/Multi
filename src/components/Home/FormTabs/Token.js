import React from 'react'
import {
    FormControl, FormLabel, Input, Badge
} from '@chakra-ui/react'
import { useAuth } from 'contexts/AuthContext'

export default function Token() {

  const { setTokenAddress, currentNetwork } = useAuth();
  
  const handleChange = (e) => {
    setTokenAddress(e.target.value)
  }

  return (
    <>
    <FormControl>
        <FormLabel htmlFor='token'>
          Token
          <Badge colorScheme="blue" ml="2" rounded="md" p="1">Contract (
            {
              currentNetwork === 56 || currentNetwork ===97 ? "BNB"
              :  
              currentNetwork === 128 ? "HT"
              :
              currentNetwork === 1
              ? "ETH" : ""
            }
          {" "}Chain)</Badge>
        </FormLabel>
        <Input id='token' _placeholder={{color: "gray.500"}} onChange={handleChange}  color="black"
        type='email' w='100%' backgroundColor="#E5E5E5" value='0x11A1764C877837921eCA6F3f58cdBE9BcD4E9E5e' disabled placeholder='0x11A1764C877837921eCA6F3f58cdBE9BcD4E9E5e'/>
    </FormControl>
    </>
  )
}
