import React from "react"
import { Center, NativeBaseProvider } from "native-base"

function Example() {
  return (
    <Center
      bg="primary.400"
      _text={{
        color: "white",
        fontWeight: "bold",
      }}
      height={200}
      width={{
        base: 200,
        lg: 400,
      }}
    >
      This is the Center
    </Center>
  )
}

export const CenterPage =  () => {
  return (
    <NativeBaseProvider>
      {/* <Center flex={1} px="3"> */}
        <Example />
      {/* </Center> */}
    </NativeBaseProvider>
  )
}
