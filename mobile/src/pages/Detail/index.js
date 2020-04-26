import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'react-native'
import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detais() {
  const navigation = useNavigation();
  const message = `Ola APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor R$120,00`
  function navigateBack(){
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject:'Heroi do caso: Cadelinha atropelada',
      recipients: ['jonagabriel@gmail.com'],
      body: message
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5532985184554&text=${message}`);
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />

          <TouchableOpacity 
            onPress={navigateBack }>
            <Feather name='arrow-left' size={30} color='#E02041'/>
          </TouchableOpacity>
        </View>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty, { marginTop: 0}}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>
          
          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Cadelinha Atropelada.</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>              
        </View>
      </View>
    );
}