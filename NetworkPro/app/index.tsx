import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function StartupScreen() {
  const router = useRouter();

  useEffect(() => {
    // Auto-navigate to connect-now after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/connect-now');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#8B1538', '#C41E3A']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Text style={styles.logoText}>Np</Text>
          </View>
          <Text style={styles.brandName}>Networkpro</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoBackground: {
    width: 120,
    height: 120,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  logoText: {
    fontFamily: 'Inter-Bold',
    fontSize: 48,
    color: '#ffffff',
    letterSpacing: -2,
  },
  brandName: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#ffffff',
    letterSpacing: -1,
  },
});