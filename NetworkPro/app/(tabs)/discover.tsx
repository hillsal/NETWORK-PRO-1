import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Image,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase,
  Users,
  Star,
  QrCode,
  ArrowLeft
} from 'lucide-react-native';
import { useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Platform } from 'react-native';

export default function DiscoverScreen() {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  const categories = ['All', 'Technology', 'Design', 'Marketing', 'Finance', 'Healthcare'];
  
  const professionals = [
    {
      id: 1,
      name: 'Alex Rodriguez',
      title: 'Senior Software Engineer',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      rating: 4.9,
      connections: 892,
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      skills: ['React', 'Node.js', 'TypeScript']
    },
    {
      id: 2,
      name: 'Jessica Park',
      title: 'Product Designer',
      company: 'DesignStudio',
      location: 'New York, NY',
      rating: 4.8,
      connections: 654,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      skills: ['UI/UX', 'Figma', 'Design Systems']
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      title: 'Marketing Director',
      company: 'GrowthCorp',
      location: 'Austin, TX',
      rating: 4.7,
      connections: 1205,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      skills: ['Digital Marketing', 'Analytics', 'Strategy']
    }
  ];

  const handleQRScan = async () => {
    if (Platform.OS === 'web') {
      Alert.alert('QR Scanner', 'QR code scanning is not available on web platform. Please use the mobile app.');
      return;
    }

    if (!permission) {
      return;
    }

    if (!permission.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        Alert.alert('Permission Required', 'Camera permission is required to scan QR codes.');
        return;
      }
    }

    setShowQRScanner(true);
  };

  const handleQRCodeScanned = ({ data }: { data: string }) => {
    setShowQRScanner(false);
    Alert.alert('QR Code Scanned', `Scanned data: ${data}`);
  };

  if (showQRScanner) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.qrHeader}>
          <TouchableOpacity 
            style={styles.qrBackButton}
            onPress={() => setShowQRScanner(false)}
          >
            <ArrowLeft size={24} color="#ffffff" />
            <Text style={styles.qrBackText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.qrTitle}>Scan QR Code</Text>
        </View>
        
        <View style={styles.qrContainer}>
          <CameraView
            style={styles.camera}
            facing={facing}
            onBarcodeScanned={handleQRCodeScanned}
          >
            <View style={styles.qrOverlay}>
              <View style={styles.qrFrame} />
              <Text style={styles.qrInstructions}>
                Position the QR code within the frame to scan
              </Text>
            </View>
          </CameraView>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar with QR Scanner */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#9ca3af" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search professionals, skills, companies..."
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity 
              style={styles.qrButton}
              onPress={handleQRScan}
            >
              <QrCode size={20} color="#8B1538" />
            </TouchableOpacity>
          </View>
          
          {/* Recent searches */}
          <View style={styles.recentContainer}>
            <Text style={styles.recentTitle}>Recent</Text>
            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.recentItem}>
            <View style={styles.recentAvatar} />
            <View>
              <Text style={styles.recentName}>Abena Sintim</Text>
            </View>
          </View>
          
          <View style={styles.recentSearchItem}>
            <Text style={styles.recentSearchText}>interview tips</Text>
          </View>
          
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Try searching for</Text>
            <TouchableOpacity style={styles.suggestionItem}>
              <Search size={16} color="#8B1538" />
              <Text style={styles.suggestionText}>latest ai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.suggestionItem}>
              <Search size={16} color="#8B1538" />
              <Text style={styles.suggestionText}>remote work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.suggestionItem}>
              <Search size={16} color="#8B1538" />
              <Text style={styles.suggestionText}>balancing work and personal life</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryChip,
                index === 0 && styles.categoryChipActive
              ]}
            >
              <Text style={[
                styles.categoryText,
                index === 0 && styles.categoryTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Professionals</Text>
          
          {professionals.map((professional) => (
            <View key={professional.id} style={styles.professionalCard}>
              <View style={styles.cardHeader}>
                <Image 
                  source={{ uri: professional.avatar }} 
                  style={styles.avatar}
                />
                <View style={styles.cardInfo}>
                  <Text style={styles.name}>{professional.name}</Text>
                  <Text style={styles.title}>{professional.title}</Text>
                  <Text style={styles.company}>{professional.company}</Text>
                  
                  <View style={styles.cardMeta}>
                    <View style={styles.metaItem}>
                      <MapPin size={14} color="#9ca3af" />
                      <Text style={styles.metaText}>{professional.location}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Star size={14} color="#fbbf24" />
                      <Text style={styles.metaText}>{professional.rating}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Users size={14} color="#9ca3af" />
                      <Text style={styles.metaText}>{professional.connections}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.skillsContainer}>
                {professional.skills.map((skill, index) => (
                  <View key={index} style={styles.skillChip}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.connectButton}>
                  <Text style={styles.connectButtonText}>Connect</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>View Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1f2937',
  },
  filterButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1f2937',
    marginLeft: 12,
  },
  qrButton: {
    padding: 4,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  recentTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#8B1538',
  },
  clearButton: {
    padding: 4,
  },
  clearText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 8,
  },
  recentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#d1d5db',
    marginRight: 12,
  },
  recentName: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#1f2937',
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 16,
  },
  recentSearchText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8B1538',
  },
  suggestionsContainer: {
    marginTop: 8,
  },
  suggestionsTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#8B1538',
    marginBottom: 12,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  suggestionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8B1538',
    marginLeft: 8,
  },
  // QR Scanner Styles
  qrHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#8B1538',
  },
  qrBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  qrBackText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#ffffff',
    marginLeft: 8,
  },
  qrTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#ffffff',
  },
  qrContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  qrOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  qrInstructions: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  categoryChipActive: {
    backgroundColor: '#8B1538',
    borderColor: '#8B1538',
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6b7280',
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1f2937',
    marginBottom: 16,
  },
  professionalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cardInfo: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  company: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 8,
  },
  cardMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 4,
  },
  metaText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  skillChip: {
    backgroundColor: '#f3f4f6',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#374151',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  connectButton: {
    backgroundColor: '#8B1538',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 8,
  },
  connectButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
  viewButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  viewButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});