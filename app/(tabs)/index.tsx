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
import { FlatList, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'expo-router';

const ztListData = [
  {
    id: 1,
    title: '鹅打卡',
    description: '...',
    pageUrl: '/tools/eclock',
  },
  {
    id: 2,
    title: 'DMP打卡',
    description: '...',
    pageUrl: '/tools/dmp',
  },
];

export default function IndexScreen() {

  return (
    <View className="m-auto flex w-full max-w-sm flex-col gap-6">
      <Accordion type="single" collapsible className="w-full max-w-lg" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>Zenith</Text>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <FlatList
              data={ztListData}
              renderItem={({ item }) => (
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <Text>{item.description}</Text>
                    <Button variant="outline">
                      <Link href={item.pageUrl}>
                        <Text>点击前往</Text>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}
