import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FlatList, ScrollView, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';

const ztListData = [
  {
    id: 1,
    title: '鹅打卡',
    description: '日常打卡工具，帮助记录工作时间',
    pageUrl: '/tools/eclock',
  },
  {
    id: 2,
    title: 'DMP打卡',
    description: '数据管理平台打卡工具',
    pageUrl: '/tools/dmp',
  },
];

export default function IndexScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-4">
        <Text className="text-2xl font-bold text-foreground">口袋工具箱</Text>
        <Text className="mt-1 text-muted-foreground">便捷实用的小工具集合</Text>
      </View>
      
      <View className="px-4 pt-4">
        <Text className="mb-3 text-lg font-semibold text-foreground">常用工具</Text>
        <FlatList
          data={ztListData}
          renderItem={({ item }) => (
            <Card className="mb-4 flex flex-col border border-border bg-card shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button className="w-full h-12" variant="outline" asChild>
                  <Link href={item.pageUrl}>
                    <Text>立即使用</Text>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      
      <View className="px-4 pt-4 pb-4">
        <Text className="mb-3 text-lg font-semibold text-foreground">功能介绍</Text>
        <Card className="border border-border bg-card shadow-sm">
          <CardContent className="py-4">
            <Text className="text-muted-foreground">
              口袋工具箱是一个轻量级工具集合，包含日常工作生活中常用的各类小工具，
              帮助您提高效率，简化操作。
            </Text>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
