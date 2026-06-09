import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS } from '../styles/theme';

export default function SemaforoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Aquí va a ir el violentómetro de "INDH ciudadano" junto a sus escalas y niveles de precaución y riesgo</Text>
        </View>

        {/* Barra Vertical del Violentómetro */}
        <View style={styles.barContainer}>
          <View style={[styles.level, { backgroundColor: COLORS.magenta, flex: 1 }]}><Text style={styles.levelText}>Riesgo Alto</Text></View>
          <View style={[styles.level, { backgroundColor: COLORS.morado, flex: 1.5 }]}><Text style={styles.levelText}>Precaución</Text></View>
          <View style={[styles.level, { backgroundColor: COLORS.verdeBrillante, flex: 1 }]}><Text style={styles.levelText}>Seguro</Text></View>
        </View>

        <View style={styles.footerBox}>
          <Text style={styles.infoText}>Aquí va a ir una pequeña aclaración del violentómetro y sus bases</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blanco },
  scroll: { padding: 20, alignItems: 'center' },
  infoBox: { borderWidth: 1, borderColor: COLORS.magenta, padding: 15, width: '100%', borderRadius: 5, marginBottom: 30 },
  infoText: { textAlign: 'center', color: COLORS.magenta, fontWeight: '500' },
  barContainer: { width: 120, height: 350, borderRadius: 15, overflow: 'hidden', marginBottom: 30 },
  level: { width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#FFF' },
  levelText: { color: COLORS.blanco, fontWeight: 'bold', fontSize: 14 },
  footerBox: { backgroundColor: COLORS.grisClaro, padding: 15, width: '100%', borderRadius: 5 }
});