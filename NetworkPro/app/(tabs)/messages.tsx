import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, CreditCard as Edit3, MoveHorizontal as MoreHorizontal, Circle } from 'lucide-react-native';

export default function MessagesScreen() {
  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'Thanks for connecting! Looking forward to...',
      time: '2m ago',
      unread: true,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      online: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      lastMessage: 'The project timeline looks good. Can we...',
      time: '1h ago',
      unread: false,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      online: true
    },
    {
      id: 3,
      name: 'Emma Wilson',
      lastMessage: 'I reviewed your portfolio and it\'s amazing!',
      time: '3h ago',
      unread: true,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      online: false
    },
    {
      id: 4,
      name: 'David Kim',
      lastMessage: 'Let\'s schedule a call for tomorrow',
      time: '1d ago',
      unread: false,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      online: false
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      lastMessage: 'Great meeting you at the conference!',
      time: '2d ago',
      unread: false,
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      online: true
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.composeButton}>
          <Edit3 size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#9ca3af" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations..."
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {conversations.map((conversation) => (
          <TouchableOpacity key={conversation.id} style={styles.conversationItem}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: conversation.avatar }} 
                style={styles.avatar}
              />
              {conversation.online && <View style={styles.onlineIndicator} />}
            </View>
            
            <View style={styles.conversationInfo}>
              <View style={styles.conversationHeader}>
                <Text style={styles.conversationName}>{conversation.name}</Text>
                <Text style={styles.conversationTime}>{conversation.time}</Text>
              </View>
              <View style={styles.messageRow}>
                <Text 
                  style={[
                    styles.lastMessage,
                    conversation.unread && styles.unreadMessage
                  ]}
                  numberOfLines={1}
                >
                  {conversation.lastMessage}
                </Text>
                {conversation.unread && <View style={styles.unreadDot} />}
              </View>
            </View>

            <TouchableOpacity style={styles.moreButton}>
              <MoreHorizontal size={20} color="#9ca3af" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickActionItem}>
          <View style={styles.quickActionIcon}>
            <Text style={styles.quickActionEmoji}>👥</Text>
          </View>
          <Text style={styles.quickActionText}>Groups</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.quickActionItem}>
          <View style={styles.quickActionIcon}>
            <Text style={styles.quickActionEmoji}>📧</Text>
          </View>
          <Text style={styles.quickActionText}>Invites</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.quickActionItem}>
          <View style={styles.quickActionIcon}>
            <Text style={styles.quickActionEmoji}>⭐</Text>
          </View>
          <Text style={styles.quickActionText}>Starred</Text>
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
  composeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1f2937',
    marginLeft: 12,
  },
  content: {
    flex: 1,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#10b981',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  conversationInfo: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  conversationName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
  },
  conversationTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9ca3af',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
    flex: 1,
  },
  unreadMessage: {
    fontFamily: 'Inter-SemiBold',
    color: '#1f2937',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3b82f6',
    marginLeft: 8,
  },
  moreButton: {
    padding: 8,
    marginLeft: 8,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionEmoji: {
    fontSize: 20,
  },
  quickActionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#6b7280',
  },
});