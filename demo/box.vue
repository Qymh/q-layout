<template>
  <q-row ref="box" class="box">
    <q-row pl="10" pr="10">
      <q-row mt="10" mb="10">
        演示
      </q-row>
      <slot />
    </q-row>
    <q-row pl="10" pr="10">
      <q-row mt="10" mb="10">
        代码
      </q-row>
    </q-row>
    <pre class="hljs">
      <div v-html="generatedRaw"/>
    </pre>
    <q-row pl="10" pr="10">
      <q-row mt="10" mb="10">
        转义后的html
      </q-row>
    </q-row>
    <div class="hljs">
      <code class="html" v-html="generatedCode" />
    </div>
  </q-row>
</template>

<script>
export default {
  name: 'Box',
  data() {
    return {
      generatedCode: '',
      generatedRaw: ''
    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    raw: {
      type: String,
      default: ''
    }
  },
  mounted() {
    let htmlStr = this.$refs.box.$el.children[0].children[1].outerHTML;
    if (htmlStr.indexOf('class') > 0) {
      htmlStr = htmlStr.replace(/data-[^\s|>]+/g, '').replace(/(\s)(?:s)/, 's');
    } else {
      htmlStr = htmlStr.replace(/data-[^\s|>]+/g, '').replace(/(\s)(?:s)/, 's');
    }
    const code = window.hljs.highlightAuto(htmlStr, ['html']);
    const rawCode = window.hljs.highlightAuto(this.raw.replace(/'/g, '"'), [
      'html'
    ]);
    this.generatedCode = code.value;
    this.generatedRaw = rawCode.value;
  }
};
</script>

<style>
pre {
  margin: 0 !important;
}
.hljs {
  padding: 0px 10px;
}
</style>
