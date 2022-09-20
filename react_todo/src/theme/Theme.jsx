import {extendTheme} from "@chakra-ui/react"

const Theme = extendTheme({
  styles:{
    global:{
      body:{
        backgroundColor :"gray.100",
        color:"gray.800"
      }
    }
  }
}
);

export default Theme;