import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react-native';

export default function SignUpScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleSignUp = () => {
    // Here you would typically make an API call to register the user
    router.replace('/auth/welcome');
  };

  return (
    <LinearGradient colors={['#8B1538', '#C41E3A', '#7B2D8E']} style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#ffffff" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.circleBackground}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email or phone number</Text>
              <TextInput
                style={styles.input}
                placeholder="type here...."
                placeholderTextColor="#9ca3af"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="type here...."
                placeholderTextColor="#9ca3af"
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry
              />

              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="type here...."
                placeholderTextColor="#9ca3af"
                value={formData.confirmPassword}
                onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                secureTextEntry
              />

              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="type here...."
                placeholderTextColor="#9ca3af"
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                autoCapitalize="words"
              />

              <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#ffffff',
    marginLeft: 8,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#ffffff',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  circleBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 200,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 500,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#ffffff',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1f2937',
    width: '100%',
    marginBottom: 8,
  },
  signUpButton: {
    backgroundColor: '#8B1538',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginTop: 30,
    minWidth: 120,
  },
  signUpButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});