import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS } from '../styles/theme';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Kora</Text>
        </View>

        <TouchableOpacity 
          style={styles.mainButton} 
          onPress={() => navigation.navigate('Cuestionario')}>
          <Text style={styles.mainButtonText}>Mi termómetro{"\n"}Relacional</Text>
        </TouchableOpacity>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Resultados')}>
            <Text style={styles.gridText}>Resumen{"\n"}de resultados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Semaforo')}>
            <Text style={styles.gridText}>Violentómetro y{"\n"}sus niveles</Text>
          </TouchableOpacity>
        </View>
        </View>
            <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Kora')}>
            <Text style={styles.footerLink}>Kora</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Nosotros')}>
            <Text style={styles.footerLink}>¿Quienes Somos?</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blanco },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  logoBox: { borderTopWidth: 3, borderBottomWidth: 3, borderColor: COLORS.magenta, paddingHorizontal: 50, paddingVertical: 15, marginBottom: 50 },
  logoText: { fontSize: 45, fontWeight: 'bold', color: COLORS.magenta },
  mainButton: { backgroundColor: COLORS.morado, width: '90%', padding: 25, borderRadius: 12, marginBottom: 30, shadowColor: COLORS.morado, shadowOpacity: 0.3, shadowRadius: 5 },
  mainButtonText: { color: COLORS.blanco, fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  grid: { flexDirection: 'row', justifyContent: 'space-between', width: '90%' },
  gridButton: { backgroundColor: COLORS.verdeMenta, width: '48%', padding: 20, borderRadius: 8, borderBottomWidth: 4, borderBottomColor: COLORS.verdeBrillante },
  gridText: { color: COLORS.magenta, fontWeight: 'bold', textAlign: 'center', fontSize: 13 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', width: '90%', position: 'absolute', bottom: 30 },
  footerLink: { color: COLORS.magenta, fontWeight: 'bold', fontSize: 14, borderWidth: 1, borderColor: COLORS.magenta, padding: 8, borderRadius: 5 }
});