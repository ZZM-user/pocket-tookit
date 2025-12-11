import { View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';


export default function EclockScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: '鹅打卡',
    });
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center gap-8 p-4">
      <Card>
        <CardContent className="gap-6">
          <View className="gap-3">
            <Text>填写token</Text>
          </View>
          <View className="gap-3">
            <Input placeholder="token" />
          </View>
          <View className="gap-3">
            <Button variant="outline">提交打卡</Button>
          </View>
          <View className="gap-3">
            <Text>打卡结果</Text>
          </View>
          <View className="gap-3">
            <Text></Text>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}