<template>
  <div>
    <transition name="appear">
      <compBackdrop v-if="showDrawer" @closeBackdrop="closeDrawer" />
    </transition>

    <transition name="slide">
      <div v-if="showDrawer" class="drawer">
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </div>
    </transition>
  </div>
</template>


<script>
import compBackdrop from '@/components/UI/Backdrop.vue';

export default {
  props: {
    open: Boolean
  },
  components: {
    compBackdrop
  },
  data() {
    return {
      showDrawer: false
    }
  },
  methods: {
     closeDrawer() {
      this.$emit('closeDrawer');
    }
  },
  watch: {
    open(newVal) { this.showDrawer = newVal; }
  }
}

</script>


<style scoped>
  .drawer {
    position: fixed;
    width: 280px;
    height: 100%;
    top: 0;
    right: 0px;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
  }

  .appear-enter {
		opacity: 0;
	}

	.appear-enter-active {
		transition: all 0.5s ease;
	}

	.appear-leave-active {
		opacity: 0;
		transition: all 0.5s ease;
	}

	.slide-enter-active {
		animation: slideLeft 0.5s;
	}

	.slide-leave-active {
		animation: slideBack 0.5s ease-in;
	}


  @keyframes slideLeft {
		from {
			right: -280px;
		}
		to {
			right: 0;
		}
	}

	@keyframes slideBack {
		from {
			right: 0;
		}
		to {
      right: -280px;
		}
	}
</style>