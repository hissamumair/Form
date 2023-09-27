import { View, Text, StyleSheet } from "react-native"; // Import StyleSheet from 'react-native'

import React from "react";

const ContactYoutube = () => {
  return (
    <View style={styles.mainContainer}>
     
      <Text style={styles.mainHeader}>
       
        Login Form
      </Text>
      <Text style={styles.description}>
      
        you can reach us anytime @hissam.
      </Text>
      <View style={styles.inputContainer}>
   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    flex: 1, // Adjust this value to control the relative size
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ContactYoutube;