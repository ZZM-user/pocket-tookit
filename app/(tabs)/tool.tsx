import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollView, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';


export default function ToolScreen() {
  const [value, setValue] = React.useState('feedback');

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-4">
        <Text className="text-2xl font-bold text-foreground">工具中心</Text>
        <Text className="mt-1 text-muted-foreground">实用工具和反馈收集</Text>
      </View>
      
      <View className="px-4 pt-4">
        <Tabs value={value} onValueChange={setValue} className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-2 bg-muted">
            <TabsTrigger 
              value="feedback" 
              className="data-[state=active]:bg-background data-[state=active]:text-foreground py-3"
            >
              <Text>意见反馈</Text>
            </TabsTrigger>
            <TabsTrigger 
              value="survey" 
              className="data-[state=active]:bg-background data-[state=active]:text-foreground py-3"
            >
              <Text>问卷调查</Text>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feedback" className="mt-0">
            <Card className="border border-border bg-card shadow-sm">
              <CardHeader>
                <CardTitle>意见反馈</CardTitle>
                <CardDescription>
                  欢迎分享您的想法和建议，帮助我们改进产品。
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-6">
                <View className="gap-4">
                  <View className="gap-2">
                    <Label htmlFor="tabs-demo-name" className="text-foreground">姓名</Label>
                    <Input 
                      id="tabs-demo-name" 
                      placeholder="请输入您的姓名" 
                      className="border border-input bg-background h-12"
                    />
                  </View>
                  <View className="gap-2">
                    <Label htmlFor="tabs-demo-message" className="text-foreground">反馈内容</Label>
                    <Input 
                      id="tabs-demo-message" 
                      placeholder="请输入您的反馈意见" 
                      className="border border-input bg-background h-12"
                    />
                  </View>
                </View>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12">
                  <Text>提交反馈</Text>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="survey" className="mt-0">
            <Card className="border border-border bg-card shadow-sm">
              <CardHeader>
                <CardTitle>问卷调查</CardTitle>
                <CardDescription>
                  参与我们的问卷调查，帮助我们更好地了解用户需求。
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-6">
                <View className="gap-4">
                  <View className="gap-2">
                    <Label htmlFor="tabs-demo-job-title" className="text-foreground">职位</Label>
                    <Input 
                      id="tabs-demo-job-title" 
                      placeholder="请输入您的职位" 
                      className="border border-input bg-background h-12"
                    />
                  </View>
                  <View className="gap-2">
                    <Label htmlFor="tabs-demo-favorite" className="text-foreground">最喜欢的功能</Label>
                    <Input 
                      id="tabs-demo-favorite" 
                      placeholder="请输入您最喜欢的功能" 
                      className="border border-input bg-background h-12"
                    />
                  </View>
                </View>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12">
                  <Text>提交问卷</Text>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </View>
    </ScrollView>
  );
}
