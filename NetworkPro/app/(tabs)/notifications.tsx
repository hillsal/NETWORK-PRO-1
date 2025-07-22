import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Settings, 
  UserPlus, 
  Heart, 
  MessageCircle, 
  Briefcase,
  Calendar,
  Trophy,
  Bell
} from 'lucide-react-native';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      type: 'connection',
      title: 'New Connection Request',
      message: 'Sarah Johnson wants to connect with you',
      time: '5 minutes ago',
      unread: true,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      icon: UserPlus,
      iconColor: '#3b82f6'
    },
    {
      id: 2,
      type: 'like',
      title: 'Post Interaction',
      message: 'Michael Chen and 5 others liked your post',
      time: '1 hour ago',
      unread: true,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      icon: Heart,
      iconColor: '#ef4444'
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message',
      message: 'Emma Wilson sent you a message',
      time: '2 hours ago',
      unread: false,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      icon: MessageCircle,
      iconColor: '#10b981'
    },
    {
      id: 4,
      type: 'opportunity',
      title: 'Job Opportunity',
      message: 'New job match: Senior Developer at TechCorp',
      time: '4 hours ago',
      unread: false,
      avatar: null,
      icon: Briefcase,
      iconColor: '#f59e0b'
    },
    {
      id: 5,
      type: 'event',
      title: 'Event Reminder',
      message: 'Tech Networking Event starts in 1 hour',
      time: '1 day ago',
      unread: false,
      avatar: null,
      icon: Calendar,
      iconColor: '#8b5cf6'
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Achievement Unlocked',
      message: 'You reached 1000 connections milestone!',
      time: '2 days ago',
      unread: false,
      avatar: null,
      icon: Trophy,
      iconColor: '#fbbf24'
    }
  ];

  const renderNotificationIcon = (notification: any) => {
    const IconComponent = notification.icon;
    
    if (notification.avatar) {
      return (
        <View style={styles.avatarContainer}>
          <Image source={{ uri: notification.avatar }} style={styles.notificationAvatar} />
          <View style={[styles.iconBadge, { backgroundColor: notification.iconColor }]}>
            <IconComponent size={12} color="#ffffff" />
          </View>
        </View>
      );
    }
    
    return (
      <View style={[styles.iconContainer, { backgroundColor: notification.iconColor }]}>
        <IconComponent size={20} color="#ffffff" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterTabs}>
        <TouchableOpacity style={[styles.filterTab, styles.filterTabActive]}>
          <Text style={[styles.filterTabText, styles.filterTabTextActive]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterTabText}>Connections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterTabText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterTabText}>Jobs</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {notifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            style={[
              styles.notificationItem,
              notification.unread && styles.unreadItem
            ]}
          >
            <View style={styles.notificationLeft}>
              {renderNotificationIcon(notification)}
              
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </View>

            {notification.unread && <View style={styles.unreadIndicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Mark All as Read */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.markAllButton}>
          <Bell size={16} color="#6b7280" />
          <Text style={styles.markAllText}>Mark all as read</Text>
        </TouchableOpacity>
      </View>
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
  settingsButton: {
    padding: 8,
  },
  filterTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  filterTabActive: {
    backgroundColor: '#3b82f6',
  },
  filterTabText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6b7280',
  },
  filterTabTextActive: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  unreadItem: {
    backgroundColor: '#fef3c7',
  },
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  notificationAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  iconBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 2,
  },
  notificationMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
    lineHeight: 20,
  },
  notificationTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9ca3af',
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3b82f6',
  },
  bottomActions: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  markAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  markAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
  },
});