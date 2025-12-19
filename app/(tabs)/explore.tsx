import { Link } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from '@/components/ui/text';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ExploreScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-4">
        <Text className="text-2xl font-bold text-foreground">发现中心</Text>
        <Text className="mt-1 text-muted-foreground">探索更多有趣的内容和功能</Text>
      </View>
      
      <View className="px-4 pt-4">
        <Card className="border border-border bg-card shadow-sm mb-4">
          <CardHeader>
            <CardTitle>新功能介绍</CardTitle>
            <CardDescription>了解我们最新推出的功能</CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="mb-4 text-muted-foreground">
              我们不断更新和完善口袋工具箱，为您带来更好的使用体验。
              请关注我们的更新日志，了解最新功能。
            </Text>
            <Button variant="outline" className="w-full h-12">
              <Text>查看更新日志</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
      
      <View className="px-4">
        <Card className="border border-border bg-card shadow-sm mb-4">
          <CardHeader>
            <CardTitle>使用技巧</CardTitle>
            <CardDescription>掌握工具箱的高效使用方法</CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="mb-4 text-muted-foreground">
              发现隐藏的使用技巧，让您的工作效率倍增。
              我们整理了常见问题解答和使用指南。
            </Text>
            <Button variant="outline" className="w-full h-12">
              <Text>查看使用指南</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
      
      <View className="px-4 pb-4">
        <Card className="border border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle>社区互动</CardTitle>
            <CardDescription>加入用户社区，分享经验</CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="mb-4 text-muted-foreground">
              与其他用户交流使用心得，分享创意和建议。
              您的意见对我们非常重要。
            </Text>
            <Button variant="outline" className="w-full h-12">
              <Text>加入社区讨论</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
