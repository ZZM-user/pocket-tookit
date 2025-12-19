import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from 'nativewind';
import { HomeIcon, Telescope, Wrench } from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';
import { NAV_THEME } from '@/lib/theme';


export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: NAV_THEME[colorScheme ?? 'light'].colors.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? 'hsl(0 0% 3.9%)' : 'hsl(0 0% 100%)',
          borderTopColor: colorScheme === 'dark' ? 'hsl(0 0% 14.9%)' : 'hsl(0 0% 89.8%)',
          paddingBottom: 4,
          paddingTop: 4,
          height: 60,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              as={HomeIcon} 
              color={color} 
              size={focused ? 26 : 24} 
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tool"
        options={{
          title: '工具',
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              as={Wrench} 
              color={color} 
              size={focused ? 26 : 24} 
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '发现',
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              as={Telescope} 
              color={color} 
              size={focused ? 26 : 24} 
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
    </Tabs>
  );
}
