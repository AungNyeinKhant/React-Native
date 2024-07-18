import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { Link,router,Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {useGlobalContext} from '../context/GlobalProvider'
/*
======== App Write ========
Aora
com.anklearn.aora
*/

//component
import CustomButton from '../components/CustomButton';

//assets
import {images} from '../constants'
//nativewind
import '../nativewind-config'

export default function App() {
  const {isLoading,isLoggedIn} = useGlobalContext()

  if(!isLoading && isLoggedIn) {
    return <Redirect href='/home' />
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height : '100%'}}>
        <View className='w-full min-h-[85vh] items-center justify-center px-4'>
          <Image 
            source={images.logo} 
            className='w-[130px] h-[84px]' 
            resizeMode='contain' />
          <Image 
            source={images.cards}
            className='max-width-[380px] w-full h-[300px]'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-white text-center'>
              Discover Endless 
              Possibility with {' '}
              <Text className='text-secondary-200'>Aora</Text>

              

            </Text>
            <Image source={images.path} className='absolute -bottom-2 -right-8 w-[136px] h-[15px] ' resizeMode='contain' />
          </View>
          <Text className='text- small font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation : embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton
            title='Continue with email'
            handlePress={()=> { router.push('/signIn') }}
            containerStyle='w-full mt-7'
          />

          

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
