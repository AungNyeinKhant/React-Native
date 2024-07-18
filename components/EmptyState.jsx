import { StyleSheet, Text, View,Image } from 'react-native'
import  CustomButton  from '../components/CustomButton'
import React from 'react'
import {images} from '../constants'
import { router } from 'expo-router'

const EmptyState = ({title,subTitle}) => {
  return (
    <>
        <View className='justify-center items-center px-4 '> 
            <Image 
                source={images.empty}
                className='w-[270px] h-[210px]'
                resizeMode='contain'
            />
            <Text className='text-white text-2xl font-psemibold'>
                {title}
            </Text>
            
            <Text className='text-white font-pregular'>{subTitle}</Text>

            <CustomButton
                title='Create Video'
                handlePress={() => router.push('/create')}
                containerStyle='w-full my-5'
            />
        </View>
        
    </>
  )
}

export default EmptyState

const styles = StyleSheet.create({})