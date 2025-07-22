import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#8B1538', '#C41E3A', '#7B2D8E']} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>HELLO{'\n'}WELCOME!</Text>
          
          <View style={styles.illustrationContainer}>
            <Text style={styles.subtitle}>STEP INTO{'\n'}YOUR{'\n'}PROFESSIONAL{'\n'}WORLD</Text>
            
            {/* Simple person illustration */}
            <View style={styles.personIllustration}>
              <View style={styles.personHead} />
              <View style={styles.personBody} />
              <View style={styles.personArm} />
              <View style={styles.personLeg1} />
              <View style={styles.personLeg2} />
              <View style={styles.arrow} />
            </View>
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => router.replace('/auth/create-profile')}
          >
            <Text style={styles.continueButtonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 80,
    paddingBottom: 40,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 48,
    color: '#ffffff',
    textAlign: 'left',
    lineHeight: 52,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  subtitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#8B1538',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 40,
  },
  personIllustration: {
    position: 'relative',
    width: 100,
    height: 120,
  },
  personHead: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#8B1538',
    top: 0,
    left: 35,
  },
  personBody: {
    position: 'absolute',
    width: 40,
    height: 50,
    backgroundColor: '#8B1538',
    top: 25,
    left: 30,
    borderRadius: 5,
  },
  personArm: {
    position: 'absolute',
    width: 25,
    height: 8,
    backgroundColor: '#8B1538',
    top: 35,
    right: 5,
    borderRadius: 4,
    transform: [{ rotate: '30deg' }],
  },
  personLeg1: {
    position: 'absolute',
    width: 8,
    height: 30,
    backgroundColor: '#8B1538',
    bottom: 0,
    left: 38,
    borderRadius: 4,
  },
  personLeg2: {
    position: 'absolute',
    width: 8,
    height: 30,
    backgroundColor: '#8B1538',
    bottom: 0,
    left: 54,
    borderRadius: 4,
  },
  arrow: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#8B1538',
    bottom: -10,
    right: 10,
    transform: [{ rotate: '45deg' }],
  },
  continueButton: {
    backgroundColor: '#8B1538',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 40,
  },
  continueButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#ffffff',
  },
});