import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  // 容器样式
  container: {
    flex: 1,
  },
  
  // 页面标题样式
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  // 页面副标题样式
  pageSubtitle: {
    fontSize: 16,
    marginTop: 4,
  },
  
  // 卡片容器样式
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  
  // 按钮样式
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 文本样式
  text: {
    fontSize: 16,
  },
  
  // 标题文本样式
  titleText: {
    fontSize: 18,
    fontWeight: '600',
  },
  
  // 描述文本样式
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
  },
});