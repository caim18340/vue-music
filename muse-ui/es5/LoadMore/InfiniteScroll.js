import Circular from '../Progress/Circular';
import scroll from '../internal/directives/scroll';
import { getScrollTop } from '../utils/dom';

export default {
  name: 'mu-infinite-scroll',
  directives: {
    scroll: scroll
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '正在加载...'
    }
  },
  data: function data() {
    return {
      target: null
    };
  },
  mounted: function mounted() {
    this.target = this.$el;
  },

  methods: {
    onScroll: function onScroll(scroller) {
      if (this.loading) return;
      var isWindow = scroller === window;
      var scrollTop = getScrollTop(scroller);
      var scrollHeight = isWindow ? document.documentElement.scrollHeight || document.body.scrollHeight : scroller.scrollHeight;
      var h = scrollHeight - scrollTop - 5;
      var sh = isWindow ? window.innerHeight : scroller.offsetHeight;
      if (h <= sh) {
        this.$emit('load');
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-infinite-scroll',
      directives: [{
        name: 'scroll',
        value: {
          callback: this.onScroll,
          target: this.target
        }
      }]
    }, [h(Circular, {
      props: {
        size: 24
      },
      directives: [{
        name: 'show',
        value: this.loading
      }]
    }), h('span', {
      staticClass: 'mu-infinite-scroll-text',
      directives: [{
        name: 'show',
        value: this.loading
      }]
    }, this.loadingText)]);
  }
};