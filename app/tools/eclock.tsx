import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';


export default function EclockScreen() {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');

  const navigation = useNavigation();

  // API call function
  const fetchClockIn = async (token: string) => {
    const apiUrl = 'http://localhost:5001/api/v1/clockIn';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Clock-in API error:', error);
      // Handle network errors (like CORS, connection issues, etc.)
      if (error instanceof TypeError) {
        return { success: false, error: '网络连接错误，请检查服务是否运行' };
      }
      return { success: false, error: error.message };
    }
  };

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
            <Input
              placeholder="token"
              value={token}
              onChangeText={setToken}
            />
          </View>
          <View className="gap-3">
            <Button
              variant="outline"
              disabled={isLoading}
              onPress={async () => {
                if (!token.trim()) {
                  setResult('请输入有效的token');
                  return;
                }

                setIsLoading(true);
                setResult(''); // Clear previous result

                const { success, data, error } = await fetchClockIn(token);

                if (success) {
                  setResult(`打卡成功: ${JSON.stringify(data)}`);
                } else {
                  setResult(`打卡失败: ${error || '未知错误'}`);
                }

                setIsLoading(false);
              }}
            >
              {isLoading ? '提交中...' : '提交打卡'}
            </Button>
          </View>
          <View className="gap-3">
            <Text>打卡结果</Text>
          </View>
          <View className="gap-3">
            <Text className="text-sm text-gray-600">{result}</Text>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}