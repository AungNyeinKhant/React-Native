import { StyleSheet, Text, View,ScrollView,Image, StatusBar, Alert } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//component
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

import { signIn } from '../../lib/appwrite'

//assets
import {images} from '../../constants'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form,setForm] = useState({
    email : '',
    password : ''
  })

  const submit = async () =>{
    
    if(!form.email || !form.password){
      Alert.alert('Error','Please fill in all field')
    }

    setIsSubmitting(true)

    try {
     await  signIn(
        form.email,
        form.password
      )

      //...set it t global

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error',error.message)
    } finally {
      setIsSubmitting(false)
    }

    
  }
  

  const [isSubmitting,setIsSubmitting] = useState(false)


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh]  px-4 my-6'>
          <View className='items-center'>
            <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
            <Text className='text-2xl text-white font-psemibold mt-10 '>Login to Aora</Text>
          </View>
          
          <FormField
            title = 'Email'
            value={form.email}
            handleChangeText = {(e) => {setForm({...form,email:e})}}
            keyboardType = 'email-address'
            otherStyles='mt-7'
          />
          <FormField
            title = 'Password'
            value={form.password}
            handleChangeText = {(e) => {setForm({...form,password:e})}}
            otherStyles='mt-7'
          />

          <CustomButton 
            title='Sign In'
            handlePress={submit}
            isLoading = {isSubmitting}
            containerStyle='mt-6'
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular' >Dont have account?</Text>
            <Link className='text-base text-secondary-200 font-psemibold' href='/signUp' >Sign Up</Link>
          </View>


        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>

    
  )
}

export default SignIn

const styles = StyleSheet.create({})