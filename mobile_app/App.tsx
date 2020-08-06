import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Landing from './src/pages/Landing';

export default function App() {

  //Carrega as fontes
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  // Mostra a splash screen enquanto não tiver carregado as fontes
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    )
  };
}
