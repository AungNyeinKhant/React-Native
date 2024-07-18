import { StyleSheet, Text, View,ScrollView,Image, StatusBar, Alert } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createUser } from '../../lib/appwrite'

//component
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

//assets
import {images} from '../../constants'
import { Link, router } from 'expo-router'

const SignUp = () => {
  const [form,setForm] = useState({
    username: '',
    email : '',
    password : ''
  })

  const submit = () =>{
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error','Please fill in all field')
    }

    setIsSubmitting(true)

    try {
      const result = createUser(
        form.email,
        form.password,
        form.username
      )

      //...set it t global

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error',error.message)
    } finally {
      setIsSubmitting(false)
    }

    // createUser(form)
  }

  const [isSubmitting,setIsSubmitting] = useState(false)


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh]  px-4 my-6'>
          <View className='items-center'>
            <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
            <Text className='text-2xl text-white font-psemibold mt-10 '>Sign Up to Aora</Text>
          </View>
          
          <FormField
            title = 'Username'
            value={form.username}
            handleChangeText = {(e) => {setForm({...form,username:e})}}
            otherStyles='mt-7'
          />
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
            title='Sign Up'
            handlePress={submit}
            isLoading = {isSubmitting}
            containerStyle='mt-6'
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular' >Already have an account?</Text>
            <Link className='text-base text-secondary-200 font-psemibold' href='/signIn' >Sign In</Link>
          </View>


        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>

    
  )
}

export default SignUp

const styles = StyleSheet.create({})