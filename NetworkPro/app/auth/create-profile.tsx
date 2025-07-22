import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react-native';

export default function CreateProfileScreen() {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    additionalName: '',
    education: '',
    location: '',
  });

  const handleSaveProfile = () => {
    // Here you would typically save the profile data to your backend
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient colors={['#8B1538', '#C41E3A', '#7B2D8E']} style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.formCard}>
            <Text style={styles.title}>create your profile</Text>
            
            <View style={styles.avatarContainer}>
              <View style={styles.avatar} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First name*</Text>
              <TextInput
                style={styles.input}
                value={profileData.firstName}
                onChangeText={(text) => setProfileData({ ...profileData, firstName: text })}
              />

              <Text style={styles.inputLabel}>Last name*</Text>
              <TextInput
                style={styles.input}
                value={profileData.lastName}
                onChangeText={(text) => setProfileData({ ...profileData, lastName: text })}
              />

              <Text style={styles.inputLabel}>Additional name*</Text>
              <TextInput
                style={styles.input}
                value={profileData.additionalName}
                onChangeText={(text) => setProfileData({ ...profileData, additionalName: text })}
              />

              <Text style={styles.inputLabel}>Education</Text>
              <TextInput
                style={styles.input}
                value={profileData.education}
                onChangeText={(text) => setProfileData({ ...profileData, education: text })}
              />

              <Text style={styles.inputLabel}>Location</Text>
              <TextInput
                style={styles.input}
                value={profileData.location}
                onChangeText={(text) => setProfileData({ ...profileData, location: text })}
              />
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={handleSaveProfile}>
              <ArrowRight size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.sidePanel}>
            <TouchableOpacity style={styles.sidePanelButton}>
              <Text style={styles.sidePanelText}>View or edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidePanelButton}>
              <Text style={styles.sidePanelText}>Add Frame</Text>
            </TouchableOpacity>
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
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  formCard: {
    flex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 24,
    marginRight: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#1f2937',
  },
  continueButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  sidePanel: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 100,
  },
  sidePanelButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  sidePanelText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  },
});