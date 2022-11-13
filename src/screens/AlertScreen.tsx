import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alerta presidencial',
      'Esto es un mensaje de prueba. No responda ni se alarme xD.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('Ok Pressed') },
      ],
      {
        // opcional para pulsar fuera del cuadro
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  const showPrompt = () => {
    // Sólo funciona en iOS
    /* Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir.',
      (value: string) => console.log('info: ', value), // value es el contenido del input
      'plain-text', // tipo de modal
      'Texto por defecto',
      'number-pad', // tipo de teclado
    ); */
  };

  // prompt para android e iOS
  prompt(
    'Cómo te llamas',
    'Introduce tu nombre de usuario',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: text => console.log('OK Pressed, password: ' + text),
      },
    ],
    {
      type: 'plain-text',
      cancelable: false,
      defaultValue: 'test',
      placeholder: 'placeholder',
    },
  );

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button title="Mostrar alerta" onPress={showAlert} />

      <View style={{ height: 10 }} />

      <Button title="Mostrar prompt" onPress={showPrompt} />
    </View>
  );
};
