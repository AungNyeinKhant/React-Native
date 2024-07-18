import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

import {icons} from '../constants'

const SearchInput = ({title,otherStyles,handleChangeText,placeholder,value,...props}) => {
    const [showPw,setShowPw] = useState(false)

  return (
   
      <View className='items-center flex-row bg-black-100 w-full h-16 border-2 border-black-200 focus:border-secondary rounded-2xl px-4 space-x-4'>
        <TextInput 
            className='text-base mt-0.5 text-white flex-1 font-pregular'
            value={value}
            placeholder="Search for a video topic"
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry = {title == 'Password' && !showPw}
        />

        <TouchableOpacity>
            <Image 
                source={icons.search} 
                className='w-5 h-5'
                resizeMode='contain'
            />
        </TouchableOpacity>

      </View>
    
  )
}

export default SearchInput

const styles = StyleSheet.create({})