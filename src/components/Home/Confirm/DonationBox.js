import React from 'react'
import { Checkbox, HStack } from '@chakra-ui/react'
import { useAuth } from 'contexts/AuthContext'

export default function DonationBox() {

    const { isChecked, setIsChecked, currentNetwork } = useAuth()

    return (
    <>
    <HStack>
        <Checkbox isChecked={isChecked} onChange={()=>setIsChecked(!isChecked)}>
            Dont check It
            {currentNetwork === 56 || currentNetwork ===97 ? " 0.000 BNB "
            :  
            currentNetwork === 128 ? " 0.00 HT "
            :
            currentNetwork === 1
            ? " 0.00000 ETH " : ""}
            k
        </Checkbox>
    </HStack>
    </>
  )
}
