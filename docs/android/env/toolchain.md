# 工具链配置

安卓主要使用java和kotlin语言，这两种语言是jvm系语言，需要Java运行时支持，所以需要jdk。  

1. 安装jdk 配置环境变量

2. 安装android studio IDE

3. 在android studio里配置android sdk

4. 设置android studio
::: warning
windows控制台乱码问题  
需要在Help中的edit custom settings中加上一行  
`-Dfile.encoding=UTF-8`
:::

5. 配置安卓相关环境变量

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
