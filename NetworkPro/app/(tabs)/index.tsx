import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Heart, MessageCircle, Share2, MoveHorizontal as MoreHorizontal, Send, X } from 'lucide-react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'support', time: '10:30 AM' },
    { id: 2, text: 'Hi, I need help with my profile setup', sender: 'user', time: '10:32 AM' },
    { id: 3, text: 'I\'d be happy to help you with that! What specific part of your profile would you like assistance with?', sender: 'support', time: '10:33 AM' }
  ]);

  const posts = [
    {
      id: 1,
      author: 'Victoria Simpson',
      time: '4h',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Great insights on leadership in this article',
      title: 'Effective Leadership Strategies',
      subtitle: 'A quick 5 things that start impacting your thinking of any sort',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      likes: 42,
      comments: 8,
      shares: 5
    },
    {
      id: 2,
      author: 'Victoria Simpson',
      time: '6h',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Another great post about professional development',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      likes: 28,
      comments: 12,
      shares: 3
    }
  ];

  const sendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatMessage('');
      
      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages.length + 2,
          text: 'Thanks for your message! Our team will get back to you shortly.',
          sender: 'support',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, supportResponse]);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.searchButton}>
            <Search size={20} color="#6b7280" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.createPostButton}>
            <Text style={styles.createPostText}>Start a post</Text>
          </TouchableOpacity>
          
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>📷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🎥</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>📅</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Posts Feed */}
        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
              <View style={styles.postHeaderInfo}>
                <Text style={styles.postAuthor}>{post.author}</Text>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
              <TouchableOpacity style={styles.moreButton}>
                <MoreHorizontal size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.postContent}>{post.content}</Text>
            
            {post.title && (
              <View style={styles.articlePreview}>
                <Text style={styles.articleTitle}>{post.title}</Text>
                {post.subtitle && (
                  <Text style={styles.articleSubtitle}>{post.subtitle}</Text>
                )}
              </View>
            )}
            
            {post.image && (
              <Image source={{ uri: post.image }} style={styles.postImage} />
            )}
            
            <View style={styles.postEngagement}>
              <Text style={styles.engagementText}>
                👍 {post.likes} • 💬 {post.comments} comments • ↗ {post.shares} shares
              </Text>
            </View>
            
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>👍</Text>
                <Text style={styles.actionText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>↗</Text>
                <Text style={styles.actionText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Network Stats */}
      <View style={styles.bottomStats}>
        <TouchableOpacity style={styles.searchFooter}>
          <Search size={20} color="#8B1538" />
        </TouchableOpacity>
        
        <View style={styles.networkStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>560</Text>
            <Text style={styles.statLabel}>Connections</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>840</Text>
            <Text style={styles.statLabel}>Contacts</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.manageNetworkButton}>
          <Text style={styles.manageNetworkText}>Manage my network</Text>
        </TouchableOpacity>
      </View>

      {/* Live Chat Button */}
      <TouchableOpacity 
        style={styles.chatButton}
        onPress={() => setShowChat(true)}
      >
        <MessageCircle size={24} color="#ffffff" />
      </TouchableOpacity>

      {/* Live Chat Modal */}
      <Modal
        visible={showChat}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={styles.chatContainer}>
          <View style={styles.chatHeader}>
            <Text style={styles.chatTitle}>Live Support</Text>
            <TouchableOpacity 
              style={styles.chatCloseButton}
              onPress={() => setShowChat(false)}
            >
              <X size={24} color="#6b7280" />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.chatMessages}>
            {chatMessages.map((message) => (
              <View 
                key={message.id} 
                style={[
                  styles.messageContainer,
                  message.sender === 'user' ? styles.userMessage : styles.supportMessage
                ]}
              >
                <Text style={[
                  styles.messageText,
                  message.sender === 'user' ? styles.userMessageText : styles.supportMessageText
                ]}>
                  {message.text}
                </Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
            ))}
          </ScrollView>
          
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.chatInputContainer}
          >
            <TextInput
              style={styles.chatInput}
              placeholder="Type your message..."
              value={chatMessage}
              onChangeText={setChatMessage}
              multiline
            />
            <TouchableOpacity 
              style={styles.sendButton}
              onPress={sendMessage}
            >
              <Send size={20} color="#ffffff" />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    padding: 8,
    marginRight: 12,
  },
  createPostButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  createPostText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 4,
  },
  iconText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  postCard: {
    backgroundColor: '#ffffff',
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  postAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  postHeaderInfo: {
    flex: 1,
  },
  postAuthor: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
  },
  postTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 2,
  },
  moreButton: {
    padding: 8,
  },
  postContent: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 12,
  },
  articlePreview: {
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  articleTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 4,
  },
  articleSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  postEngagement: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    marginBottom: 8,
  },
  engagementText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6b7280',
  },
  postActions: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  actionIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  actionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6b7280',
  },
  bottomStats: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  searchFooter: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  networkStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1f2937',
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  manageNetworkButton: {
    alignItems: 'center',
  },
  manageNetworkText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#8B1538',
  },
  // Chat Styles
  chatButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#8B1538',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  chatTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1f2937',
  },
  chatCloseButton: {
    padding: 8,
  },
  chatMessages: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8B1538',
    borderRadius: 18,
    borderBottomRightRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  supportMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f3f4f6',
    borderRadius: 18,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#ffffff',
  },
  supportMessageText: {
    color: '#1f2937',
  },
  messageTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 4,
    textAlign: 'right',
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#8B1538',
    justifyContent: 'center',
    alignItems: 'center',
  },
});