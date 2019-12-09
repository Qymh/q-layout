# q-layout

![](https://img.shields.io/circleci/build/github/Qymh/q-layout)
![](https://img.shields.io/codecov/c/github/Qymh/q-layout)
![](https://img.shields.io/npm/v/q-layout)
![](https://img.shields.io/npm/l/q-layout)

## Usage

### Download

#### yarn

```bash
yarn add q-layout
```

#### npm

```bash
npm install q-layout
```

#### cnpm

```bash
cpm install q-layout
```

### Import

import `q-layout` in the entry file

```javascript
import Vue from 'vue';
import QLayout from 'q-layout';
Vue.use(QLayout);
```

And then you can use `q-row` component anywhere

```html
<q-row>template</q-row>
```

## Configuration

### InstallOptions

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

[We provide many props that can satisfy many demands](https://github.com/Qymh/q-layout/blob/master/src/collections/background.ts), but if you want to add some custom css property or change default css property you can use collections

collections has some configurations

#### Keep Original Property

The following configurations can change property based on the original property

##### alias

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

##### coverage

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

#### New Property

If you need to configurate some custom properties you can use following configurations `raw` `type` `default` `pure` `class` `classPure`

- raw

The original css property, which is **required**

- type

The property's type

> The same as the prop's type in vue, which is **required**

- default

The property's default value

> The same as the prop's default value in vue, which is **required**

- raw + type + default

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

- pure

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

- class

Translate property by setting classNames not styles

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

- classPure

If property is a boolean will enable `class` if not will enable `pure`

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

### Props

We separate css properties by [w3c standard classification](https://www.w3school.com.cn/cssref/index.asp)

#### Background

| props      |  Type  |        Raw         | Default | TranslateType |
| ---------- | :----: | :----------------: | :-----: | ------------: |
| background | String |     background     |   ''    |          pure |
| bkColor    | String |  backgroundColor   |   ''    |          pure |
| bkPosition | String | backgroundPosition |   ''    |          pure |
| bkRepeat   | String |  backgroundRepeat  |   ''    |          pure |
| bkSize     | String |   backgroundSize   |   ''    |          pure |

#### Border

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

#### Color

| props   |     Type      |   Raw   | Default | TranslateType |
| ------- | :-----------: | :-----: | :-----: | ------------: |
| opacity | String Number | opacity |   ''    |          pure |

#### Dimension

| props |     Type      |    Raw    | Default | TranslateType |
| ----- | :-----------: | :-------: | :-----: | ------------: |
| h     | String Number |  height   |   ''    |       default |
| maxh  | String Number | maxHeight |   ''    |       default |
| minh  | String Number | minHeight |   ''    |       default |
| w     | String Number |   width   |   ''    |       default |
| maxw  | String Number | maxWidth  |   ''    |       default |
| minw  | String Number | minWidth  |   ''    |       default |

#### Flex

| props   |  Type   |      Raw       | Default | TranslateType |                                           Description |
| ------- | :-----: | :------------: | :-----: | :-----------: | ----------------------------------------------------: |
| dir     | String  | flexDirection  |   ''    |     class     |                                 top right bottom left |
| justify | String  | justifyContent |   ''    |     class     | flex-start flex-end center space-between space-around |
| align   | String  |   alignItems   |   ''    |     class     |           flex-start flex-end center baseline stretch |
| flex    | String  |      flex      |   ''    |     class     |                                                  1-10 |
| center  | Boolean |       ''       |   ''    |     class     |                         justify=center & align=center |

#### FontSize

| props      |  Type  |    Raw     | Default | TranslateType |
| ---------- | :----: | :--------: | :-----: | ------------: |
| fontSize   | String |  fontSize  |   ''    |       default |
| fontWeight | String | fontWeight |   ''    |          pure |

#### Margin

| props  |     Type      |     Raw      | Default | TranslateType |
| ------ | :-----------: | :----------: | :-----: | ------------: |
| margin | String Number |    margin    |   ''    |       default |
| mt     | String Number |  marginTop   |   ''    |       default |
| mr     | String Number | marginRight  |   ''    |       default |
| mb     | String Number | marginBottom |   ''    |       default |
| ml     | String Number |  marginLeft  |   ''    |       default |

#### Padding

| props   |     Type      |      Raw      | Default | TranslateType |
| ------- | :-----------: | :-----------: | :-----: | ------------: |
| padding | String Number |    padding    |   ''    |       default |
| pt      | String Number |  paddingTop   |   ''    |       default |
| pr      | String Number | paddingRight  |   ''    |       default |
| pb      | String Number | paddingBottom |   ''    |       default |
| pl      | String Number |  paddingLeft  |   ''    |       default |

#### Position

| props      |     Type      |      Raw      | Default | TranslateType |
| ---------- | :-----------: | :-----------: | :-----: | ------------: |
| position   |    String     |   position    |   ''    |          pure |
| t          | String Number |      top      |   ''    |       default |
| r          | String Number |     right     |   ''    |       default |
| b          | String Number |    bottom     |   ''    |       default |
| l          | String Number |     left      |   ''    |       default |
| diplay     |    String     |    display    |   ''    |          pure |
| float      |    String     |     float     |   ''    |          pure |
| cursor     |    String     |    cursor     |   ''    |          pure |
| va         |    String     | verticalAlign |   ''    |          pure |
| zIndex     |    String     |    zIndex     |   ''    |          pure |
| visibility |    String     |  visibility   |   ''    |          pure |

#### Text

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
|               |        |               |         |               |

#### User

| props |  Type  |    Raw    | Default | TranslateType |
| ----- | :----: | :-------: | :-----: | ------------: |
| box   | String | boxSizing |   ''    |          pure |
