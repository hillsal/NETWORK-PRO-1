import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, CreditCard as Edit, MapPin, Briefcase, Calendar, Users, Eye, Award, BookOpen, ExternalLink } from 'lucide-react-native';

export default function ProfileScreen() {
  const skills = ['React Native', 'TypeScript', 'UI/UX Design', 'Node.js', 'GraphQL'];
  
  const achievements = [
    { title: 'Top Networker', description: '1000+ connections', icon: '🏆' },
    { title: 'Active Member', description: '6 months active', icon: '⭐' },
    { title: 'Content Creator', description: '50+ posts shared', icon: '📝' }
  ];

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'TechFlow Inc.',
      duration: '2022 - Present',
      location: 'San Francisco, CA'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      duration: '2020 - 2022',
      location: 'Remote'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#3b82f6', '#1e40af']}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <TouchableOpacity style={styles.settingsButton}>
              <Settings size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Edit size={16} color="#ffffff" />
            </TouchableOpacity>
            
            <Text style={styles.name}>Gerald</Text>
            <Text style={styles.title}>Senior Software Engineer</Text>
            <Text style={styles.company}>TechFlow Inc.</Text>
            
            <View style={styles.locationContainer}>
              <MapPin size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.location}>San Francisco, CA</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Users size={24} color="#3b82f6" />
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Connections</Text>
          </View>
          <View style={styles.statItem}>
            <Eye size={24} color="#10b981" />
            <Text style={styles.statNumber}>856</Text>
            <Text style={styles.statLabel}>Profile Views</Text>
          </View>
          <View style={styles.statItem}>
            <Award size={24} color="#f59e0b" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Endorsements</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Edit size={20} color="#3b82f6" />
            <Text style={styles.actionText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <ExternalLink size={20} color="#3b82f6" />
            <Text style={styles.actionText}>Share Profile</Text>
          </TouchableOpacity>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>
            Passionate software engineer with 5+ years of experience building scalable web and mobile applications. 
            Love working with cutting-edge technologies and collaborating with amazing teams to create products that make a difference.
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((job, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Briefcase size={20} color="#6b7280" />
                <View style={styles.experienceInfo}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.jobCompany}>{job.company}</Text>
                  <View style={styles.jobMeta}>
                    <Calendar size={14} color="#9ca3af" />
                    <Text style={styles.jobDuration}>{job.duration}</Text>
                    <Text style={styles.jobLocation}>• {job.location}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementItem}>
              <Text style={styles.achievementIcon}>{achievement.icon}</Text>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Learning */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Currently Learning</Text>
          <View style={styles.learningItem}>
            <BookOpen size={20} color="#8b5cf6" />
            <View style={styles.learningInfo}>
              <Text style={styles.learningTitle}>Advanced React Patterns</Text>
              <Text style={styles.learningProgress}>Progress: 65%</Text>
            </View>
          </View>
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
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  settingsButton: {
    padding: 8,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ffffff',
    marginBottom: 16,
  },
  editImageButton: {
    position: 'absolute',
    top: 80,
    right: 130,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 2,
  },
  company: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1f2937',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6b7280',
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  actionText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#3b82f6',
    marginLeft: 8,
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1f2937',
    marginBottom: 16,
  },
  aboutText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#374151',
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillChip: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#374151',
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  experienceInfo: {
    flex: 1,
    marginLeft: 12,
  },
  jobTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 4,
  },
  jobCompany: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  jobMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobDuration: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9ca3af',
    marginLeft: 4,
  },
  jobLocation: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9ca3af',
    marginLeft: 4,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 2,
  },
  achievementDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  learningItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learningInfo: {
    flex: 1,
    marginLeft: 12,
  },
  learningTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 2,
  },
  learningProgress: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8b5cf6',
  },
});