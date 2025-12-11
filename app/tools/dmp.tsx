import { View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


export default function DmpScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'DMP',
    });
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center gap-8 p-4">
      <Card>
        <CardContent className="gap-6">
          <View className="gap-3">
            <Button variant="outline">上班打卡</Button>
          </View>
          <View className="gap-3">
            <Button variant="outline">下班打卡</Button>
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