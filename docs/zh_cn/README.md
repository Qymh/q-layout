# q-layout

![](https://img.shields.io/circleci/build/github/Qymh/q-layout)
![](https://img.shields.io/codecov/c/github/Qymh/q-layout)
![](https://img.shields.io/npm/v/q-layout)
![](https://img.shields.io/npm/dw/q-layout)
![](https://img.shields.io/npm/l/q-layout)

[版本更新日志](https://github.com/Qymh/q-layout/blob/master/CHANGELOG.md)

## 下载

### yarn

```bash
yarn add q-layout
```

### npm

```bash
npm install q-layout
```

### cnpm

```bash
cpm install q-layout
```

## 引入

在入口文件引入`q-layout`

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout);
```

然后你就可以在任意位置使用`q-row`这个布局组件了

```html
<q-row>template</q-row>
```

## 为什么存在 q-layout

在我们平常的开发中,我们通过`html` `css`或者少部分的`javascript`来写页面布局

对于布局呢,首先我们会先写`html`,然后给元素命名一个类名,像这样`<div class="test"></div>`,当然也可以命名一个 id,但不论怎样,我们都得给元素定义一个标志

这种定义标志的方法有一个比较规范的叫[bem 命名准则](http://getbem.com/introduction/),但如果你是用的 vue 可能感触不会那么强烈,因为很少会样式冲突,因为 vue 中有一个[scoped css](https://vue-loader.vuejs.org/guide/scoped-css.html)的概念,这种命名就显得没那么必要

但如果你仔细研究过很多 vue ui 组件库你会发现,他们都用上了`bem`命名准则,因为这样看起来会很规范,但其实在我们的业务代码中,很少会这么规范,ui 组件库样式命名的标准更多的是为了让使用的开发者能够去在某些特定情况改变样式更方便,但在我们实际的业务开发中,意义却不大

其实这就是平常写样式的第一个问题,你需要绞尽脑汁的去想 class 名字,有时候想的太简单觉得不合适,有时候命名过于复杂也觉得太麻烦,其实这个是可以解决的,我们先把这个问题放一放

我们给元素定义了一个标志后,下一步就是去写样式了,同样的,写样式在`vue`中很方便,在一个文件里面写就行

像这样

```vue
<style scoped>
.test {
  color: blue;
}
</style>
```

但如果页面一旦复杂起来,就会有大量的元素和大量的样式

想象一下如果我们要改变页面的样式首先第一眼也不会直接去看代码,更多的可能是打开 chrome 开发者工具,然后找到对应的元素的类名,然后再去找到元素研究研究元素周围是啥样,接着去找 css 改

其实这就是第二个问题,不知道大家在项目开发中有没有体会过,在一个页面上千行或者组件层层嵌套时,寻找元素的成本过大

`q-layout`就是为了解决以上两个问题出现的,我们直接省去了`class`命名也省去了改样式的时候需要找到`css`,现在你只需要找到元素即可

举一个简单的例子

我们要写一个 div 盒子 它的高度为 100px

平常我们会这样写

```vue
<template>
  <div class="element">test</div>
</template>

<script>
export default {};
</script>

<style scoped>
.element {
  height: 100px;
}
</style>
```

但如果用上了`q-row`组件,你可以直接用`props`去书写样式

```vue
<template>
  <q-row h="100">test</q-row>
</template>

<script>
export default {};
</script>
```

以上代码会被转义为

```html
<div style="height:100.000px">test</div>
```

没有 class 名字也没有 css 样式,你不需要去花时间想 class 命名,也不需要去寻找 css 样式的位置,直接在元素上即可改变样式

当然我们提供的`props`不止有上面列子中的`h`, 还有很多`props`

## Props

我们通过[w3c standard classification](https://www.w3school.com.cn/cssref/index.asp)区分了 props

### 参数说明

以下的文档解释大概会长这样

| props   |  Type  |       Raw       | Default | TranslateType |
| ------- | :----: | :-------------: | :-----: | ------------: |
| bkColor | String | backgroundColor |   ''    |          pure |

#### props

与 `vue` 中的 `prop` 相同

#### type

与 `vue` 中的 `prop` 的类型`type`相同

#### raw

转化后的 css 属性

#### default

与`vue`中的`prop`的默认值`default`相同

#### translateType

css 转化类型

- default

通过设置的`css`比值和`css`单位进行转化

`css`比值默认是 1,`css`单位默认是`px`,你也可以通过[配置](#Install配置)去改变默认值

举个列子

```html
<q-row maxh="100">test</q-row>
```

转化公式为 `propValue/ratio + unit` 用 prop 的值除以比值`1`加上单位`px`,因为默认保留三位小数,所以结果为`100.000px`

```html
<div style="max-height:100.000px">test</div>
```

- pure

直接转换,prop 的值是啥结果就是啥

举个列子

```html
<q-row color="#000">test</q-row>
```

结果直接转化为

```html
<div style="color:#000">test</div>
```

- class

将 prop 值作为class名添加到 dom 上

举个列子

```html
<q-row dir="top">test</q-row>
```

转义的结果是

```html
<div class="q-layout-flexDirection-top">test</div>
```

然后我们内置提供了`flex`布局相关的 class 样式

```css
.q-layout-flexDirection-top {
  flex-direction: column;
}
```

- classPure

当 prop 值是布尔值的时候会启用`class`转换,当为其他值的时候会启用`pure`转换

举个列子 当值是布尔的时候

```html
<q-row border></q-row>
```

生成的 dom 会被添加 class 样式 `<div class="q-layout-border"></div>`

当值不是布尔的时候

```html
<q-row border="1px solid #666"></q-row>
```

转化后的 html 是

```html
<div style="border:1px solid #666"></div>
```

以下的便是内置的 props

### Background

| props      |  Type  |        Raw         | Default | TranslateType |
| ---------- | :----: | :----------------: | :-----: | ------------: |
| background | String |     background     |   ''    |          pure |
| bkColor    | String |  backgroundColor   |   ''    |          pure |
| bkPosition | String | backgroundPosition |   ''    |          pure |
| bkRepeat   | String |  backgroundRepeat  |   ''    |          pure |
| bkSize     | String |   backgroundSize   |   ''    |          pure |

### Border

| props        |      Type      |     Raw      | Default | TranslateType |
| ------------ | :------------: | :----------: | :-----: | ------------: |
| borderTop    | String Boolean |  borderTop   |   ''    |     classPure |
| borderRight  | String Boolean | borderRight  |   ''    |     classPure |
| borderBottom | String Boolean | borderBottom |   ''    |     classPure |
| borderLeft   | String Boolean |  borderLeft  |   ''    |     classPure |
| border       | String Boolean |    border    |   ''    |     classPure |
| radius       | Number String  | borderRadius |   ''    |       default |

#### Box

| props     |  Type  |    Raw    | Default | TranslateType |
| --------- | :----: | :-------: | :-----: | ------------: |
| overflow  | String | overflow  |   ''    |          pure |
| overflowX | String | overflowX |   ''    |          pure |
| overflowY | String | overflowY |   ''    |          pure |

### Color

| props   |     Type      |   Raw   | Default | TranslateType |
| ------- | :-----------: | :-----: | :-----: | ------------: |
| opacity | String Number | opacity |   ''    |          pure |

### Dimension

| props |     Type      |    Raw    | Default | TranslateType |
| ----- | :-----------: | :-------: | :-----: | ------------: |
| h     | String Number |  height   |   ''    |       default |
| maxh  | String Number | maxHeight |   ''    |       default |
| minh  | String Number | minHeight |   ''    |       default |
| w     | String Number |   width   |   ''    |       default |
| maxw  | String Number | maxWidth  |   ''    |       default |
| minw  | String Number | minWidth  |   ''    |       default |

### Flex

| props   |  Type   |      Raw       | Default | TranslateType |                                           Description |
| ------- | :-----: | :------------: | :-----: | :-----------: | ----------------------------------------------------: |
| dir     | String  | flexDirection  |   ''    |     class     |                                 top right bottom left |
| justify | String  | justifyContent |   ''    |     class     | flex-start flex-end center space-between space-around |
| align   | String  |   alignItems   |   ''    |     class     |           flex-start flex-end center baseline stretch |
| flex    | String  |      flex      |   ''    |     class     |                                                  1-10 |
| center  | Boolean |       ''       |   ''    |     class     |                         justify=center & align=center |

### FontSize

| props      |  Type  |    Raw     | Default | TranslateType |
| ---------- | :----: | :--------: | :-----: | ------------: |
| fontSize   | String |  fontSize  |   ''    |       default |
| fontWeight | String | fontWeight |   ''    |          pure |

### Margin

| props  |     Type      |     Raw      | Default | TranslateType |
| ------ | :-----------: | :----------: | :-----: | ------------: |
| margin | String Number |    margin    |   ''    |       default |
| mt     | String Number |  marginTop   |   ''    |       default |
| mr     | String Number | marginRight  |   ''    |       default |
| mb     | String Number | marginBottom |   ''    |       default |
| ml     | String Number |  marginLeft  |   ''    |       default |

### Padding

| props   |     Type      |      Raw      | Default | TranslateType |
| ------- | :-----------: | :-----------: | :-----: | ------------: |
| padding | String Number |    padding    |   ''    |       default |
| pt      | String Number |  paddingTop   |   ''    |       default |
| pr      | String Number | paddingRight  |   ''    |       default |
| pb      | String Number | paddingBottom |   ''    |       default |
| pl      | String Number |  paddingLeft  |   ''    |       default |

### Position

| props      |     Type      |      Raw      | Default | TranslateType |
| ---------- | :-----------: | :-----------: | :-----: | ------------: |
| position   |    String     |   position    |   ''    |          pure |
| t          | String Number |      top      |   ''    |       default |
| r          | String Number |     right     |   ''    |       default |
| b          | String Number |    bottom     |   ''    |       default |
| l          | String Number |     left      |   ''    |       default |
| display    |    String     |    display    |   ''    |          pure |
| float      |    String     |     float     |   ''    |          pure |
| cursor     |    String     |    cursor     |   ''    |          pure |
| va         |    String     | verticalAlign |   ''    |          pure |
| zIndex     |    String     |    zIndex     |   ''    |          pure |
| visibility |    String     |  visibility   |   ''    |          pure |

### Text

| props         |  Type  |      Raw      | Default | TranslateType |
| ------------- | :----: | :-----------: | :-----: | ------------: |
| color         | String |     color     |   ''    |          pure |
| lh            | String |  lineHeight   |   ''    |       default |
| indent        | String |  textIndent   |   ''    |       default |
| letterSpacing | String | letterSpacing |   ''    |       default |
| wordSpacing   | String |  wordSpacing  |   ''    |       default |
| textAlign     | String |   textAlign   |   ''    |          pure |
| whiteSpace    | String |  whiteSpace   |   ''    |          pure |
| wordBreak     | String |   wordBreak   |   ''    |          pure |

### User

| props |  Type  |    Raw    | Default | TranslateType |
| ----- | :----: | :-------: | :-----: | ------------: |
| box   | String | boxSizing |   ''    |          pure |

## Install 配置

| Options     |  Type  | Required | Default |             Description |
| ----------- | :----: | :------: | :-----: | ----------------------: |
| unit        | String |  false   |   px    |                css unit |
| ratio       | String |  false   |    1    |               css ratio |
| decimals    | String |  false   |    3    | reserved decimal places |
| collections | Object |  false   |   {}    |     custom css property |

- unit

css 单位可以是`px` `rem` `vw`或者其他值,默认是`px`

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  unit: 'vw'
});
```

```html
<q-row h="100"></q-row>
```

生成的结果为

```html
<div style="height:100.000vw"></div>
```

- ratio

prop 值和真实值的转化比,默认是 1

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  unit: 'vw',
  ratio: 7.5
});
```

```html
<q-row h="100"></q-row>
```

100/7.5 = 13.333 保留三位小数 生成的结果会是

```html
<div style="height:13.333vw"></div>
```

- decimals

计算值的保留小数位数

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  unit: 'vw',
  ratio: 7.5,
  decimals: 2
});
```

```html
<q-row h="100"></q-row>
```

生成的结果会是

```html
<div style="height:13.33vw"></div>
```

- collections

我们提供了很多默认的[Props](#Props),但如果  你想自定义更多的 props 可以使用`collections`

### 保留原本属性

以下的配置会保留原有的属性

#### alias

你可以通过`alias`设置一个现有属性的别名

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  collections: {
    h: {
      alias: 'height'
    }
  }
});
```

```html
<q-row height="100"></q-row>
```

此时 `h`和`height`都可以转化为

```html
<div style="height:100.000px"></div>
```

#### coverage

你可以通过`coverage`去覆盖一个原有属性

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  collections: {
    h: {
      coverage: 'height'
    }
  }
});
```

```html
<q-row height="100"></q-row>
```

现在只有`height`会被转义为

```html
<div style="height:100.000px"></div>
```

### 新属性

如果你需要添加一个新的属性可以用 `raw` `type` `default` `pure` `class` `classPure` 这几个配置

#### raw

转化后的 css 属性 **必填**

#### type

props 的类型 **必填**

#### default

props 的默认值 **必填**

#### raw&type&default

与[translateType 中 default](#translateType)一样

> 我们默认已经提供了集合 `maxh` 和 `maxHeight`, 这里只是举个例子

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  collections: {
    maxh: {
      raw: 'maxHeight',
      type: [String, Number],
      default: ''
    }
  }
});
```

```html
<q-row maxh="100"></q-row>
```

转义后的 html 会是这样

```html
<div style="max-height:100.000px"></div>
```

如果 maxh 是一个数字,转义后会变成百分比

```html
<q-row :maxh="10"></q-row>
```

```html
<div style="max-height:10%"></div>
```

#### pure

与[translateType 中 pure](#translateType)一样

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  collections: {
    family: {
      raw: 'fontFamily',
      type: String,
      default: '',
      pure: ture
    }
  }
});
```

```html
<q-row family="monospace"></q-row>
```

转义后为

```html
<div style="font-family:monospace"></div>
```

#### class

与[translateType 中 class](#translateType)一样

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  collections: {
    diyClass: {
      raw: 'rawDiyClass',
      type: String,
      default: '',
      class: ture
    }
  }
});
```

```html
<q-row diyClass="test"></q-row>
```

转义后为

```html
<div class="q-layout-rawDiyClass-test"></div>
```

#### classPure

与[translateType 中 classPure](#translateType)一样

> 我们提供了默认的`border`集合,这里只是举一个列子

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout, {
  collections: {
    border: {
      raw: 'border',
      type: [Boolean, String],
      default: '',
      pureClass: ture
    }
  }
});
```

当属性值是布尔时

```html
<q-row border></q-row>
```

会被转义为

```html
<div class="q-layout-border"></div>
```

当属性值是字符时

```html
<q-row border="1px solid #666"></q-row>
```

转义为

```html
<div style="border:1px solid #666"></div>
```

##  代码提示

我们用`vetur`实现代码提示,所有[内置的 props](#Props)被包含在了代码提示中

如果你通过[配置](#Install配置)设置了其他自定义属性,你就需要通过`vetur`去自定义属性的代码提示,[这里](https://vuejs.github.io/vetur/framework.html#custom-tags-attributes)有`vetur`的提示使用文档,[这里](https://github.com/Qymh/q-layout/blob/master/vetur/attributes.json)有我们默认的配置
