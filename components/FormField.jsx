import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

import {icons} from '../constants'

const FormField = ({title,otherStyles,handleChangeText,placeholder,value,...props}) => {
    const [showPw,setShowPw] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='items-center flex-row bg-black-100 w-full h-16 border-2 border-black-200 focus:border-secondary rounded-2xl px-4 '>
        <TextInput 
            className='flex-1 text-white font-psemibold text-base focus:border-black-200'
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry = {title == 'Password' && !showPw}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => {setShowPw(!showPw)}}>
                <Image className='w-6 h-6' resizeMode='contain' source={!showPw ? icons.eye : icons.eyeHide} />
            </TouchableOpacity>
        )}

      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})