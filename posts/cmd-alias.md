---
  title: 'windows的cmd中愉快的使用alias'
  date: '2020-04-01'
---


## windows上在`cmd`中设置`alias`

**最近在使用`pnpm`总感觉输入`p,n,p,m`不是很习惯.于是萌生在自己windows上设置`alias`**

查阅了`Microsoft`的[文档](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/doskey)找到了`doskey`,使用`doskey`就可以创建常用的`alias`.

### bat文件

首先新建一个`.bat`文件,写入需要设置的`alias`.

以`doskey`开头,然后是`alias`,等号后面是实际的命令.

```

@REM  $* 表示这个命令可能会有参数
@REM  @doskey表示执行这个命令时,不显示这条命令本身

@REM pnpm相关

@doskey ls=dir /b $*
@doskey p=pnpm 
```

### 在注册表中添加这个bat文件

`win + R`然后输入`regedit`进入注册表,按照`HKEY_CURRENT_USER\Software\Microsoft\Command Processor\AutoRun`这个路径进行查找

如果没有`AutoRun`这个选项,可以右键`Command Processor`然后新建-->字符串值-->输入`AutoRun`.然后右键修改这个新建的`AutoRun`.数值数据中输入之前创建的`.bat`文件的路径进去.

我的是把`bat`文件放到了用户目录下.然后直接使用系统变量`%USERPROFILE%\fastkey.bat`.

![alias.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b9b18a0cf454aa8bafcfd495b018767~tplv-k3u1fbpfcp-watermark.image?)
> 如果觉得打开注册表太麻烦的话, 还有一种方式.

**创建REG文件**

比如创建文件`alias.reg`,然后输入以下内容.

`AutoRun`的值是`.bat`文件的路径.

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Microsoft\Command Processor]
"AutoRun"="%USERPROFILE%\fastkey.bat"
```

然后双击运行这个`REG`文件就会自动添加到注册表中.

### 最后打开cmd验证

输入`ls`命令.就会看到和`dir`一样的效果.
