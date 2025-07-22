import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function ConnectNowScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#8B1538', '#C41E3A', '#7B2D8E']}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Decorative circles */}
        <View style={styles.decorativeCircles}>
          <View style={[styles.circle, styles.circle1]} />
          <View style={[styles.circle, styles.circle2]} />
          <View style={[styles.circle, styles.circle3]} />
        </View>

        <View style={styles.mainContent}>
          {/* People illustration */}
          <View style={styles.illustrationContainer}>
            <View style={styles.personGroup}>
              <View style={[styles.person, styles.person1]} />
              <View style={[styles.person, styles.person2]} />
              <View style={[styles.person, styles.person3]} />
              <View style={styles.connectionLines}>
                <View style={styles.line1} />
                <View style={styles.line2} />
              </View>
            </View>
          </View>

          <Text style={styles.title}>Connect Now</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => router.push('/auth/signup')}
            >
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.loginPrompt}>already have an account?</Text>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => router.push('/auth/login')}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
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
    position: 'relative',
  },
  decorativeCircles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    backgroundColor: 'rgba(139, 69, 19, 0.3)',
    borderRadius: 1000,
  },
  circle1: {
    width: 200,
    height: 200,
    top: 100,
    right: -50,
  },
  circle2: {
    width: 150,
    height: 150,
    bottom: 200,
    left: -30,
  },
  circle3: {
    width: 100,
    height: 100,
    bottom: 100,
    right: 50,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    zIndex: 1,
  },
  illustrationContainer: {
    marginBottom: 60,
  },
  personGroup: {
    position: 'relative',
    width: 120,
    height: 80,
  },
  person: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  person1: {
    top: 0,
    left: 40,
  },
  person2: {
    bottom: 0,
    left: 0,
  },
  person3: {
    bottom: 0,
    right: 0,
  },
  connectionLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  line1: {
    position: 'absolute',
    width: 2,
    height: 30,
    backgroundColor: '#ffffff',
    top: 25,
    left: 35,
    transform: [{ rotate: '45deg' }],
  },
  line2: {
    position: 'absolute',
    width: 2,
    height: 30,
    backgroundColor: '#ffffff',
    top: 25,
    right: 35,
    transform: [{ rotate: '-45deg' }],
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 80,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 60,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  signUpButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#8B1538',
  },
  loginPrompt: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderWidth: 2,
    borderColor: '#ffffff',
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#ffffff',
  },
});