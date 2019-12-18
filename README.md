# q-layout

![](https://img.shields.io/circleci/build/github/Qymh/q-layout)
![](https://img.shields.io/codecov/c/github/Qymh/q-layout)
![](https://img.shields.io/npm/v/q-layout)
![](https://img.shields.io/npm/dw/q-layout)
![](https://img.shields.io/npm/l/q-layout)

[CHANGELOG](https://github.com/Qymh/q-layout/blob/master/CHANGELOG.md)

[中文文档](https://github.com/Qymh/q-layout/blob/master/docs/zh_cn/README.md)

## Download

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

## Import

import `q-layout` in the entry file

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout);
```

And then you can use the layout component which call `q-row` anywhere

```html
<q-row>template</q-row>
```

## Why q-layout exists

As The description of this repository, this is a component which can improve your efficiency in coding layouts of a webpage

In the usual development, we build the layout of a webpage by `html` `css` or a littile bit `javascript`, `javascript` will only be using more in some logics of codes but not the layout

During coding the layout of a webpage, we will code html first and name a className for an element, just like `<div class="test"></div>`,
or naming it by an id, but whatever you should define a sign for an element.

And there is a rule in naming the className for elements which call [bem](http://getbem.com/introduction/), but if you are using `vue`, it will be not necessary because vue has a [scoped css](https://vue-loader.vuejs.org/guide/scoped-css.html) concept

But you can check that some vue ui components also use the `bem` naming rule, because it will be much more standard.

This is the first problem, Don't you find there is troublesome to name an element in business codes ?

**You may need to cudgele your brains to name an element by classNames**

After you define a sign for an element, you need to code `css` for it, code `css` in `vue` is easy too.

just like this

```vue
<style scoped>
.test {
  color: blue;
}
</style>
```

But when the page's business is complex, there will be a a lot of elements and a lot of classeNames, usualy we checked the layout of the page will not direct check the code, we will check it by using chrome's tool, and then if we may change the style we should find the sign of the element first and then can change the element's css.

It will be not necessary,Image that, if you code css in html, Won't you cut down a step to change css

for example

There is an element which height is 100px

The usual way to code it is like this

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

We take full advantage of vue's feature, you can write css by using props

```vue
<template>
  <q-row h="100">test</q-row>
</template>

<script>
export default {};
</script>
```

It will be translated the same as the usual way

```html
<div style="height:100.000px">test</div>
```

**No Style** and **no Classnames**, you don't need to cudgele your brains to think the naming of the className, and you don't need to find the position to change css,you will only need to find the element

And we provide many props to code the layout not only `h`

## Props

We separate css properties by [w3c standard classification](https://www.w3school.com.cn/cssref/index.asp)

### Options Explanation

The following documentation just like this

| props   |  Type  |       Raw       | Default | TranslateType |
| ------- | :----: | :-------------: | :-----: | ------------: |
| bkColor | String | backgroundColor |   ''    |          pure |

before we check the documentation for props we need know some explanations

#### props

the same as vue props

#### type

the same as vue prop's type

#### raw

the original css property

#### default

the same as vue prop's default value

#### translateType

different properties have different translatable result

- default

to translate property by using the settings's `unit` and `ratio`

The default unit is `px` and the default ratio is `1`

you can change that by the [config](InstallOptions).

for example

```html
<q-row maxh="100">test</q-row>
```

the result is

```html
<div style="maxHeight:100.000px">test</div>
```

- pure

To direct translating property

for example

```html
<q-row color="#000">test</q-row>
```

the result is

```html
<div style="color:#000">test</div>
```

- class

Translate property by setting classNames not styles

for example

```html
<q-row dir="top">test</q-row>
```

the result is

```html
<div class="q-layout-flexDirection-top">test</div>
```

and we have built-in class

```css
.q-layout-flexDirection-top {
  flex-direction: column;
}
```

- classPure

If property is a boolean will enable `class` if not will enable `pure`

for example

if property is a boolean

```html
<q-row border></q-row>
```

The above generative result will be `<div class="q-layout-border"></div>`

if property is a string

```html
<q-row border="1px solid #666"></q-row>
```

The above generative result will be `border:1px solid #666` and will not set a className

The following are built-in props

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

## InstallOptions

| Options     |  Type  | Required | Default |             Description |
| ----------- | :----: | :------: | :-----: | ----------------------: |
| unit        | String |  false   |   px    |                css unit |
| ratio       | String |  false   |    1    |               css ratio |
| decimals    | String |  false   |    3    | reserved decimal places |
| collections | Object |  false   |   {}    |     custom css property |

- unit

css unit which can be `px` `rem` `vw` or more, default value is `px`

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

The above generative result will be `height:100.000vw`

- ratio

The ratio between the practical value and the setting value, default value is 1

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

The above generative result will be `height:13.333vw`, because `100/7.5 = 13.333`

- decimals

The computing value's reserved decimal, default value is 3

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

The above generative result will be `height:13.33vw`

- collections

[We provide many props that can satisfy many demands](#Props), but if you want to add some custom css property or change default css property you can use collections

collections has some configurations

### Keep Original Property

The following configurations can change property based on the original property

#### alias

you can set an alias name for a property which is existing

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

so `h` and `height` can both translate to `height:100.000px`

#### coverage

if you don't need the original property you can use this to coverage the old property

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

now only `height` can be translated, the property `h` has been removed

### New Property

If you need to configurate some custom properties you can use following configurations `raw` `type` `default` `pure` `class` `classPure`

#### raw

The original css property, which is **required**

#### type

The property's type

> The same as the prop's type in vue, which is **required**

#### default

The property's default value

> The same as the prop's default value in vue, which is **required**

#### raw&type&default

To translate property by using settings `unit` and `ratio`

> wo have collections `maxh` for `maxHeight`, we only give an example here

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

The above generative result will be `max-height:100.000px`

And if maxh is a number,it will translate into percent

```html
<q-row :maxh="10"></q-row>
```

The above generative result will be `max-height:10%`

#### pure

To direct translating property if the value is true, default is **false**

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

The above generative result will be `font-family:monospace`

#### class

Translate property by setting classNames not styles, default is **false**

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

The above generative result will be `<div class="q-layout-rawDiyClass-test"></div>`

#### classPure

If property is a boolean will enable `class` if not will enable `pure`, default is **false**

> wo have collections `border` for `border`, we only give an example here

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

if property is a boolean

```html
<q-row border></q-row>
```

The above generative result will be `<div class="q-layout-border"></div>`

if property is a string

```html
<q-row border="1px solid #666"></q-row>
```

The above generative result will be `border:1px solid #666` and will not set a className

## Code Hints

We using `vetur` to provide code hints. The [above props](#Props) are all including in the configuration.

If you have set custom property by using [alias coverage or custom property](#InstallOptions) you may need add custom attributes, click [here](https://vuejs.github.io/vetur/framework.html#custom-tags-attributes) to see vetur's docs,click [here](https://github.com/Qymh/q-layout/blob/master/vetur/attributes.json) to see our default attributes
